import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, customer, total, shipping_cost } = body

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Create order in Supabase
    const { data: order, error: orderError } = await supabase
      .from('rbe_orders')
      .insert({
        customer_name: `${customer.firstName} ${customer.lastName}`,
        customer_email: customer.email,
        customer_phone: customer.phone,
        shipping_address: customer.address,
        shipping_city: customer.city,
        shipping_postal: customer.postal,
        shipping_country: customer.country,
        subtotal: total - shipping_cost,
        shipping_cost,
        total,
        status: 'new',
        notes: customer.notes || null,
      })
      .select()
      .single()

    if (orderError) throw orderError

    // Create order items
    const orderItems = items.map((item: { product_id: string; name: string; quantity: number; price: number }) => ({
      order_id: order.id,
      product_id: item.product_id,
      product_name: item.name,
      quantity: item.quantity,
      unit_price: item.price,
      total: item.price * item.quantity,
    }))

    await supabase.from('rbe_order_items').insert(orderItems)

    // Create or update client
    const { data: existingClient } = await supabase
      .from('rbe_clients')
      .select()
      .eq('email', customer.email)
      .single()

    if (existingClient) {
      await supabase
        .from('rbe_clients')
        .update({
          total_orders: existingClient.total_orders + 1,
          total_spent: existingClient.total_spent + total,
          segment: existingClient.total_orders >= 4 ? 'vip' : existingClient.total_orders >= 1 ? 'fidele' : 'nouveau',
          updated_at: new Date().toISOString(),
        })
        .eq('id', existingClient.id)
    } else {
      await supabase.from('rbe_clients').insert({
        name: `${customer.firstName} ${customer.lastName}`,
        email: customer.email,
        phone: customer.phone,
        city: customer.city,
        address: customer.address,
        postal_code: customer.postal,
        country: customer.country,
        total_orders: 1,
        total_spent: total,
        segment: 'nouveau',
      })
    }

    // TODO: Create Mollie payment
    // const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })
    // const payment = await mollieClient.payments.create({...})

    // For now, redirect to confirmation
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    return NextResponse.json({
      checkoutUrl: `${siteUrl}/confirmation?order=${order.reference}`,
      orderId: order.id,
      reference: order.reference,
    })
  } catch (error) {
    console.error('Payment error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la création du paiement' },
      { status: 500 }
    )
  }
}

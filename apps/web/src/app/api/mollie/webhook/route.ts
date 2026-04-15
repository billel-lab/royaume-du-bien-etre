import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { id: paymentId } = body

    // TODO: Verify payment with Mollie API
    // const mollieClient = createMollieClient({ apiKey: process.env.MOLLIE_API_KEY! })
    // const payment = await mollieClient.payments.get(paymentId)
    // Update order status in Supabase based on payment.status

    console.log('Mollie webhook received:', paymentId)

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook error' }, { status: 500 })
  }
}

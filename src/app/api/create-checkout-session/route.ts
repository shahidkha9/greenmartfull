import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
})

export async function POST(request: Request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe API key is not configured' }, { status: 500 })
  }

  try {
    const { shippingDetails, amount } = await request.json()

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'GreenMart Order',
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/order-confirmation`,
      cancel_url: `${request.headers.get('origin')}/cart`,
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    })

    return NextResponse.json({ id: session.id })
  } catch (err: any) {
    console.error('Stripe API Error:', err)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}



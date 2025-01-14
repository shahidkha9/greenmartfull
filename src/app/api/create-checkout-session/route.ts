import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Ensure your Stripe secret key is defined in the `.env.local` file
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2024-12-18.acacia', // Ensure the API version matches your requirements
})

export async function POST(request: Request) {
  const { amount } = await request.json() // Removed `shippingDetails` as it is unused

  try {
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
  } catch (err) {
    // Explicitly define the error type (StripeError)
    if (err instanceof Stripe.errors.StripeError) {
      return NextResponse.json({ error: err.message }, { status: 500 })
    }

    // Fallback for unexpected errors
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 })
  }
}

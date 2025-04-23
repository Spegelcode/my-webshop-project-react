require('dotenv').config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(cors({ origin: "http://localhost:5173",
  credentials: true,
 }));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.title,
        images: [item.thumbnail],
      },
      unit_amount: item.price * 100, // Stripe uses cents!
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:5173/success',
      cancel_url: 'http://localhost:5173/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4242, () => console.log('🚀 Server running on http://localhost:4242'));

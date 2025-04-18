const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = new Stripe("sk_test_51R7Cog2YSZsKT8ZBACETT8Dga9JGq6awMxomOiSnHPhL4ReS0CaCgitvZLVDzUfvb7qY2KXVpPIZSRphE9CRiwYk00l21F2MXT");

app.use(cors({ origin: "http://localhost:5177",
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
      success_url: 'http://localhost:5177/success',
      cancel_url: 'http://localhost:5177/cancel',
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(4242, () => console.log('🚀 Server running on http://localhost:4242'));

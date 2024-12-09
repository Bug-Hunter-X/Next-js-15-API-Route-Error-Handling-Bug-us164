```javascript
// pages/api/data.js
export default async function handler(req, res) {
  // Simulate an asynchronous operation that might fail
  try {
    const data = await someAsyncOperation(); // This might throw an error
    res.status(200).json(data);
  } catch (error) {
    // Next.js 15 might not automatically handle this error correctly,
    // leading to a 500 error without a proper error message.
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

async function someAsyncOperation() {
  // Replace this with your actual async operation
  // Example: fetching data from an external API
  await new Promise(resolve => setTimeout(resolve, 500));
  throw new Error('Simulated error');
}
```
```javascript
// pages/api/dataSolution.js
export default async function handler(req, res) {
  try {
    const data = await someAsyncOperation();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Return a more informative error response
    res.status(500).json({ error: 'Failed to fetch data', details: error.message });
  }
}

async function someAsyncOperation() {
  // Simulate async operation and potential error
  await new Promise(resolve => setTimeout(resolve, 500));
  throw new Error('Simulated error');
}
```
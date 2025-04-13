// index.js
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/enhance', async (req, res) => {
  try {
    const { imageUrl } = req.body;

    const response = await axios.post(
      'https://api.claid.ai/v1-beta1/image/edit',
      {
        input: imageUrl,
        operations: {
          restorations: {
            upscale: "smart_enhance",
            polish: true,
          },
        },
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.VITE_API_KEY_NEW}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ enhancedUrl: response.data.data.output.tmp_url });
  } catch (error) {
    console.error("❌ Backend Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Enhancement failed." });
  }
});

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});

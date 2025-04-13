// enhanceImageAPI.js

import axios from 'axios';
// const API_KEY = import.meta.env.VITE_API_KEY_NEW;
const BACKEND = "https://image-enhancer-4.onrender.com";
const uploadToCloudinary = async (file) => {
  if (!file) return null;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "Images"); // Replace with your Cloudinary preset

  try {
    const response = await fetch("https://api.cloudinary.com/v1_1/dbe31jkg1/image/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.secure_url) {
      console.log("✅ Uploaded Image URL:", data.secure_url);
      return data.secure_url;
    } else {
      console.error("❌ Upload failed:", data);
      return null;
    }
  } catch (error) {
    console.error("❌ Upload error:", error);
    return null;
  }
};
// above is work 

export const enhanceImageAPI = async (cloudinaryUrl) => {
  try {
    const res = await axios.post(`${BACKEND}/api/enhance`, {
      imageUrl: await uploadToCloudinary(cloudinaryUrl),
    });

    return res.data.enhancedUrl;
  } catch (err) {
    console.error("❌ React enhancement error:", err);
    return null;
  }
};

// export const enhanceImageAPI = async (imageUrl) => {
//   const payload = {
//     input: imageUrl,
//     operations: {
//       restorations: {
//         upscale: "smart_enhance",
//         polish: true
//       }
//     }
//   };

//   try {
//     const response = await axios.post(
//       'https://api.claid.ai/v1/image/edit',
//       payload,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${API_KEY}` // Replace with your actual API key
//         }
//       }
//     );

//     return response.data.data.output.tmp_url; // Enhanced image URL
//   } catch (error) {
//     console.error('Error enhancing image:', error);
//     throw error;
//   }
// };









// old api code which api ssl are expire or else that not work anymore
// const API_KEY = import.meta.env.VITE_API_KEY;// Replace with your actual API key
// const BASE_URL = 'https://techhk.aoscdn.com';
// const MAXIMUM_RETRIES = 20;

// export const enhanceImageAPI = async (file) => {
//     try {
        
//         console.log(file);
        
//         console.log(API_KEY);
        
//         const taskId = await uploadImage(file);
//         console.log("Image Uploaded Successfully, Task ID:", taskId);

//         const enhancedImageData = await PollForEnhancedImage(taskId);
//         console.log("Enhanced Image Data:", enhancedImageData);
        
//         return enhancedImageData;
//     } catch (error) {
//         console.log("Error enhancing image:", error.message);
//     }
// };

// const uploadImage = async (file) => {
//     const formData = new FormData();
//     formData.append("image_file", file);

//     const { data } = await axios.post(
//         `https://techhk.aoscdn.com/api/tasks/visual/scale`,
//         {
//             headers: {
//                 "Content-Type": "multipart/form-data",
//                 "X-API-KEY": API_KEY,
//             },
//         },formData,
//     );


//     console.log(data);
    
//     if (!data?.data?.task_id) {
//         throw new Error("Failed to upload image! Task ID not found.");
//     }
//     return data.data.task_id;
// };

// const PollForEnhancedImage = async (taskId, retries = 0) => {
//     const result = await fetchEnhancedImage(taskId);

//     if (result.state === 4) {
//         console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

//         if (retries >= MAXIMUM_RETRIES) {
//             throw new Error("Max retries reached. Please try again later.");
//         }

//         // wait for 2 second
//         await new Promise((resolve) => setTimeout(resolve, 2000));

//         return PollForEnhancedImage(taskId, retries + 1);
//     }

//     console.log("Enhanced Image URL:", result);
//     return result;
// };

// const fetchEnhancedImage = async (taskId) => {
//     const { data } = await axios.get(
//         `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
//         {
//             headers: {
//                 "X-API-KEY": API_KEY,
//             },
//         }
//     );
//     if (!data?.data) {
//         throw new Error("Failed to fetch enhanced image! Image not found.");
//     }

//     return data.data;
// };

// // {status: 200, message: "success", data: {task_id: "187b1adc-b35f-46d7-8670-47f88f89fd73"}}

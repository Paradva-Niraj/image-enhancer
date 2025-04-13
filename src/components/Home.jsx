import { useState } from "react";
import ImageReview from "./ImageReview.jsx";
import ImageUpload from "./ImageUpload.jsx";
import { enhanceImageAPI } from "../API/enhanceImageAPI";

function Home() {

    const [upload,setUpload] = useState(null);
    const [enhanced,setEnhanced] = useState(null);
    const [loading,setLoading] = useState(false);

    const uploadChange = async (file) => {
        setUpload(URL.createObjectURL(file));
        setLoading(true);
        try {
            const enhancedURL = await enhanceImageAPI(file);
            setEnhanced(enhancedURL);
            setLoading(false);
        } catch (error) {
            console.log("image API error",error);
    
        }
    }

    return ( <>

        <ImageUpload uploadChange={uploadChange}/>
        <ImageReview loading={loading} upload={upload} enhanced={enhanced}/>

    </> );
}

export default Home;

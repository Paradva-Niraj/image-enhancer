import { useState, useEffect } from "react";
import Loading from './Loading.jsx'
function ImageReview({ loading, upload, enhanced }) {

    const [error, SetError] = useState(false);

    const hasError = (event) => {
        SetError(true);
        console.log(error);
    }

    useEffect(() => {
        console.log("Upload prop updated in ImageReview:", upload);
    }, [upload]);

    return (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full">

            {/* show original image which uploaded by user */}
            <div className="bg-white shadow-lg w-sm rounded-xl overflow-hidden">
                <h2 className="text-xl font font-semibold text-center bg-gray-800 text-white py-2 px-2">Uploaded Image</h2>

                {
                    (!error && upload) ? <div className="flex items-center justify-center h-[320px] bg-gray-100">
                        <img src={upload} alt="" onError={hasError} className="h-full object-contain" />
                    </div>
                        :
                        <div className="flex items-center justify-center h-80 bg-gray-200">
                            No Image Selected
                        </div>
                }

            </div>


            {/* Enhanced image which uploaded by user and fetc from api */}
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font font-semibold text-center text-white py-2 px-2 bg-blue-950">Enhanced Image</h2>
                {
                    (!error && upload) ? (!loading) ? <h2>{enhanced}</h2> : <Loading />
                        : <div className="flex items-center justify-center h-80 bg-gray-200">
                            Upload Image
                        </div>


                    // (!error && upload) ? (!loading)?<img src="" alt="" onError={hasError} className="w-full h-full object-cover" />:<Loading />
                    //     : <div className="flex items-center justify-center h-80 bg-gray-200">
                    //     Upload Image
                    // </div>
                }

            </div>
        </div>
    );
}

export default ImageReview;
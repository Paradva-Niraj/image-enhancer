function ImageUpload({uploadChange}) {

    const handelChange = (event) => {
        console.log(event.target.files[0]);
        uploadChange(event.target.files[0]);
    }

    return ( <>
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <label htmlFor="Photo" className="block w-full cursor-pointer border-2 border-dashed border-bg-200  p-4 rounded-md text-center hover:border-gray-400 transition-all ">
            <input type="file" id="Photo" className="hidden" onChange={handelChange}/>
            <span>Upload Your Image</span>
            </label>
        </div>
    </> );
}

export default ImageUpload;
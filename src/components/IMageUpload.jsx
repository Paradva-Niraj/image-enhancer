function ImageUpload() {
    return ( <>
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl">
            <label htmlFor="Photo" className="block w-full cursor-pointer border-2 border-dashed border-bg-200  p-4 rounded-md text-center hover:border-blue-600 transition-all ">
            <input type="file" id="Photo" className="hidden"/>
            <sapn>Upload Your Image</sapn>
            </label>
        </div>
    </> );
}

export default ImageUpload;
import { useState } from "react";


const Photooo = () => {
    const [imgUrl, setImgUrl] = useState('');

    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_SECRET}`

    const uploadImage = (e) => {
        const image = e.target.files[0];
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            fetch(url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                    const photoUrl = data.data.display_url;
                    console.log("uploadImage  photoUrl", photoUrl)
                    setImgUrl(photoUrl)
                })
        }
    }


    return (
        <div className="h-screen my-12">
            <div className="w-full h-[400px] p-5 border-2 border-indigo-600 rounded-md">
                {
                    imgUrl ? <img className="w-full h-full object-contain object-top rounded-lg" src={imgUrl} alt="Your Uploaded Image No Found" />
                        :
                        <img className="w-full h-full object-contain object-top rounded-lg" src="https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg" alt="" />
                }
            </div>
            <div className="my-8 flex justify-center items-center">
                <label htmlFor="img">
                    <div className="border border-indigo-500 rounded">
                        <span className="py-2 px-4 rounded cursor-pointer">
                        </span>
                    </div>
                </label>
            </div>
            <input onChange={uploadImage} accept="image/*" type="file" id="img" className="hidden" />
        </div>
    );
};

export default Photooo;
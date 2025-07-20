import React, { useRef, useState } from 'react'
import { LuUser, LuUpload, LuTrash } from "react-icons/lu"

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            if (setPreview) setPreview(preview);
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        if (setPreview) setPreview(null);
    };

    const onChooseFile = () => {
        inputRef.current.click();
    }

    return (
        <div className='flex justify-center mb-6'>
            <input
                type="file"
                accept='image/*'
                ref={inputRef}
                onChange={handleImageChange}
                className='hidden'
            />

            {!image ? (
                <div
                    className='w-24 h-24 flex items-center justify-center bg-[#1f2937] border border-gray-700 rounded-full relative cursor-pointer transition hover:shadow-md'
                    onClick={onChooseFile}
                >
                    <LuUser className='text-4xl text-blue-400' />
                    <button
                        type='button'
                        className='w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full absolute -bottom-1 -right-1 border border-gray-800'
                        onClick={onChooseFile}
                    >
                        <LuUpload />
                    </button>
                </div>
            ) : (
                <div className='relative'>
                    <img
                        src={preview || previewUrl}
                        alt="profile"
                        className='w-24 h-24 rounded-full object-cover border border-gray-700'
                    />
                    <button
                        type='button'
                        className='w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 border border-gray-800'
                        onClick={handleRemoveImage}
                    >
                        <LuTrash />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePhotoSelector;

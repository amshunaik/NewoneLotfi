
'use client';
import { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import Image from 'next/image';

interface DealerProps {
    images: { image: StaticImageData }[]; // Accept an array of objects with an image property
}

const Dealer: React.FC<DealerProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        const width = window.outerWidth;
        console.log(width)
        const totaliter = Math.max(1, Math.floor(width / (450)))
        console.log(totaliter)
        const r=(Math.floor(images.length/totaliter))
        setCurrentIndex((prevIndex) =>
            prevIndex === r-1 ? 0 : prevIndex + 1
        );
        console.log(currentIndex);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length/3 - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full h-64 overflow-hidden rounded-lg px-8">
            <div
                className="absolute flex gap-[100px] transition-transform duration-500 px-[20px]"
                style={{ transform: `translateX(-${currentIndex * 60}%)` }}
            >
                {images.map((item, index) => (
                    <Image
                        key={index}
                        src={item.image} // Access the image property
                        alt={`Slide ${index}`}
                      
                        className="w-[350px] h-[250px] object-fit"
                    />
                ))}
            </div>
            <button
                onClick={prevImage}
                className=" bg-blue-200 absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                ❮
            </button>
            <button
                onClick={nextImage}
                className=" bg-blue-200 absolute right-8 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
            >
                ❯
            </button>
        </div>
    );
};

export default Dealer;

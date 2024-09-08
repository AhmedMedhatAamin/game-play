import React, { useState, useEffect, useCallback } from 'react';
import './PictureGallery.css';

// Import your images
import image1 from './assets/dor001.jpg';
import image2 from './assets/eds002.jpg';
import image3 from './assets/lob004.jpg';
import image4 from './assets/fmr001.jpg';
import image5 from './assets/eds001.jpg';
import image6 from './assets/dor003.jpg';
import image7 from './assets/lob013.jpg';
import image8 from './assets/dor003.jpg';
import image9 from './assets/lob070.jpg';
import image10 from './assets/lob021.jpg';
import image11 from './assets/lob019.jpg';
import image12 from './assets/lob019.jpg';

const images = [
    { src: image1, alt: 'Description of image 1' },
    { src: image2, alt: 'Description of image 2' },
    { src: image3, alt: 'Description of image 3' },
    { src: image4, alt: 'Description of image 4' },
    { src: image5, alt: 'Description of image 5' },
    { src: image6, alt: 'Description of image 6' },
    { src: image7, alt: 'Description of image 7' },
    { src: image8, alt: 'Description of image 8' },
    { src: image9, alt: 'Description of image 9' },
    { src: image10, alt: 'Description of image 10' },
    { src: image11, alt: 'Description of image 11' },
    { src: image12, alt: 'Description of image 12' },
];

function PictureGallery() {
    const [imageRoll, setImageRoll] = useState(false);
    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(images.length - 1);

    // Use useCallback to memoize swapImages function
    const swapImages = useCallback(() => {
        const newLeftIndex = (leftIndex + 1) % images.length;
        const newRightIndex = (rightIndex - 1 + images.length) % images.length;

        setLeftIndex(newLeftIndex);
        setRightIndex(newRightIndex);
    }, [leftIndex, rightIndex]);

    useEffect(() => {
        let interval;
        if (imageRoll) {
            interval = setInterval(swapImages, 2000);
        }
        return () => {
            clearInterval(interval);
        };
    }, [imageRoll, swapImages]); // Added swapImages to dependency array

    const handleRoll = () => {
        setImageRoll(!imageRoll);
    };

    return (
        <div className="picture-gallery">
            <div className="gallery-content">
                <div className="left-image">
                    <img
                        src={images[leftIndex].src}
                        alt={images[leftIndex].alt}
                        className="gallery-image"
                    />
                </div>
                <div className="right-image">
                    <img
                        src={images[rightIndex].src}
                        alt={images[rightIndex].alt}
                        className="gallery-image"
                    />
                </div>
                <button className='Roll' onClick={handleRoll}>
                    {imageRoll ? 'Stop Roll' : 'Start Roll'}
                </button>
            </div>
        </div>
    );
}

export default PictureGallery;

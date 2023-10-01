import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import './ImageGallery.css';
import { g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17, g18, g19, g20, g21, g22, g23, g24 } from '../../assets';

const images = [g18, g19, g20, g1,g2,g3,g4,g5,g6,g7,g8,g9,g10,g11,g12,g13,g14,g15,g16,g17, g21, g22, g23, g24];
const ImageGallery = () => {
  return (
    <div className='ImageGallery Section__Padding'>
        <div className='galleryTitle'>
            <h1>Gallery</h1>
        </div>
        <div className='underline'></div>
        <div className='MasonContainer'>
            <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry gutter='20px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: '100%', display: 'block'}}
                                alt=''
                            />
                        ))}
                    </Masonry>
            </ResponsiveMasonry>
        </div>
    </div>
  )
}

export default ImageGallery
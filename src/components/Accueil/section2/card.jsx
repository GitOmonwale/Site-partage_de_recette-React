import rating from '../../../assets/rating_starts.png'
import React from 'react';
function Card({ id, title, imageUrl }) {
    return <>
        <div className="flex flex-col gap-2">
            <img src={imageUrl} alt={'Image of ${title}'} className="w-full h-60" />
            <img src={rating} alt="rating_starts" className="w-28" />
            <span>{title}</span>
        </div>
    </>
}

export default Card



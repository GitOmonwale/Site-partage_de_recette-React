import React from 'react';
function Popular_categories({popularData}) {
    return <>
                {
                    popularData.map(card => (
                            <div className='flex flex-col items-center'>
                                <img src={card.imageUrl} alt="" className='rounded-full sm:h-36 h-28 sm:w-36 w-28' />
                                <span className='text-bold'>{card.title}</span>
                            </div>
                    ))
                }
     
    </>
}

export default Popular_categories
import React from 'react';
import Card from '../section4/card'
const handpickedData = [
    { id: 7, title: 'Pasta', imageUrl: '/src/assets/food_7.png' },
    { id: 8, title: 'Pizza', imageUrl: '/src/assets/food_8.png' },
    { id: 9, title: 'Vegan', imageUrl: '/src/assets/food_9.png' },
    { id: 10, title: 'Vegan', imageUrl: '/src/assets/food_10.png' },
    { id: 11, title: 'Vegan', imageUrl: '/src/assets/food_11.png' },
    { id: 12, title: 'Vegan', imageUrl: '/src/assets/food_12.png' },
];
function Hand_Picked() {
    return <>
        {/* <section className="lg:px-28 pt-20 md:px-20 px-10">
            <h1 className="text-3xl pb-4">Popular categories</h1>
            <div className="flex justify-between flex-wrap">
                {
                    popularData.map(card => (
                            <div className='flex flex-col items-center'>
                                <img src={card.imageUrl} alt="" className='rounded-full h-40 w-40' />
                                <span className='text-bold'>{card.title}</span>
                            </div>
                    ))
                }
            </div>
        </section > */}
        <Card></Card>
    </>
}

export default Hand_Picked
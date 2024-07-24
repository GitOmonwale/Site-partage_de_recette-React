import React from 'react';
const handpickedData = [
    { id: 13, title: 'The ultimate cookies frenzy', imageUrl: '/src/assets/food_13.png' },
    { id: 14, title: 'Cook like a Chef', imageUrl: '/src/assets/food_14.png' },
    { id: 15, title: 'Exquisite dinner ecipes Ideas', imageUrl: '/src/assets/food_15.png' },
    { id: 16, title: 'For the Love of Donuts', imageUrl: '/src/assets/food_16.png' },
    { id: 17, title: 'Sushi combo for your Next Party', imageUrl: '/src/assets/food_17.png' },
    { id: 18, title: 'EveryThings Bagel', imageUrl: '/src/assets/food_18.png' },
];
function Hand_Picked() {
    return <>
                {
                    handpickedData.map(handpicked => (
                        <div key={handpicked.id} className=" bg-white border border-gray-200 rounded-lg transform transition-transform duration-300 hover:scale-105">
                            <img className="rounded-t-lg w-full" src={handpicked.imageUrl} alt="" />
                            <div className="p-5 flex justify-between items-center">
                                <h2 className="mb-2 text-xl tracking-tight text-gray-900">{handpicked.title}</h2>
                                <button className='border border-1 py-1 px-2'>150 recipes</button>
                            </div>
                        </div>
                    ))
                }
    
    </>
}

export default Hand_Picked
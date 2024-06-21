import React from 'react';
const handpickedData = [
    { id: 13, title: 'Pasta', imageUrl: '/src/assets/food_13.png' },
    { id: 14, title: 'Pizza', imageUrl: '/src/assets/food_14.png' },
    { id: 15, title: 'Vegan', imageUrl: '/src/assets/food_15.png' },
    { id: 16, title: 'Vegan', imageUrl: '/src/assets/food_16.png' },
    { id: 17, title: 'Vegan', imageUrl: '/src/assets/food_17.png' },
    { id: 18, title: 'Vegan', imageUrl: '/src/assets/food_18.png' },
];
function Hand_Picked() {
    return <>
        <section className="lg:px-28 pt-20 md:px-20 px-10">
            <h1 className="text-3xl pb-4">Hand Picked Collection</h1>
            <div className="flex justify-between flex-wrap gap-4">
                {
                    handpickedData.map(handpicked => (
<div class="max-w-md bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105">
        <img class="rounded-t-lg w-full" src={handpicked.imageUrl} alt="" />
    <div class="p-5 flex justify-between items-center">
            <h2 class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">{handpicked.title}</h2>    
            <button className='border border-1 py-1 px-2'>150 recipes</button> 
    </div>
</div>
  ))
                }
            </div>
        </section >
       
    </>
}

export default Hand_Picked
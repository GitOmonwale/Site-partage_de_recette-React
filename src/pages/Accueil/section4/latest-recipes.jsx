import React from 'react';
const latestrecipesData = [
    { id: 19, title: 'Caramel Stramberry Milshake', imageUrl: '/src/assets/food_19.png' },
    { id: 20, title: 'Triple Decker Cranberry Cake', imageUrl: '/src/assets/food_20.png' },
    { id: 21, title: 'Smoked Salmon Salad Sandwich', imageUrl: '/src/assets/food_21.png' },
    { id: 22, title: 'Salmon in Creamy Sun Dried Tomato Sauce', imageUrl: '/src/assets/food_22.png' },
    { id: 23, title: 'Healthy Jam Waffle Breakfast', imageUrl: '/src/assets/food_23.png' },
    { id: 24, title: 'Gourmet Filet in Roasted Alomond Sauce', imageUrl: '/src/assets/food_24.png' },
    { id: 25, title: 'Chessy Bacon Pepper Soup', imageUrl: '/src/assets/food_25.png' },
    { id: 26, title: 'Cashew Vegan Rice', imageUrl: '/src/assets/food_26.png' },
    { id: 27, title: 'Pork Shoulder Cashew Noodles', imageUrl: '/src/assets/food_27.png' },
    { id: 28, title: 'Toasted Farfalle in Pesto Sauce', imageUrl: '/src/assets/food_28.png' },
    { id: 29, title: 'Eggs and Avocado Toast', imageUrl: '/src/assets/food_29.png' },
    { id: 30, title: 'Vegan Cauliflower Salad', imageUrl: '/src/assets/food_30.png' },
    { id: 31, title: 'Gourmet Filet in Roasted Alomond Sauce', imageUrl: '/src/assets/food_31.png' },
    { id: 32, title: 'Cashew Vegan Rice', imageUrl: '/src/assets/food_32.png' },
    { id: 33, title: 'Smoked Salmon Salad Sandwich', imageUrl: '/src/assets/food_1.png' },
    { id: 34, title: 'Healthy Jam Waffle Breakfast', imageUrl: '/src/assets/food_2.png' },
];
function Latest_Recipes() {
    return <>
        <section className="lg:px-28 pt-20 md:px-20 px-10">
            <h1 className="text-3xl pb-4">Hand Picked Collection</h1>
            <div className="flex justify-between flex-wrap ">
                {
                    latestrecipesData.map(latestrecipes => (
                        <div class="max-w-64 bg-white border-gray-200 rounded-lg">
                            <img class="rounded-lg w-full transform transition-transform duration-300 hover:scale-105" src={latestrecipes.imageUrl} alt="" />
                            <div class="py-3">
                                <h2 class="mb-5 text-xl font-bold tracking-tight">{latestrecipes.title}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
<div className='flex items-center justify-center'>
<button type="button" className='py-2 px-4 border-[1px] rounded-sm font-bold border-black '>Load More</button>
</div>
        </section >

    </>
}

export default Latest_Recipes
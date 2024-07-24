import React from 'react';

function Latest_Recipes({latestrecipesData}) {
    return <>
                {
                    latestrecipesData.map(latestrecipes => (
                        <div class="max-full bg-white border-gray-200 rounded-lg">
                            <img class="rounded-lg w-full transform transition-transform duration-300 hover:scale-105" src={latestrecipes.imageUrl} alt="" />
                            <div class="py-3">
                                <h2 class="text-lg font-bold tracking-tight">{latestrecipes.title}</h2>
                            </div>
                        </div>
                    ))
                }
    </>
}

export default Latest_Recipes
import React from 'react';

function Latest_Recipes({latestrecipesData}) {
    return <>
                {
                    latestrecipesData.map(latestrecipes => (
                        <div key={latestrecipes.id} className="max-full bg-white border-gray-200 rounded-lg">
                            <img className="rounded-lg w-full transform transition-transform duration-300 hover:scale-105" src={latestrecipes.imageUrl} alt="" />
                            <div className="py-3">
                                <h2 className="text-lg font-bold tracking-tight">{latestrecipes.title}</h2>
                            </div>
                        </div>
                    ))
                }
    </>
}

export default Latest_Recipes
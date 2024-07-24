import React from 'react'

const FreshRecipes = ({FreshRecipesData}) => {
  return (
            <div className="grid grid-cols-2 gap-4">
                {
                    FreshRecipesData.map(recipes => (
                        <div class="bg-white border-gray-200 rounded-lg">
                            <img class="rounded-lg w-full transform transition-transform duration-300 hover:scale-105" src={recipes.imageUrl} alt="" />
                            <div class="py-3">
                                <h2 class="font-bold tracking-tight text-center">{recipes.title}</h2>
                            </div>
                        </div>
                    ))
                }
    </div>
  )
}

export default FreshRecipes

import React from 'react'

const FreshRecipes = ({FreshRecipesData}) => {
  return (
            <div className="grid grid-cols-2 gap-4">
                {
                    FreshRecipesData.map(recipes => (
                        <div key={recipes.id} className="bg-white border-gray-200 rounded-lg">
                            <img className="rounded-lg w-full transform transition-transform duration-300 hover:scale-105" src={recipes.imageUrl} alt="" />
                            <div className="py-3">
                                <h2 className="font-bold tracking-tight text-center">{recipes.title}</h2>
                            </div>
                        </div>
                    ))
                }
    </div>
  )
}

export default FreshRecipes

import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import profil from "../../assets/profile_icon.png"
import rating from '../../assets/rating_starts.png'
const LatestRecipes = ({ LatestRecipesData }) => {
    return (
       <>
            {
                LatestRecipesData.map(recipes => (
                    <div className="bg-white border-gray-200 rounded-lg grid md:grid-cols-2 grid-cols-1 gap-2" key={recipes.id}>
                        <img className="rounded-lg w-full h-full transform transition-transform duration-300 hover:scale-105" src={recipes.imageUrl} alt="" />
                        <div className='p-7 lg-5 md-3 flex flex-col gap-2'>
                            <h2 className="mb-5 font-bold tracking-tight">{recipes.description}</h2>
                            <div className='flex items-center gap-2 max-w-96'>
                                <img src={profil} alt="profil photo" className='w-7 h-7 filter grayscale brightness-0' />
                                <span>Tricia Albert</span>
                            </div>
                            <img src={rating} alt="rating icon" className="w-28" />
                            <div className='flex max-w-96 justify-between items-center'>
                                <div className='flex items-center gap-1 max-w-96'>
                                    <GoComment />
                                    <span className='text-sm'>128</span>
                                </div>
                                <div className='flex items-center'>
                                    <CiCalendar />
                                    <span className='text-sm'>Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default LatestRecipes

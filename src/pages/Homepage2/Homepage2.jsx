import React from 'react'
import { CiCalendar } from "react-icons/ci";
import { GoComment } from "react-icons/go";
import logo from "../../assets/tastebite-logo.png"
import logo_instagram from "../../assets/logo_instagram.png"
import Latest from "../../assets/food_20.png"
import rating from '../../assets/rating_starts.png'
import profil from "../../assets/profile_icon.png"
import avatar from "../../assets/avatar.jpg"
import DropdownMenu from "../../components/navbar/drop";
import Hand_Picked from '../Homepage1/hand-picked'
import Latest_Recipes from '../Homepage1/latest-recipes';
import Footer from '../../components/footer';
import { FaSearch } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Super_Delicious from '../Homepage1/super_delicious';
import FreshRecipes from '../Homepage2/CardsFreshRecipes'
import LatestRecipes from '../Homepage2/CardsLatestRecipes'
import Button from '../../components/button';
import food4 from '../../assets/food_4.png';
import food5 from '../../assets/food_5.png';
import food6 from '../../assets/food_6.png';
import food7 from '../../assets/food_7.png';
import food8 from '../../assets/food_8.png';
import food9 from '../../assets/food_9.png';
import food10 from '../../assets/food_10.png';
import food11 from '../../assets/food_11.png';
import food12 from '../../assets/food_12.png';
import food13 from '../../assets/food_13.png';
import food14 from '../../assets/food_14.png';
import food15 from '../../assets/food_15.png';
import food16 from '../../assets/food_16.png';
import food17 from '../../assets/food_17.png';
import food18 from '../../assets/food_18.png';
import food19 from '../../assets/food_19.png';
import food20 from '../../assets/food_20.png';
import food21 from '../../assets/food_21.png';
import food22 from '../../assets/food_22.png';



const page1superDelicious = [
    { id: 1, title: 'Spinach and Cheese Pasta', imageUrl: food4 },
    { id: 2, title: 'Chicken and Waffles', imageUrl: food5 },
    { id: 3, title: 'Grilled Salmon', imageUrl: food6 },
];
const page1Freshrecipes = [
    { id: 4, title: 'Spinach and Cheese Pasta', imageUrl: food4 },
    { id: 5, title: 'Chicken and Waffles', imageUrl: food5 },
    { id: 6, title: 'Grilled Salmon', imageUrl: food6 },
    { id: 7, title: 'Spinach and Cheese Pasta', imageUrl: food7 },
    { id: 8, title: 'Chicken and Waffles', imageUrl: food8 },
    { id: 9, title: 'Grilled Salmon', imageUrl: food9 },
    { id: 10, title: 'Spinach and Cheese Pasta', imageUrl: food10 },
    { id: 11, title: 'Chicken and Waffles', imageUrl: food11 },

];
const page1Latestrecipes = [
    { id: 13, description: 'Caramel Stramberry Milshake', imageUrl: food13 },
    { id: 24, description: 'Triple Decker Cranberry Cake', imageUrl: food14 },
    { id: 15, description: 'Smoked Salmon Salad Sandwich', imageUrl: food15 },
    { id: 16, description: 'Salmon in Creamy Sun Dried Tomato Sauce', imageUrl: food16 },
]

const page1__Latestrecipes = [
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
];

const options1 = [
    { label: 'Option 1.1', href: '#' },
    { label: 'Option 1.2', href: '#' },
    { label: 'Option 1.3', href: '#' },
];

const options2 = [
    { label: 'Option 2.1', href: '#' },
    { label: 'Option 2.2', href: '#' },
    { label: 'Option 2.3', href: '#' },
];

const options3 = [
    { label: 'Option 3.1', href: '#' },
    { label: 'Option 3.2', href: '#' },
    { label: 'Option 3.3', href: '#' },
];

const buttonFollow = "Follow"

const Homepage2 = () => {
    return (
     <>
            <div className='max-w-screen-2xl m-auto lg:px-28 md:px-20 px-10'>
            <nav>
                <img src={logo} alt="logo" className="h-14 filter grayscale brightness-0 m-auto" />
                <div className='flex justify-between border mt-5 px-2 rounded-md'>
                <FaSearch className='text-3xl' />
                    <ul className="flex flex-row items-start">
                        <DropdownMenu buttonText="Menu 1" options={options1} />
                        <DropdownMenu buttonText="Menu 2" options={options2} />
                        <DropdownMenu buttonText="Menu 3" options={options3} />
                    </ul>
                    <LuMenu className='text-3xl' />
                </div>
            </nav>
            <Super_Delicious superDeliciousData={page1superDelicious} />

            </div>
            <div className='py-5 mt-10 px-10 md:px-5 bg-pink flex md:flex-row gap-4 flex-col justify-between'>
                <h1 className='text-4xl max-w-96 m-auto md:text-left text-center'>Daily cooking and recipes in your inbox!</h1>
                <div className='max-w-80 m-auto'>
                    <input type="text" className='w-2/3 py-2 px-4 outline-none rounded-tl-rounded-tr-sm  rounded-bl-rounded-tr-sm' placeholder='Email Adress' />
                    <button type="button" className='w-1/3 py-2 px-1 bg-orange-400 text-center  rounded-tr-sm  rounded-br-rounded-tr-sm'>JOIN</button>
                </div>
            </div>

            <div className='max-w-screen-2xl m-auto lg:px-28 md:px-20 px-10'>
            <div className='mt-10'>
                <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">
                    Latest Recipes
                </h1>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='lg:col-span-2 col-span-1'>
                        <div className="flex flex-col gap-2 border rounded-lg">
                            <img src={Latest} alt='Latest recipe' className="w-full h-96" />
                            <div className='p-5 flex flex-col gap-2'>
                                <img src={rating} alt="rating_starts" className="w-28" />
                                <h3 className='font-bold text-2xl'>Pumpkim Marshmallow Pie</h3>
                                <p>The perfect dessert for all! I finnaly found the perfect way to make the flakiest crust and the toasted marshmallow is to die for!</p>
                                <div className='flex justify-between'>
                                    <div className='flex justify-between items-center gap-2'>
                                        <img src={profil} alt="profil photo" className='w-7 h-7 filter grayscale brightness-0' />
                                        <span>Tricia Albert</span>
                                    </div>
                                    <div className='flex max-w-md justify-between items-center'>
                                        <div className='flex items-center'>
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
                        </div>
                        <div className='mt-10 flex flex-col gap-5'>
                            <LatestRecipes LatestRecipesData={page1Latestrecipes} />
                        </div>
                    </div>
                    <div className='col-span-1'>
                        <div className='flex flex-col justify-center items-center gap-2 border rounded-sm py-10 px-5'>
                            <img src={avatar} alt="" className='rounded-full w-20 h-20' />
                            <h3 className='text-2xl'>Hi! I'm Tara</h3>
                            <p>I'm a former dentist with a big passion, for food. Now I love exploring new cooking techniques as well as fun recipes</p>
                            <button type="button" className='py-2 px-4 border-[1px] rounded-sm font-bold border-black '>Read More</button>
                        </div>
                        <div className=''>
                            <h2 className='mt-10 mb-5 text-2xl'>Fresh Recipes</h2>
                            <FreshRecipes FreshRecipesData={page1Freshrecipes} />
                        </div>
                        <div className='flex flex-col gap-2 border rounded-sm p-5'>
                            <div className='flex justify-between item-center'>
                                <img src={logo_instagram} alt="logo" className="h-14 w-24 filter grayscale brightness-0" />
                                <div className='flex items-center justify-center m-auto'>
         <Button buttonName={buttonFollow}></Button>
         </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold text-lg'>575</h4>
                                    <span className='text-gray-400'>posts</span>
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold text-lg'>12.7K</h4>
                                    <span className='text-gray-400'>followers</span>
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-bold text-lg'>45</h4>
                                    <span className='text-gray-400'>following</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 gap-2'>
                                <img src={food17} alt="" className='rounded-md' />
                                <img src={food18} alt="" className='rounded-md' />
                                <img src={food19} alt="" className='rounded-md' />
                                <img src={food20} alt="" className='rounded-md' />
                                <img src={food21} alt="" className='rounded-md' />
                                <img src={food22} alt="" className='rounded-md' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Curated Collections</h1>
                <div className='grid md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-6'>
                    <Hand_Picked />
                </div>
            </div>
            <div className='mt-10'>
                <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Latest recipes</h1>
                <div className='grid md:grid-cols-3 grid-cols-2 gap-4'>
                    <Latest_Recipes latestrecipesData={page1__Latestrecipes} />
                </div>
            </div>
            </div>
        <Footer></Footer>
     </>
    )
}

export default Homepage2

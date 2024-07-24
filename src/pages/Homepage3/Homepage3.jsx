import React from 'react'
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { CiSearch } from "react-icons/ci"
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer'
import Popular_categories from '../Homepage1/popular_categorie';
import Superdelicious from '../Homepage3/Superdelicious'
import Latest_Recipes from '../Homepage1/latest-recipes';
import Hand_Picked from '../Homepage1/hand-picked';
import Button from '../../components/button'
import DropdownMenu from "../../components/navbar/drop";
import logo from "../../assets/tastebite-logo.png"
import food13 from '../../assets/food_13.png';
import food14 from '../../assets/food_14.png';
import food15 from '../../assets/food_15.png';
import food16 from '../../assets/food_16.png';
import food17 from '../../assets/food_17.png';
import food18 from '../../assets/food_18.png';


const page3popularCategories = [
  { id: 7, title: 'Pasta', imageUrl: '/src/assets/food_7.png' },
  { id: 8, title: 'Pizza', imageUrl: '/src/assets/food_8.png' },
  { id: 9, title: 'Vegan', imageUrl: '/src/assets/food_9.png' },
  { id: 10, title: 'Vegan', imageUrl: '/src/assets/food_10.png' },
  { id: 11, title: 'Vegan', imageUrl: '/src/assets/food_11.png' },
  { id: 12, title: 'Vegan', imageUrl: '/src/assets/food_12.png' },
];

const page3Superdelicious = [
  { id: 13, description: 'Caramel Stramberry Milshake', imageUrl: food13 },
  { id: 24, description: 'Triple Decker Cranberry Cake', imageUrl: food14 },
  { id: 15, description: 'Smoked Salmon Salad Sandwich', imageUrl: food15 },
  { id: 16, description: 'Salmon in Creamy Sun Dried Tomato Sauce', imageUrl: food16 },
  { id: 17, description: 'Smoked Salmon Salad Sandwich', imageUrl: food17 },
  { id: 18, description: 'Salmon in Creamy Sun Dried Tomato Sauce', imageUrl: food18 },
]


const page3Latestrecipes = [
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

const buttonName = "Load More"
const buttonLogin = "Login"
const Homepage3 = () => {
  return (
    <>
      <div className='flex justify-between items-center bg-gray-100 py-2 px-10'>
        <div className='flex gap-2 items-center'>
          <FiFacebook className='text-2xl' />
          <FiTwitter className='text-2xl' />
          <FiInstagram className='text-2xl' />
        </div>
        <div className='flex items-center gap-2'>
          <CiSearch className='text-2xl' />
          <Button buttonName={buttonLogin}></Button>
        </div>
      </div>
      <div className='max-w-screen-2xl m-auto lg:px-28 md:px-14 px-5'>
        <nav className='mt-10'>
          <img src={logo} alt="logo" className="h-14 filter grayscale brightness-0 m-auto" />
          <div className='flex items-center justify-center m-auto'>
            <ul className="flex flex-row">
              <DropdownMenu buttonText="Homepage" options={options1} />
              <DropdownMenu buttonText="Recipe Page" options={options2} />
              <DropdownMenu buttonText="Pages" options={options3} />
              <a href="#" className="text-black font-medium text-sm px-5 py-2.5 text-center inline-flex items-center">Buy</a>
            </ul>
          </div>
        </nav>
        <div className="mt-10">
          <h1 className="text-4xl mb-8 pb-4 mt-12 font-playfair font-semibold">Popular categories</h1>
          <div className="grid grid-cols-3 gap-3 lg:grid-cols-6 md:grid-cols-4">
            <Popular_categories popularData={page3popularCategories}></Popular_categories>
          </div>
        </div>
        <div>
          <h1 className="text-4xl mb-8 pb-4 mt-12 font-playfair font-semibold">Super Delicious</h1>
          <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
            <Superdelicious SuperdeliciousData={page3Superdelicious}></Superdelicious>
          </div>
        </div>
        <div className='mt-10'>
          <h1 className="text-4xl mb-8 pb-4 mt-12 font-playfair font-semibold">Curated Collections</h1>
          <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-20'>
            <Hand_Picked />
          </div>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl mb-8 pb-4 mt-12 font-playfair font-semibold">Latest recipes</h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            <Latest_Recipes latestrecipesData={page3Latestrecipes}></Latest_Recipes>
          </div>
        </div>
        <div className='flex items-center justify-center m-auto'>
          <Button buttonName={buttonName}></Button>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Homepage3

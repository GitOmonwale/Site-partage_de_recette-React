import React from 'react'
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer'
import Popular_categories from '../Homepage1/popular_categorie'

const page4popularCategories = [
  { id: 9, title: 'Vegan', imageUrl: '/src/assets/food_9.png' },
  { id: 10, title: 'Vegan', imageUrl: '/src/assets/food_10.png' },
  { id: 11, title: 'Vegan', imageUrl: '/src/assets/food_11.png' },
  { id: 12, title: 'Vegan', imageUrl: '/src/assets/food_12.png' },
    { id: 19, title: 'Milshake', imageUrl: '/src/assets/food_19.png' },
    { id: 20, title: 'Cake', imageUrl: '/src/assets/food_20.png' },
    { id: 21, title: 'Sandwich', imageUrl: '/src/assets/food_21.png' },
    { id: 22, title: 'Tomato Sauce', imageUrl: '/src/assets/food_22.png' },
    { id: 23, title: 'Meats', imageUrl: '/src/assets/food_23.png' },
    { id: 24, title: 'Chicken', imageUrl: '/src/assets/food_24.png' },
    { id: 25, title: 'Pepper Soup', imageUrl: '/src/assets/food_25.png' },
    { id: 26, title: 'Vegan', imageUrl: '/src/assets/food_26.png' },
    { id: 27, title: 'Noodles', imageUrl: '/src/assets/food_27.png' },
    { id: 28, title: 'Burger', imageUrl: '/src/assets/food_28.png' },
    { id: 29, title: 'Sandwiches', imageUrl: '/src/assets/food_29.png' },
    { id: 30, title: 'Less than 30 minutes', imageUrl: '/src/assets/food_30.png' },
    { id: 31, title: 'Pasta', imageUrl: '/src/assets/food_31.png' },
    { id: 32, title: 'Seafood', imageUrl: '/src/assets/food_32.png' },
    { id: 33, title: 'Soup', imageUrl: '/src/assets/food_1.png' },
    { id: 34, title: 'Ramen', imageUrl: '/src/assets/food_2.png' },
 ];
const Homepage4 = () => {
  return (
 <>
    <div className='max-w-screen-2xl m-auto lg:px-28 md:px-10 px-5'> 
      <NavBar></NavBar>
      <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Categories</h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Popular_categories popularData={page4popularCategories}></Popular_categories>
    </div>
    </div>
    <Footer></Footer>
 </>
  )
}

export default Homepage4

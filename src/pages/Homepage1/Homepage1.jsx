import NavBar from "../../components/navbar/navbar.jsx"
import Section1 from "./section1.jsx"
import Super_Delicious from "./super_delicious.jsx"
import Sweet_Tooth from "./sweet_tooth.jsx"
import Popular_categories from "./popular_categorie.jsx"
import Join_us from "./join_us.jsx"
import Hand_Picked from "./hand-picked.jsx"
import Latest_Recipes from "./latest-recipes.jsx"
import Button from "../../components/button.jsx"
import Footer from "../../components/footer.jsx"
import food1 from '../../assets/food_1.png';
import food2 from '../../assets/food_2.png';
import food3 from '../../assets/food_3.png';

const page1superDelicious = [
   { id: 1, title: 'Spinach and Cheese Pasta', imageUrl: food1 },
   { id: 2, title: 'Chicken and Waffles', imageUrl: food2 },
   { id: 3, title: 'Grilled Salmon', imageUrl: food3 },
];

const page1popularCategories = [
   { id: 7, title: 'Pasta', imageUrl: '/src/assets/food_7.png' },
   { id: 8, title: 'Pizza', imageUrl: '/src/assets/food_8.png' },
   { id: 9, title: 'Vegan', imageUrl: '/src/assets/food_9.png' },
   { id: 10, title: 'Vegan', imageUrl: '/src/assets/food_10.png' },
   { id: 11, title: 'Vegan', imageUrl: '/src/assets/food_11.png' },
   { id: 12, title: 'Vegan', imageUrl: '/src/assets/food_12.png' },
];

const page1Latestrecipes = [
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

const buttonName = "Load more"
function Accueil() {
   return <>

      <div className="max-w-screen-2xl m-auto lg:px-28 md:px-20 px-10">
         <NavBar></NavBar>
         <Section1></Section1>
         <div className="mt-10">
            <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Super Delicious</h1>
            <Super_Delicious superDeliciousData={page1superDelicious} />
         </div>
         <Sweet_Tooth></Sweet_Tooth>
         <div className="mt-10">
            <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Popular categories</h1>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2">
               <Popular_categories popularData={page1popularCategories}></Popular_categories>
            </div>
         </div>
      </div>
      <Join_us></Join_us>
      <div className="max-w-screen-2xl m-auto lg:px-28 md:px-20 px-10">
         <div className="mt-10">
            <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Hand Picked Collection</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
               <Hand_Picked></Hand_Picked>
            </div>
         </div>
         <div className="mt-10">
            <h1 className="text-4xl mb-8 pb-4 mt-12 border-b-2 font-playfair font-semibold">Latest recipes</h1>
            <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
               <Latest_Recipes latestrecipesData={page1Latestrecipes}></Latest_Recipes>
            </div>
         </div>
         <div className='flex items-center justify-center m-auto'>
         <Button buttonName={buttonName}></Button>
         </div>
      </div>
      <Footer></Footer>
   </>
}

export default Accueil
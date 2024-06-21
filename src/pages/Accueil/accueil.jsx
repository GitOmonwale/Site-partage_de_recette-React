import Header from "./header/header"
import Section1 from "./section1/section1"
import Super_Delicious from "./section2/super_delicious"
import Sweet_Tooth from "./section2/sweet_tooth"
import Popular_categories from "./section2/popular_categorie"
import Join_us from "./section3/join_us"
import Hand_Picked from "./section4/hand-picked.jsx"
import Latest_Recipes from "./section4/latest-recipes.jsx"
 function Accueil () {
    return <>
    <section className="max-w-screen-2xl m-auto">
    <Header></Header>
   <Section1></Section1>
   <Super_Delicious></Super_Delicious>
   <Sweet_Tooth></Sweet_Tooth>
   <Popular_categories></Popular_categories>
   <Join_us></Join_us>
 <Hand_Picked></Hand_Picked>
<Latest_Recipes></Latest_Recipes>

    </section>
    </>
 }

export default Accueil
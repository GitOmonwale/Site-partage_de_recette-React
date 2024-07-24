import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import Button from '../../components/button';

const recipesData = [
    { id: 1, name: 'Black Forest Birthday Cake', image: '/src/assets/food_9.png', category: 'Cake' },
    { id: 2, name: 'Double Thick Layered Sponge Cake', image: '/src/assets/food_10.png', category: 'nouille' },
    { id: 3, name: 'Cranberry Macaroon Ice Cream Cake', image: '/src/assets/food_11.png', category: 'nouille' },
    { id: 4, name: 'Almond Cinnamon Sponge Cake', image: '/src/assets/food_12.png', category: 'sushi' },
    { id: 5, name: 'Four Milk Birthday Cupcakes', image: '/src/assets/food_13.png', category: 'Cake' },
    { id: 6, name: 'Chocolate Fudge Cake', image: '/src/assets/food_14.png', category: 'Cake' },
    { id: 7, name: 'Vanilla Bean Cake', image: '/src/assets/food_15.png', category: 'Cake' },
    { id: 8, name: 'Red Velvet Cake', image: '/src/assets/food_16.png', category: 'Cake' },
    { id: 9, name: 'Lemon Drizzle Cake', image: '/src/assets/food_17.png', category: 'Cake' },
    { id: 10, name: 'Carrot Cake', image: '/src/assets/food_18.png', category: 'Cake' },
    { id: 11, name: 'Cheesecake', image: '/src/assets/food_19.png', category: 'Cake' },
];

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

    const handleSearch = () => {
        const filtered = recipesData.filter((val) => {
            if (searchTerm === "") {
                return true;
            } else if (val.category.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }
            return false;
        });
        setFilteredRecipes(filtered);
    };

    const buttonSeeAll = `See all ${filteredRecipes.length - 4} results`;

    return (
        <div className="max-w-screen-2xl m-auto lg:px-28 pb-10 md:px-14 px-5 bg-gray-100">
            <div className="flex items-center border-b-[1px] mb-5 border-black">
                <input
                    type="text"
                    placeholder="Cake"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    className="w-full outline-none bg-gray-100"
                />
                <button onClick={handleSearch} className="p-2 ml-2 text-2xl">
                    <CiSearch />
                </button>
            </div>

            <div>
                {filteredRecipes.length > 0 ? (
                    <>
                        {filteredRecipes.slice(0, 4).map((val) => (
                            <div className='flex gap-2 border-b-[1px] mb-5 p-2' key={val.id}>
                                <img src={val.image} alt={val.name} className='w-16 h-16 object-cover' />
                                <div>{val.name}</div>
                            </div>
                        ))}
                        {filteredRecipes.length > 4 && (
                            <div className='flex items-end justify-end m-auto mt-4'>
                                <Button buttonName={buttonSeeAll} />
                            </div>
                        )}
                    </>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
}

export default SearchBar;

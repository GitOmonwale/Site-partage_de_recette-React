import React from 'react';
import Card from './card';
const superDeliciousData= [
    { id: 1, title: 'Spinach and Cheese Pasta', imageUrl: '/src/assets/food_1.png' },
    { id: 2, title: 'Chicken and Waffles', imageUrl: '/src/assets/food_2.png' },
    { id: 3, title: 'Grilled Salmon', imageUrl: '/src/assets/food_3.png' },
  ];
function Super_Delicious({superDeliciousData}) {
    return <>
        <section className="pt-10">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {
                    superDeliciousData.map(card => (
                        <Card key={card.id}
                            title={card.title}
                            imageUrl={card.imageUrl}
                        />
                    ))
                }
            </div>
        </section >
    </>
}

export default Super_Delicious
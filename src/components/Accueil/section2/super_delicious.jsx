import React from 'react';
import Card from './card';
const superDeliciousData= [
    { id: 1, title: 'Spinach and Cheese Pasta', imageUrl: '/src/assets/food_1.png' },
    { id: 2, title: 'Chicken and Waffles', imageUrl: '/src/assets/food_2.png' },
    { id: 3, title: 'Grilled Salmon', imageUrl: '/src/assets/food_3.png' },
  ];
function Super_Delicious() {
    return <>
        <section className="lg:px-28 pt-20 md:px-20 px-10">
            <h1 className="text-3xl pb-4">Super Delicious</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
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
import React from 'react';
import Card from './card';
const sweetToothData = [
    { id: 4, title: 'Spinach and Cheese Pasta', imageUrl: '/src/assets/food_4.png' },
    { id: 5, title: 'Chicken and Waffles', imageUrl: '/src/assets/food_5.png' },
    { id: 6, title: 'Grilled Salmon', imageUrl: '/src/assets/food_6.png' },
  ];
function Sweet_Tooth() {
    return <>
        <section>
            <h1 className="text-3xl pb-4">Sweet Tooth</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    sweetToothData.map(card => (
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

export default Sweet_Tooth
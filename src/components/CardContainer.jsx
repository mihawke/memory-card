import React, { useEffect, useState } from 'react';
import Card from './Card';
import styles from '../styles/CardContainer.module.css';

// Function to shuffle an array
const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};


const CarsData = [
    {
        id: 'audi_q5',
        src: 'src/assets/audi_q5.jpg',
        alt: 'audi_q5',
        title: 'Audi Q5'
    },
    {
        src: 'src/assets/bugatti_chiron.jpg',
        alt: 'bugatti_chiron',
        title: 'Bugatti Chiron',
        id: 'bugatti_chiron'
    },
    {
        src: 'src/assets/bmw_3_series.jpg',
        alt: 'bmw_3_series',
        title: 'BMW 3 Series',
        id: 'bmw_3_series'
    },
    {
        src: 'src/assets/chevrolet_silverado.jpg',
        alt: 'chevrolet_silverado',
        title: 'Chevrolet Silverado',
        id: 'chevrolet_silverado'
    },
    {
        src: 'src/assets/ferrari_sf90_stradale.jpg',
        alt: 'ferrari_sf90_stradale',
        title: 'Ferrari SF90 Stradale',
        id: 'ferrari_sf90_stradale'
    },
    {
        src: 'src/assets/ford_mustang_gt.jpg',
        alt: 'ford_mustang_gt',
        title: 'Ford Mustang GT',
        id: 'ford_mustang_gt'
    },
    {
        src: 'src/assets/honda_accord.jpg',
        alt: 'honda_accord',
        title: 'Honda Accord',
        id: 'honda_accord'
    },
    {
        src: 'src/assets/jeep_wrangler.jpg',
        alt: 'jeep_wrangler',
        title: 'Jeep Wrangler',
        id: 'jeep_wrangler'
    },
    {
        src: 'src/assets/lamborghini_aventador.jpg',
        alt: 'lamborghini_aventador',
        title: 'Lamborghini Aventador',
        id: 'lamborghini_aventador'
    },
    {
        src: 'src/assets/rolls_royce_phantom.jpg',
        alt: 'rolls_royce_phantom',
        title: 'Rolls Royce Phantom',
        id: 'rolls_royce_phantom'
    },
    {
        src: 'src/assets/tesla_model_3.jpg',
        alt: 'tesla_model_3',
        title: 'Tesla Model 3',
        id: 'tesla_model_3'
    },
    {
        src: 'src/assets/toyota_camry.jpg',
        alt: 'toyota_camry',
        title: 'Toyota Camry',
        id: 'toyota_camry'
    },
]

const CardContainer = () => {
    const [cards, setCards] = useState(CarsData); // Initialize state with CardsData
    const [highScore, setHighScore] = useState(0); // Initialize state with CardsData
    const [selected, setSelected] = useState([]); // Initialize state with CardsData
    const [score, setScore] = useState(0)

    const handleClick = (id) => {
        if (score == 0) {
            setScore((prev) => prev + 1)
            setSelected(prevSelected => [...prevSelected, id]);
            setCards(prevCards => shuffleArray(prevCards));
        }
        else {
            checkScore(id);
        }
    };
    const checkScore = (id) => {
        if (selected.includes(id)) {
            setHighScore(score);
            setScore(0);
            setSelected([]);
            setCards(CarsData);
        }
        else {
            setScore((prev) => prev + 1)
            setSelected(prevSelected => [...prevSelected, id]);
            setCards(prevCards => shuffleArray(prevCards));
        }
    }

    return (
        <>
            <header >
                <h1>Memory Card</h1>
                <div>
                    <p>Score:<span> {score}</span></p>
                    <p>High Score:<span>{highScore}</span></p>
                </div>
            </header>
            <div className={styles.cardContainer}>
                {cards.map(car => (
                    <Card
                        key={car.id}
                        id={car.id}
                        src={car.src}
                        alt={car.alt}
                        title={car.title}
                        onClick={handleClick}
                    />
                ))}
            </div>
        </>
    );
};

export default CardContainer;

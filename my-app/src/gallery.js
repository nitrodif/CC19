import React, { useState, useEffect } from 'react';
import Tour from './Tour';

const TourList = () => {
    const [tours, setTours] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTours = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://api.example.com/tours'); // Replace with your API URL
                const data = await response.json();
                setTours(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching tours:", error);
                setLoading(false);
            }
        };

        fetchTours();
    }, []);

    const removeTour = (id) => {
        setTours(tours.filter(tour => tour.id !== id));
    };

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <h1>Tour List</h1>
            {tours.map(tour => (
                <Tour key={tour.id} {...tour} removeTour={removeTour} />
            ))}
        </div>
    );
};

export default TourList;
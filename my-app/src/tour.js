import React, { useState } from 'react';

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="tour">
            <img src={image} alt={name} />
            <div className="tour-info">
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    Remove Tour
                </button>
            </div>
        </article>
    );
};

export default Tour;
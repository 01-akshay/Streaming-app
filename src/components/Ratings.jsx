import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ratings = ({ voteAverage, voteCount }) => {
    let voteAvg = voteAverage / 2; // Dividing voteAverage by 2
    const fullStars = Math.floor(voteAvg); // Full stars
    const hasHalfStar = voteAvg % 1 >= 0.5; // Check for half-star
    const stars = [...Array(5)]; // Total 5 stars

    return (
        <div className="py-3 flex items-center gap-3">
            <div className="flex items-center">
                {stars.map((item, index) => {
                    if (index < fullStars) {
                        // Full Star
                        return (
                            <FontAwesomeIcon
                                key={index}
                                className="text-yellow-500"
                                icon={solidStar}
                            />
                        );
                    } else if (index === fullStars && hasHalfStar) {
                        // Half Star
                        return (
                            <FontAwesomeIcon
                                key={index}
                                className="text-yellow-500"
                                icon={faStarHalfAlt}
                            />
                        );
                    } else {
                        // Empty Star
                        return (
                            <FontAwesomeIcon
                                key={index}
                                className="text-gray-300"
                                icon={regularStar}
                            />
                        );
                    }
                })}
            </div>
            <p>{voteCount}</p>
        </div>
    );
};

export default Ratings;
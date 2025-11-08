
import React from 'react';
import { Restaurant } from '../types';
import StarIcon from './icons/StarIcon';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick: () => void;
}

const PriceLevel: React.FC<{ level: number }> = ({ level }) => (
  <span className="text-orange-500">
    {'$$$$'.split('').map((char, i) => (
      <span key={i} className={i < level ? 'opacity-100' : 'opacity-30'}>{char}</span>
    ))}
  </span>
);

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onClick }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden flex cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
      onClick={onClick}
    >
      <img className="w-1/3 h-full object-cover" src={restaurant.photoUrl} alt={restaurant.name} />
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{restaurant.name}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{restaurant.rating.toFixed(1)}</span>
            <span className="mx-2">·</span>
            <span>{restaurant.reviewCount} reviews</span>
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <PriceLevel level={restaurant.priceLevel} />
            <span className="mx-2">·</span>
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <span className={`text-sm font-semibold ${restaurant.isOpenNow ? 'text-green-600' : 'text-red-600'}`}>
            {restaurant.isOpenNow ? 'Open Now' : 'Closed'}
          </span>
          <span className="text-sm font-semibold text-gray-800">{restaurant.distance.toFixed(1)} mi</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

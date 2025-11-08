
import React from 'react';
import { Dish } from '../types';

interface TrendingDishCardProps {
  dish: Dish & { restaurantName: string };
}

const TrendingDishCard: React.FC<TrendingDishCardProps> = ({ dish }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex-shrink-0 w-64 mr-4">
      <img className="h-32 w-full object-cover" src={dish.photoUrl} alt={dish.name} />
      <div className="p-4">
        <h4 className="text-md font-bold text-gray-800 truncate">{dish.name}</h4>
        <p className="text-sm text-gray-600 mt-1 truncate">at {dish.restaurantName}</p>
      </div>
    </div>
  );
};

export default TrendingDishCard;

import type { CardProps } from '../../types';

export const Card = ({ title, description, image, icon }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105 h-full flex flex-col">
      {image && (
        <div className="overflow-hidden h-48 bg-gray-200">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        {icon && <div className="text-4xl mb-4">{icon}</div>}
        <h3 className="text-xl font-bold text-dark-900 mb-3">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default Card;

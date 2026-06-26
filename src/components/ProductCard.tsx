import { Link } from 'react-router-dom';
import { Product } from '../types';
import { formatCurrency } from '../lib/utils';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  key?: string | number;
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const finalPrice = product.price - (product.price * (product.discount / 100));

  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden aspect-[4/3] p-2">
        <div className="w-full h-full rounded-[16px] overflow-hidden relative bg-gray-50">
          <img 
            src={product.thumbnail} 
            alt={product.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {product.discount > 0 && (
            <div className="absolute top-3 left-3 bg-red-500/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
              -{product.discount}%
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-dark/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-medium border border-white/20">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="p-5 pt-4 flex flex-col flex-grow">
        <Link to={`/product/${product.slug}`} className="block mb-2 flex-grow">
          <h3 className="font-semibold text-lg text-dark line-clamp-2 group-hover:text-primary transition-colors leading-snug">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-4">{product.sales} Terjual</p>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <div>
            {product.discount > 0 ? (
              <div className="flex flex-col">
                <span className="font-bold text-[1.1rem] text-dark leading-none">{formatCurrency(finalPrice)}</span>
                <span className="text-gray-400 text-xs line-through mt-1">{formatCurrency(product.price)}</span>
              </div>
            ) : (
              <span className="font-bold text-[1.1rem] text-dark">{formatCurrency(product.price)}</span>
            )}
          </div>
          
          <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white transition-all transform active:scale-95 border border-gray-100 hover:border-primary hover:shadow-md">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

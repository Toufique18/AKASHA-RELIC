import React from 'react';

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  variant?: 'featured' | 'standard';
}

export default function BlogCard({ title, description, image, variant = 'standard' }: BlogCardProps) {
  const isFeatured = variant === 'featured';
  
  return (
    <div className={`group bg-[#1a113d]/50 backdrop-blur-md border border-white/10 rounded-[2rem] overflow-hidden p-4 sm:p-6 h-full flex flex-col transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_8px_32px_rgba(147,51,234,0.1)]`}>
      <div className={`relative ${isFeatured ? 'aspect-[4/5]' : 'aspect-video'} rounded-3xl overflow-hidden mb-6 bg-gradient-to-br from-purple-500/20 to-pink-500/20`}>
        {/* Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
          style={{ backgroundImage: `url('${image}')` }} 
        />
        {/* Overlay for better text contrast if needed, or just for aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11072B]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <h3 className={`${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'} font-bold text-white mb-4 leading-tight group-hover:text-purple-400 transition-colors`}>
        {title}
      </h3>
      
      <p className={`text-gray-400 ${isFeatured ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'} leading-relaxed flex-grow line-clamp-4`}>
        {description}
      </p>
    </div>
  );
}

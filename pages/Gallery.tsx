import React, { useState } from 'react';
import { Image, ZoomIn, Camera } from 'lucide-react';
import { GalleryItem } from '../types';

interface GalleryProps {
  galleryData: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryData }) => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(galleryData.map(item => item.category)))];

  const filteredImages = filter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  return (
    <div className="max-w-[1200px] mx-auto py-12">
      <div className="text-center mb-16 relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-white"></div>
         <div className="inline-block bg-black px-8 relative z-10">
            <h2 className="text-5xl font-black text-white uppercase italic flex items-center justify-center gap-4">
               <Camera className="text-rez-purple" size={48} strokeWidth={2.5} />
               Campus_Life
            </h2>
         </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-8 py-3 font-bold uppercase border-2 border-white transition-all shadow-[4px_4px_0px_white] hover:-translate-y-1 ${
              filter === category
                ? 'bg-rez-pink text-white'
                : 'bg-black text-white hover:bg-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
        {filteredImages.map((item) => (
          <div key={item.id} className="break-inside-avoid bg-white p-2 border-2 border-white shadow-neo-white hover:shadow-neo-pink transition-shadow duration-300 group rotate-1 hover:rotate-0">
            <div className="relative overflow-hidden border-2 border-black bg-black">
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-rez-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                <ZoomIn className="text-white w-12 h-12 drop-shadow-md" />
              </div>
            </div>
            <div className="pt-3 pb-1 px-2">
              <div className="flex justify-between items-center">
                 <h3 className="font-bold text-black uppercase text-lg leading-none">{item.caption}</h3>
                 <span className="text-[10px] font-black bg-black text-white px-2 py-1 uppercase">{item.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
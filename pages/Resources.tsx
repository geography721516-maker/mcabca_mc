import React from 'react';
import { FileText, Download, Folder, BookOpen } from 'lucide-react';
import { Resource } from '../types';

interface ResourcesProps {
  resourceData: Resource[];
}

const Resources: React.FC<ResourcesProps> = ({ resourceData }) => {
  return (
    <div className="max-w-[1200px] mx-auto py-12">
      <div className="mb-12 border-l-8 border-rez-purple pl-6">
        <h2 className="text-5xl font-black text-white uppercase italic mb-2">Student<br/>Resources</h2>
        <p className="text-gray-400 font-mono text-lg">// DOWNLOAD COURSE MATERIAL</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourceData.map((resource, i) => (
          <div key={resource.id} className={`bg-black p-8 border-2 border-white shadow-neo hover:shadow-neo-hover transition-all group relative ${i % 2 === 0 ? 'sticker-3' : 'rotate-0'}`}>
            <div className="absolute -top-4 -right-4 bg-white text-black font-black text-xs px-2 py-1 border-2 border-black uppercase z-10">
               {resource.type}
            </div>
            
            <div className="mb-6">
               {resource.type === 'Notes' ? <BookOpen size={40} className="text-rez-purple" /> : 
                resource.type === 'PYQ' ? <Folder size={40} className="text-rez-pink" /> : 
                <FileText size={40} className="text-white" />}
            </div>
            
            <h3 className="font-black text-white text-2xl uppercase mb-2 leading-none">{resource.title}</h3>
            <p className="text-xs text-gray-500 font-mono mb-8 uppercase tracking-widest">Added by Admin</p>
            
            <button 
              className="w-full py-3 border-2 border-white font-bold text-white hover:bg-white hover:text-black flex items-center justify-center gap-2 transition-colors uppercase"
              onClick={() => alert('Download simulated')}
            >
              <Download size={18} strokeWidth={3} /> Download File
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
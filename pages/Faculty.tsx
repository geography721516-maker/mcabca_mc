import React, { useState } from 'react';
import { Search, Mail, Award } from 'lucide-react';
import { Faculty as FacultyType } from '../types';

interface FacultyProps {
  facultyData: FacultyType[];
}

const Faculty: React.FC<FacultyProps> = ({ facultyData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyData.filter(f => 
    f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.specialization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1200px] mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b-4 border-white pb-8">
         <div>
            <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
               Faculty<span className="text-rez-pink">.Index</span>
            </h1>
         </div>
         
         <div className="w-full md:w-auto relative">
            <div className="absolute top-0 left-0 w-full h-full bg-rez-purple border-2 border-white translate-x-2 translate-y-2"></div>
            <input 
               type="text" 
               placeholder="SEARCH PROFESSORS..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="relative w-full md:w-80 bg-black border-2 border-white p-4 text-white placeholder-gray-500 font-mono focus:outline-none focus:translate-x-1 focus:translate-y-1 transition-all uppercase font-bold"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-rez-purple" />
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
         {filteredFaculty.map((faculty, idx) => (
            <div key={faculty.id} className={`neo-card p-6 flex flex-col group ${idx % 2 === 0 ? 'sticker-1' : 'sticker-2'} hover:rotate-0`}>
               <div className="border-2 border-white mb-6 overflow-hidden bg-gray-900 aspect-square relative shadow-[4px_4px_0px_white]">
                  <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 bg-rez-purple text-white font-black px-4 py-2 text-xs uppercase border-t-2 border-r-2 border-white">
                     {faculty.designation}
                  </div>
               </div>
               
               <h3 className="text-2xl font-black text-white uppercase leading-none mb-2 break-words">{faculty.name}</h3>
               
               <div className="mt-auto space-y-4 pt-4 border-t-2 border-dashed border-gray-700">
                  <div className="flex items-start gap-2">
                     <Award size={16} className="text-rez-pink mt-1 shrink-0"/>
                     <div>
                        <p className="text-xs text-rez-purple font-mono uppercase font-bold">Qualification</p>
                        <p className="font-bold text-sm">{faculty.qualification}</p>
                     </div>
                  </div>
                  <div>
                     <p className="text-xs text-rez-purple font-mono uppercase font-bold">Specialization</p>
                     <p className="font-bold text-sm">{faculty.specialization}</p>
                  </div>
                  <a href={`mailto:${faculty.email}`} className="block w-full bg-white text-black text-center font-black py-3 border-2 border-black hover:bg-rez-pink hover:text-white hover:border-white transition-colors uppercase text-sm shadow-[2px_2px_0px_black] hover:shadow-none">
                     Contact Faculty
                  </a>
               </div>
            </div>
         ))}
      </div>
    </div>
  );
};

export default Faculty;
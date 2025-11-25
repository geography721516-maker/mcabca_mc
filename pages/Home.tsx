import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Cpu, Database, Award, Code, MousePointer } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      
      {/* --- Hero Section (Collage Style) --- */}
      <div className="relative min-h-[70vh] flex flex-col items-center justify-center mb-32">
        
        {/* Floating Stickers */}
        <div className="hidden md:flex absolute top-10 left-10 bg-rez-pink text-black font-black px-6 py-3 border-2 border-white sticker-2 shadow-[6px_6px_0px_white] z-20">
           ADMISSIONS OPEN 2025
        </div>
        
        <div className="hidden md:flex absolute bottom-20 right-10 bg-white text-black font-mono px-4 py-4 border-2 border-rez-purple sticker-1 shadow-[6px_6px_0px_#a855f7] z-20 items-center gap-2">
           <Terminal size={18} /> SYSTEM_READY
        </div>

        {/* Floating Code Icon */}
        <div className="absolute top-20 right-20 w-16 h-16 bg-rez-purple border-2 border-white flex items-center justify-center text-white sticker-3 shadow-neo-white hidden lg:flex">
          <Code size={32} />
        </div>

        {/* Main Title */}
        <div className="relative z-10 text-center">
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic">
              <span className="block text-white drop-shadow-[4px_4px_0px_#a855f7] transform -translate-x-4">Speak</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-rez-purple to-rez-pink drop-shadow-none transform translate-x-4">Loud</span>
              <div className="inline-block relative mt-4">
                 <span className="block text-white text-3xl md:text-5xl font-mono not-italic bg-black px-6 py-2 border-2 border-white sticker-2">
                    {'<'} IN_CODE {'/>'}
                 </span>
                 <MousePointer className="absolute -bottom-6 -right-6 text-rez-pink fill-rez-pink w-10 h-10 transform -rotate-12" />
              </div>
           </h1>
        </div>
        
        <p className="mt-12 text-lg md:text-xl text-gray-300 max-w-2xl text-center font-bold border-l-4 border-rez-purple pl-4">
           Medinipur College BCA Department. Where <span className="text-rez-pink bg-white/10 px-1">Innovation</span> meets <span className="text-rez-purple bg-white/10 px-1">Execution</span>.
        </p>

        <div className="mt-12 flex gap-6">
           <Link to="/contact" className="neo-btn px-8 py-4 text-lg flex items-center gap-2">
              Start Journey <ArrowRight size={20} />
           </Link>
           <Link to="/placements" className="px-8 py-4 border-2 border-white text-white font-bold uppercase hover:bg-white hover:text-black transition-colors shadow-[4px_4px_0px_white] hover:shadow-[2px_2px_0px_white] hover:translate-x-[2px] hover:translate-y-[2px]">
              View Stats
           </Link>
        </div>
      </div>

      {/* --- Bento Grid / Stats Section --- */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32">
         
         {/* Stat 1: Placement */}
         <div className="md:col-span-7 neo-card p-10 flex flex-col justify-between relative overflow-hidden group bg-rez-purple text-white border-white">
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 group-hover:text-black transition-all rotate-12">
               <Award size={120} />
            </div>
            <div>
               <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase border border-white shadow-[2px_2px_0px_white]">High Impact</span>
               <h2 className="text-8xl font-black text-white mt-4 drop-shadow-[4px_4px_0px_black]">92%</h2>
               <p className="text-xl font-bold text-black bg-white inline-block px-2 mt-2">Placement Rate</p>
            </div>
            <div className="mt-8">
               <div className="h-6 w-full bg-black border-2 border-white overflow-hidden">
                  <div className="h-full bg-white w-[92%] relative">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-20"></div>
                  </div>
               </div>
            </div>
         </div>

         {/* Stat 2: Labs */}
         <div className="md:col-span-5 neo-card p-10 bg-white text-black border-rez-pink shadow-neo-pink">
            <Cpu size={50} className="mb-6 text-rez-pink stroke-[3]" />
            <h3 className="text-4xl font-black uppercase italic mb-2">Future<br/>Ready Labs</h3>
            <p className="font-mono text-sm leading-relaxed font-bold">
               Equipped with i7 Workstations, IoT Kits, and Cloud Infrastructure access.
            </p>
         </div>

         {/* Stat 3: Faculty */}
         <div className="md:col-span-4 neo-card p-8 flex flex-col items-center justify-center bg-rez-pink border-white text-black shadow-neo-white">
             <div className="text-center">
                <h3 className="text-6xl font-black">15+</h3>
                <p className="font-bold uppercase tracking-widest border-t-2 border-black pt-2 mt-2">Expert Faculty</p>
             </div>
         </div>

         {/* Stat 4: Resources */}
         <div className="md:col-span-8 neo-card p-10 flex flex-col md:flex-row items-center justify-between gap-8 bg-black border-white shadow-neo">
             <div>
                <h3 className="text-3xl font-black uppercase text-white mb-2">Student <span className="text-rez-pink decoration-wavy underline">Resources</span></h3>
                <p className="text-gray-400 max-w-sm font-mono text-sm">
                   // ACCESS: Unlimited digital library, PYQs, and recorded lectures.
                </p>
             </div>
             <Link to="/resources" className="bg-white text-black border-2 border-rez-purple w-20 h-20 flex items-center justify-center rounded-full hover:bg-rez-purple hover:text-white hover:scale-110 transition-all shadow-[4px_4px_0px_#a855f7]">
                <ArrowRight size={36} />
             </Link>
         </div>
      </div>

      {/* --- Marquee / Ticker --- */}
      <div className="border-y-4 border-white bg-rez-purple py-6 mb-24 overflow-hidden -mx-4 md:-mx-0 sticker-1 shadow-neo-white">
         <div className="flex justify-between items-center text-black font-black text-3xl uppercase tracking-widest whitespace-nowrap animate-pulse">
            <span>TCS</span> <span className="text-white mx-8 text-4xl">*</span>
            <span>Wipro</span> <span className="text-white mx-8 text-4xl">*</span>
            <span>Cognizant</span> <span className="text-white mx-8 text-4xl">*</span>
            <span>Infosys</span> <span className="text-white mx-8 text-4xl">*</span>
            <span>Deloitte</span> <span className="text-white mx-8 text-4xl">*</span>
            <span>Capgemini</span>
         </div>
      </div>

    </div>
  );
};

export default Home;
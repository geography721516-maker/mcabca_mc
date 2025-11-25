import React, { useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, Trophy, Briefcase, TrendingUp } from 'lucide-react';
import { Placement } from '../types';

interface PlacementsProps {
  placementData: Placement[];
}

const Placements: React.FC<PlacementsProps> = ({ placementData }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = useMemo(() => {
    if (placementData.length === 0) return { avgPackage: "0", maxPackage: 0, yearData: [] };
    
    const avgPackage = (placementData.reduce((acc, curr) => acc + curr.packageLPA, 0) / placementData.length).toFixed(2);
    const maxPackage = Math.max(...placementData.map(p => p.packageLPA));
    const yearData = [
      { name: '2022', count: 42 },
      { name: '2023', count: placementData.filter(p => p.year === 2023).length + 45 },
      { name: '2024', count: placementData.filter(p => p.year === 2024).length + 30 },
    ];
    return { avgPackage, maxPackage, yearData };
  }, [placementData]);

  const filteredPlacements = placementData.filter(p => 
    p.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-[1400px] mx-auto py-8">
      
      {/* Header */}
      <div className="bg-rez-purple text-white p-8 md:p-12 border-4 border-white shadow-neo-white mb-12 relative overflow-hidden sticker-1">
         <h1 className="text-5xl md:text-8xl font-black uppercase italic relative z-10 drop-shadow-[4px_4px_0px_black]">
            Career<br/>Success
         </h1>
         <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none text-black">
            <Trophy size={300} strokeWidth={1} />
         </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
         {[
            { label: "Highest Package", val: `${stats.maxPackage} LPA`, icon: Trophy, bg: 'bg-black', text: 'text-white', border: 'border-white', shadow: 'shadow-neo' },
            { label: "Avg Package", val: `${stats.avgPackage} LPA`, icon: TrendingUp, bg: 'bg-white', text: 'text-black', border: 'border-rez-purple', shadow: 'shadow-neo-pink' },
            { label: "Total Placed", val: "180+", icon: Briefcase, bg: 'bg-black', text: 'text-white', border: 'border-white', shadow: 'shadow-neo-white' },
         ].map((stat, i) => (
            <div key={i} className={`p-8 border-2 ${stat.border} ${stat.bg} ${stat.text} ${stat.shadow} relative group hover:-translate-y-1 transition-transform`}>
               <div className="flex justify-between items-start mb-4">
                  <p className="font-mono text-xs uppercase font-bold border px-2 py-1">{stat.label}</p>
                  <stat.icon size={32} strokeWidth={2.5} />
               </div>
               <h3 className="text-5xl font-black">{stat.val}</h3>
            </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
         {/* Chart */}
         <div className="lg:col-span-1 neo-card p-6 bg-black border-white">
            <h3 className="text-xl font-black text-white mb-6 uppercase border-b-2 border-white pb-2">Yearly Growth</h3>
            <div className="h-64">
               <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={stats.yearData}>
                     <XAxis dataKey="name" stroke="#fff" fontSize={14} tickLine={false} axisLine={false} fontWeight="bold" />
                     <Tooltip 
                        contentStyle={{ backgroundColor: '#a855f7', border: '2px solid #fff', fontWeight: 'bold', color: '#fff' }}
                        cursor={{fill: 'rgba(255, 255, 255, 0.1)'}}
                     />
                     <Bar dataKey="count" fill="#fff" radius={[0,0,0,0]} />
                  </BarChart>
               </ResponsiveContainer>
            </div>
         </div>

         {/* Table */}
         <div className="lg:col-span-2 border-2 border-white bg-black shadow-neo-white">
            <div className="p-4 border-b-2 border-white flex justify-between items-center bg-gray-900">
               <h3 className="font-bold text-white uppercase text-xl">Recents</h3>
               <div className="flex items-center gap-2 bg-black border-2 border-white px-3 py-1 shadow-[2px_2px_0px_white]">
                  <Search size={16} className="text-white"/>
                  <input 
                     className="bg-transparent text-sm text-white focus:outline-none w-32 font-bold uppercase" 
                     placeholder="FILTER..." 
                     value={searchTerm}
                     onChange={e => setSearchTerm(e.target.value)}
                  />
               </div>
            </div>
            <div className="overflow-x-auto">
               <table className="w-full text-left text-sm font-mono">
                  <thead className="bg-rez-purple text-white uppercase border-b-2 border-white">
                     <tr>
                        <th className="p-4 border-r-2 border-white">Student</th>
                        <th className="p-4 border-r-2 border-white">Company</th>
                        <th className="p-4 border-r-2 border-white">Role</th>
                        <th className="p-4 text-right">Package</th>
                     </tr>
                  </thead>
                  <tbody>
                     {filteredPlacements.map((p, i) => (
                        <tr key={p.id} className="hover:bg-white hover:text-black transition-colors border-b border-gray-800 font-bold">
                           <td className="p-4 border-r border-gray-800">{p.studentName}</td>
                           <td className="p-4 border-r border-gray-800 uppercase">{p.company}</td>
                           <td className="p-4 border-r border-gray-800">{p.role}</td>
                           <td className="p-4 text-right">{p.packageLPA} LPA</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Placements;
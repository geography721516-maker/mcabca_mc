import React, { useState } from 'react';
import { FileText, Download, Pin, Megaphone } from 'lucide-react';
import { Notice } from '../types';

interface NoticesProps {
  noticeData: Notice[];
}

const Notices: React.FC<NoticesProps> = ({ noticeData }) => {
  const [filter, setFilter] = useState<'All' | 'General' | 'Exam' | 'Placement'>('All');

  const filteredNotices = noticeData.filter(n => filter === 'All' || n.category === filter);

  return (
    <div className="max-w-[1200px] mx-auto py-12">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic flex items-center justify-center gap-4">
           <Megaphone className="text-rez-pink w-12 h-12 md:w-16 md:h-16 -rotate-12" strokeWidth={2.5} />
           Notice<span className="text-transparent bg-clip-text bg-gradient-to-r from-rez-purple to-rez-pink">Board</span>
        </h2>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 flex-wrap">
          {['All', 'General', 'Exam', 'Placement'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 border-2 border-white font-bold uppercase transition-all shadow-[4px_4px_0px_white] hover:-translate-y-1 ${
                filter === cat 
                  ? 'bg-rez-purple text-white' 
                  : 'bg-black text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredNotices.map((notice) => (
          <div key={notice.id} className={`p-6 border-2 border-white bg-black shadow-neo-white flex flex-col md:flex-row gap-6 justify-between items-start md:items-center hover:bg-gray-900 transition-colors group ${notice.isPinned ? 'border-l-8 border-l-rez-pink' : ''}`}>
            <div className="flex gap-6 items-center">
              <div className="bg-white text-black p-4 border-2 border-black hidden sm:block shadow-[4px_4px_0px_#a855f7]">
                <FileText size={28} strokeWidth={2} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  {notice.isPinned && <Pin size={16} className="text-rez-pink fill-current rotate-45" />}
                  <span className={`text-xs font-black uppercase px-2 py-0.5 border ${
                    notice.category === 'Exam' ? 'bg-red-600 text-white border-red-600' :
                    notice.category === 'Placement' ? 'bg-green-600 text-white border-green-600' :
                    'bg-blue-600 text-white border-blue-600'
                  }`}>
                    {notice.category}
                  </span>
                  <span className="text-xs font-mono text-gray-400 font-bold tracking-widest">{new Date(notice.date).toLocaleDateString()}</span>
                </div>
                <h3 className="text-2xl font-black text-white uppercase italic leading-tight group-hover:text-rez-purple transition-colors">{notice.title}</h3>
              </div>
            </div>
            
            <a 
              href={notice.link}
              className="flex items-center gap-2 text-sm font-black bg-white text-black px-6 py-3 border-2 border-white hover:bg-rez-pink hover:text-white hover:border-white transition-all shadow-[4px_4px_0px_black] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
              onClick={(e) => { e.preventDefault(); alert("PDF Download Simulation"); }}
            >
              <Download size={18} strokeWidth={3} />
              DOWNLOAD_PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
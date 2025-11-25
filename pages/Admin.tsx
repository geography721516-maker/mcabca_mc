import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, FileText, LogOut, Plus, Search, Edit, Trash2, Briefcase, Home, Layout, Lock, ShieldAlert, Image, MonitorPlay, BookOpen, Upload, X, AlertTriangle } from 'lucide-react';

interface AdminProps {
  facultyData: any[]; setFacultyData: (d: any) => void;
  placementData: any[]; setPlacementData: (d: any) => void;
  noticeData: any[]; setNoticeData: (d: any) => void;
  resourceData: any[]; setResourceData: (d: any) => void;
  galleryData: any[]; setGalleryData: (d: any) => void;
  heroSlides: any[]; setHeroSlides: (d: any) => void;
}

const Admin: React.FC<AdminProps> = ({
  facultyData, setFacultyData,
  placementData, setPlacementData,
  noticeData, setNoticeData,
  resourceData, setResourceData,
  galleryData, setGalleryData,
  heroSlides, setHeroSlides
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<any>({}); 
  
  // Delete Modal State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);

  const confirmDelete = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setItemToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const executeDelete = () => {
    if (!itemToDelete) return;

    const idToDelete = String(itemToDelete);
    const filterFn = (i: any) => String(i.id) !== idToDelete;

    if(activeTab === 'Faculty') setFacultyData(facultyData.filter(filterFn));
    if(activeTab === 'Placements') setPlacementData(placementData.filter(filterFn));
    if(activeTab === 'Notices') setNoticeData(noticeData.filter(filterFn));
    if(activeTab === 'Resources') setResourceData(resourceData.filter(filterFn));
    if(activeTab === 'Gallery') setGalleryData(galleryData.filter(filterFn));
    if(activeTab === 'Hero') setHeroSlides(heroSlides.filter(filterFn));

    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItem: any = { ...editItem, id: editItem.id ? editItem.id : Date.now().toString() };

    if (activeTab === 'Placements') {
      newItem.packageLPA = parseFloat(newItem.packageLPA);
      newItem.year = parseInt(newItem.year);
    }

    const update = (current: any[], set: any) => {
      if (editItem.id) {
        set(current.map(i => String(i.id) === String(editItem.id) ? newItem : i));
      } else {
        set([...current, newItem]);
      }
    };

    if(activeTab === 'Faculty') update(facultyData, setFacultyData);
    if(activeTab === 'Placements') update(placementData, setPlacementData);
    if(activeTab === 'Notices') update(noticeData, setNoticeData);
    if(activeTab === 'Resources') update(resourceData, setResourceData);
    if(activeTab === 'Gallery') update(galleryData, setGalleryData);
    if(activeTab === 'Hero') update(heroSlides, setHeroSlides);

    setIsModalOpen(false);
    setEditItem({});
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const updates = { ...editItem };
      
      if (activeTab === 'Faculty') updates.image = url;
      else if (activeTab === 'Notices') updates.link = url; 
      else updates.imageUrl = url; 
      
      setEditItem(updates);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setEditItem({ ...editItem, [e.target.name]: e.target.value });
  };

  const getData = () => {
    switch(activeTab) {
      case 'Hero': return heroSlides;
      case 'Faculty': return facultyData;
      case 'Placements': return placementData;
      case 'Notices': return noticeData;
      case 'Resources': return resourceData;
      case 'Gallery': return galleryData;
      default: return [];
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4 font-sans text-white">
        <div className="neo-card p-10 max-w-md w-full bg-black border-2 border-white shadow-neo-white">
          <div className="flex justify-center mb-8">
             <div className="bg-rez-pink p-4 border-2 border-white sticker-1">
                <Lock size={32} className="text-white" />
             </div>
          </div>
          <h2 className="text-4xl font-black text-white text-center mb-2 uppercase italic">Admin<br/>Console</h2>
          <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
             <input type="password" placeholder="ENTER PASSKEY" className="w-full bg-black border-2 border-white p-3 text-white focus:shadow-neo transition-shadow outline-none font-mono text-center tracking-widest" />
             <button className="w-full neo-btn py-4 mt-6 text-xl tracking-widest border-white text-white bg-black hover:bg-white hover:text-black">
                UNLOCK_SYSTEM
             </button>
          </form>
          <div className="mt-6 text-center">
             <Link to="/" className="text-xs font-mono text-gray-500 hover:text-white border-b border-dashed border-gray-500 hover:border-white">Back to Website</Link>
          </div>
        </div>
      </div>
    );
  }

  const renderFormFields = () => {
    switch(activeTab) {
      case 'Hero':
        return (
          <>
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Slide Title</label>
             <input name="title" value={editItem.title || ''} onChange={handleInputChange} placeholder="Title" className="w-full p-3 bg-black border border-white mb-4 text-white focus:border-rez-pink outline-none" required />
             
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Subtitle</label>
             <input name="subtitle" value={editItem.subtitle || ''} onChange={handleInputChange} placeholder="Subtitle" className="w-full p-3 bg-black border border-white mb-4 text-white focus:border-rez-pink outline-none" />
             
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Background Image</label>
             <div className="flex gap-2 mb-2">
                <input name="imageUrl" value={editItem.imageUrl || ''} onChange={handleInputChange} placeholder="Paste URL or Upload ->" className="w-full p-3 bg-black border border-white text-white focus:border-rez-pink outline-none" required />
                <label className="cursor-pointer bg-white text-black border-2 border-white p-3 hover:bg-rez-pink hover:text-white transition-colors flex items-center justify-center">
                    <Upload size={20} />
                    <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
                </label>
             </div>
             {editItem.imageUrl && <img src={editItem.imageUrl} alt="Preview" className="h-32 w-full object-cover border-2 border-white mb-2" />}
          </>
        );
      case 'Gallery':
        return (
          <>
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Caption</label>
             <input name="caption" value={editItem.caption || ''} onChange={handleInputChange} placeholder="Caption" className="w-full p-3 bg-black border border-white mb-4 text-white focus:border-rez-pink outline-none" required />
             
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Image</label>
             <div className="flex gap-2 mb-2">
                <input name="imageUrl" value={editItem.imageUrl || ''} onChange={handleInputChange} placeholder="Image URL" className="w-full p-3 bg-black border border-white text-white focus:border-rez-pink outline-none" required />
                <label className="cursor-pointer bg-white text-black border-2 border-white p-3 hover:bg-rez-pink hover:text-white transition-colors flex items-center justify-center">
                    <Upload size={20} />
                    <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
                </label>
             </div>
             {editItem.imageUrl && <img src={editItem.imageUrl} alt="Preview" className="h-32 w-full object-cover border-2 border-white mb-2" />}
             
             <label className="text-xs font-mono text-gray-400 mb-1 block uppercase">Category</label>
             <select name="category" value={editItem.category || 'Event'} onChange={handleInputChange} className="w-full p-3 bg-black border border-white mb-2 text-white uppercase font-bold focus:border-rez-pink outline-none">
                <option value="Event">Event</option>
                <option value="Campus">Campus</option>
                <option value="Seminar">Seminar</option>
             </select>
          </>
        );
      case 'Faculty':
        return (
          <>
             <input name="name" value={editItem.name || ''} onChange={handleInputChange} placeholder="Name" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="designation" value={editItem.designation || ''} onChange={handleInputChange} placeholder="Designation" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="qualification" value={editItem.qualification || ''} onChange={handleInputChange} placeholder="Qualification" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="specialization" value={editItem.specialization || ''} onChange={handleInputChange} placeholder="Specialization" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="email" value={editItem.email || ''} onChange={handleInputChange} placeholder="Email" className="w-full p-3 bg-black border border-white mb-2 text-white" />
             
             <div className="flex gap-2 mb-2">
                <input name="image" value={editItem.image || ''} onChange={handleInputChange} placeholder="Photo URL" className="w-full p-3 bg-black border border-white text-white" />
                <label className="cursor-pointer bg-white text-black border-2 border-white p-3 hover:bg-rez-pink hover:text-white transition-colors flex items-center justify-center">
                    <Upload size={20} />
                    <input type="file" hidden accept="image/*" onChange={handleFileUpload} />
                </label>
             </div>
             {editItem.image && <img src={editItem.image} alt="Preview" className="h-20 w-20 object-cover border-2 border-white mb-2 rounded-full" />}
          </>
        );
      case 'Placements':
        return (
          <>
             <input name="studentName" value={editItem.studentName || ''} onChange={handleInputChange} placeholder="Student Name" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="company" value={editItem.company || ''} onChange={handleInputChange} placeholder="Company" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="role" value={editItem.role || ''} onChange={handleInputChange} placeholder="Role" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="packageLPA" type="number" step="0.1" value={editItem.packageLPA || ''} onChange={handleInputChange} placeholder="Package LPA" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="year" type="number" value={editItem.year || ''} onChange={handleInputChange} placeholder="Year" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
          </>
        );
      case 'Notices':
        return (
          <>
             <input name="title" value={editItem.title || ''} onChange={handleInputChange} placeholder="Title" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <input name="date" type="date" value={editItem.date || ''} onChange={handleInputChange} className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             
             <div className="flex gap-2 mb-2">
                <input name="link" value={editItem.link || ''} onChange={handleInputChange} placeholder="PDF Link or Upload ->" className="w-full p-3 bg-black border border-white text-white" />
                <label className="cursor-pointer bg-white text-black border-2 border-white p-3 hover:bg-rez-pink hover:text-white transition-colors flex items-center justify-center">
                    <Upload size={20} />
                    <input type="file" hidden accept="application/pdf" onChange={handleFileUpload} />
                </label>
             </div>
             
             <select name="category" value={editItem.category || 'General'} onChange={handleInputChange} className="w-full p-3 bg-black border border-white mb-2 text-white uppercase font-bold">
                <option value="General">General</option>
                <option value="Exam">Exam</option>
                <option value="Placement">Placement</option>
             </select>
          </>
        );
      case 'Resources':
        return (
          <>
             <input name="title" value={editItem.title || ''} onChange={handleInputChange} placeholder="Title" className="w-full p-3 bg-black border border-white mb-2 text-white" required />
             <select name="type" value={editItem.type || 'Notes'} onChange={handleInputChange} className="w-full p-3 bg-black border border-white mb-2 text-white uppercase font-bold">
                <option value="Notes">Notes</option>
                <option value="PYQ">PYQ</option>
                <option value="Syllabus">Syllabus</option>
             </select>
          </>
        );
      default: return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 max-w-[1600px] mx-auto min-h-screen bg-black text-white font-sans p-4">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 flex flex-col gap-4">
         <div className="neo-card p-6 bg-rez-purple text-white border-white sticker-2 shadow-[4px_4px_0px_white]">
            <h1 className="font-black text-2xl uppercase italic">Admin<br/>Mode</h1>
         </div>
         <nav className="flex flex-col gap-2 mt-4">
            {['Dashboard', 'Hero', 'Faculty', 'Placements', 'Gallery', 'Notices', 'Resources'].map(tab => (
               <button key={tab} onClick={() => setActiveTab(tab)} className={`text-left px-4 py-3 font-bold uppercase border-2 transition-all flex items-center gap-2 ${activeTab === tab ? 'bg-white text-black border-white shadow-[4px_4px_0px_#d946ef] translate-x-1' : 'bg-black text-gray-400 border-gray-800 hover:border-white hover:text-white'}`}>
                  {tab === 'Dashboard' && <Layout size={16}/>}
                  {tab === 'Hero' && <MonitorPlay size={16}/>}
                  {tab === 'Gallery' && <Image size={16}/>}
                  {tab === 'Placements' && <Briefcase size={16}/>}
                  {tab === 'Notices' && <FileText size={16}/>}
                  {tab === 'Resources' && <BookOpen size={16}/>}
                  {tab === 'Faculty' && <Users size={16}/>}
                  {tab}
               </button>
            ))}
         </nav>
         <div className="mt-auto flex flex-col gap-2">
            <Link to="/" className="w-full text-center px-4 py-3 font-bold uppercase border-2 border-white text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"><Home size={16}/> Exit to Site</Link>
            <button onClick={() => setIsLoggedIn(false)} className="w-full px-4 py-3 font-bold uppercase border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all">Logout</button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-900/50 p-6 border-2 border-gray-800 relative">
         <header className="flex justify-between items-center mb-8 border-b-4 border-white pb-4">
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">{activeTab}</h2>
            {activeTab !== 'Dashboard' && (
               <button onClick={() => { setEditItem({}); setIsModalOpen(true); }} className="bg-rez-pink text-white px-6 py-3 border-2 border-white font-bold uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-2 shadow-[4px_4px_0px_white] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                  <Plus size={20} strokeWidth={3} /> Add New
               </button>
            )}
         </header>

         {activeTab === 'Dashboard' && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
               {[
                  { label: "Faculty", val: facultyData.length, bg: 'bg-rez-purple' },
                  { label: "Placements", val: placementData.length, bg: 'bg-white text-black' },
                  { label: "Gallery", val: galleryData.length, bg: 'bg-rez-pink text-black' },
                  { label: "Notices", val: noticeData.length, bg: 'bg-black text-white' },
               ].map((stat, i) => (
                  <div key={i} className={`p-6 border-2 border-white shadow-neo ${stat.bg} relative overflow-hidden group`}>
                     <p className="font-mono text-xs uppercase font-bold border-b-2 border-current pb-1 mb-2">Total {stat.label}</p>
                     <h3 className="text-6xl font-black">{stat.val}</h3>
                  </div>
               ))}
            </div>
         )}

         {/* Hero List View */}
         {activeTab === 'Hero' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
               {heroSlides.map((slide) => (
                  <div key={slide.id} className="border-2 border-white bg-black p-4 flex flex-col">
                     <div className="relative aspect-video mb-4 border border-gray-800 bg-gray-900">
                        <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                     </div>
                     <h3 className="font-bold text-lg uppercase leading-tight mb-1">{slide.title}</h3>
                     <p className="text-xs text-rez-pink font-mono mb-4">{slide.subtitle}</p>
                     <div className="mt-auto flex gap-2">
                        <button onClick={() => { setEditItem(slide); setIsModalOpen(true); }} className="flex-1 p-2 border border-white hover:bg-white hover:text-black flex justify-center items-center gap-2 font-bold text-sm uppercase transition-colors">
                           <Edit size={16} /> Edit
                        </button>
                        <button onClick={(e) => confirmDelete(slide.id, e)} className="flex-1 p-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white flex justify-center items-center gap-2 font-bold text-sm uppercase transition-colors">
                           <Trash2 size={16} /> Delete
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         ) : activeTab !== 'Dashboard' ? (
            // Generic List View
            <div className="grid grid-cols-1 gap-4">
               {getData().length === 0 ? <div className="text-center p-12 border-2 border-dashed border-gray-700 text-gray-500 font-mono">NO DATA FOUND.</div> : getData().map((item: any) => (
                  <div key={item.id} className="bg-black border border-white p-4 flex justify-between items-center hover:bg-gray-900">
                     <div className="flex items-center gap-4">
                        {(item.imageUrl || item.image) && (
                           <img src={item.imageUrl || item.image} alt="thumb" className="w-16 h-16 object-cover border border-white" />
                        )}
                        <div>
                           <p className="font-bold text-lg">{item.title || item.name || item.studentName || item.caption}</p>
                           <p className="text-xs font-mono text-gray-400">{item.designation || item.company || item.category || item.date || item.type}</p>
                           {item.subtitle && <p className="text-xs text-rez-pink">{item.subtitle}</p>}
                        </div>
                     </div>
                     <div className="flex gap-2">
                        <button onClick={() => { setEditItem(item); setIsModalOpen(true); }} className="w-10 h-10 flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black transition-colors">
                           <Edit size={18}/>
                        </button>
                        <button onClick={(e) => confirmDelete(item.id, e)} className="w-10 h-10 flex items-center justify-center border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                           <Trash2 size={18}/>
                        </button>
                     </div>
                  </div>
               ))}
            </div>
         ) : null}
      </main>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-black border-2 border-white p-8 w-full max-w-lg shadow-neo-pink relative max-h-[90vh] overflow-y-auto">
              <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white hover:text-rez-pink"><X size={24}/></button>
              <h3 className="text-2xl font-black uppercase mb-6 border-b-2 border-rez-purple pb-2">{editItem.id ? `Edit ${activeTab}` : `Add ${activeTab}`}</h3>
              <form onSubmit={handleSave} className="flex flex-col gap-2 font-mono">
                 {renderFormFields()}
                 <button className="neo-btn py-3 mt-4 text-lg">SAVE_CHANGES</button>
              </form>
           </div>
        </div>
      )}

      {/* Custom Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm">
           <div className="bg-black border-4 border-red-600 p-8 w-full max-w-md shadow-[8px_8px_0px_#dc2626] relative">
              <div className="flex flex-col items-center text-center">
                 <AlertTriangle size={64} className="text-red-600 mb-4" />
                 <h3 className="text-3xl font-black text-white uppercase mb-2">Confirm Delete</h3>
                 <p className="text-gray-400 font-mono mb-8">
                    Are you sure you want to delete this record?<br/>
                    <span className="text-red-500 font-bold">This action cannot be undone.</span>
                 </p>
                 <div className="flex w-full gap-4">
                    <button onClick={() => setIsDeleteModalOpen(false)} className="flex-1 py-3 border-2 border-white font-bold uppercase text-white hover:bg-white hover:text-black transition-colors">
                       Cancel
                    </button>
                    <button onClick={executeDelete} className="flex-1 py-3 bg-red-600 text-white font-bold uppercase border-2 border-red-600 hover:bg-red-700 hover:border-red-700 transition-colors shadow-[4px_4px_0px_white]">
                       Yes, Delete
                    </button>
                 </div>
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default Admin;
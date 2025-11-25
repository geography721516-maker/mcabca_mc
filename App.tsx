import React, { useState } from 'react';
import { MemoryRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Faculty from './pages/Faculty';
import Placements from './pages/Placements';
import Notices from './pages/Notices';
import Admin from './pages/Admin';
import Resources from './pages/Resources';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import { 
  FACULTY_DATA, 
  PLACEMENT_DATA, 
  NOTICE_DATA, 
  RESOURCE_DATA, 
  GALLERY_DATA, 
  HERO_SLIDES 
} from './constants';

function App() {
  const [facultyData, setFacultyData] = useState(FACULTY_DATA);
  const [placementData, setPlacementData] = useState(PLACEMENT_DATA);
  const [noticeData, setNoticeData] = useState(NOTICE_DATA);
  const [resourceData, setResourceData] = useState(RESOURCE_DATA);
  const [galleryData, setGalleryData] = useState(GALLERY_DATA);
  const [heroSlides, setHeroSlides] = useState(HERO_SLIDES);

  return (
    <MemoryRouter>
      <Routes>
        <Route path="/admin" element={
          <Admin 
            facultyData={facultyData} setFacultyData={setFacultyData}
            placementData={placementData} setPlacementData={setPlacementData}
            noticeData={noticeData} setNoticeData={setNoticeData}
            resourceData={resourceData} setResourceData={setResourceData}
            galleryData={galleryData} setGalleryData={setGalleryData}
            heroSlides={heroSlides} setHeroSlides={setHeroSlides}
          />
        } />
        
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/faculty" element={<Faculty facultyData={facultyData} />} />
              <Route path="/placements" element={<Placements placementData={placementData} />} />
              <Route path="/gallery" element={<Gallery galleryData={galleryData} />} />
              <Route path="/notices" element={<Notices noticeData={noticeData} />} />
              <Route path="/resources" element={<Resources resourceData={resourceData} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </MemoryRouter>
  );
}

export default App;
import './styles/App.scss';
import Landing from './pages/Landing.jsx';
import Header from './components/layout/Header.jsx';
import Home from './components/layout/Home.jsx';
import Footer from './components/layout/Footer.jsx';
import CardPreviewSite from './components/cardPreview/CardPreviewSite.jsx';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';

const getInitialData = () => {
  const stored = localStorage.getItem("formData");
  return stored
    ? JSON.parse(stored)
    : {
        projectName: '',
        slogan: '',
        repo: '',
        demo: '',
        technologies: '',
        description: '',
        authorName: '',
        job: '',
        authorPhoto: '',
        projectPhoto: '',
      };
};

function App() {
  
  const [data, setData] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);
  
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  const handleImageProject = (image) => {
    setData({ ...data, projectPhoto: image });
  };

  const handleImageAuthor = (image) => {
    setData({ ...data, authorPhoto: image });
  };

const [formKey, setFormKey] = useState(0); 

const handleResetForm = () => {
  const emptyData = {
    projectName: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    description: '',
    authorName: '',
    job: '',
    authorPhoto: '',
    projectPhoto: '',
  };
  
  setData(emptyData);
  localStorage.removeItem("formData");
  setFormKey(prev => prev + 1); 
};

  return (
    <>
      <Header />
      <Routes>
      <Route path="/" element={<Landing />} />
     <Route path="/app" element={
      <Home 
      key={formKey}
      data={data}
      handleInputChange={handleInputChange}
      handleImageProject={handleImageProject}
      handleImageAuthor={handleImageAuthor}
      handleResetForm={handleResetForm}
      />
      } />
      <Route path="/cardPreview" element={<CardPreviewSite data={data} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

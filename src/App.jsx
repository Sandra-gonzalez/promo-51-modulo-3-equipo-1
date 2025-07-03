import './styles/App.scss';
import Header from './components/layout/Header.jsx';
import Landing from './components/layout/Landing.jsx';
import Footer from './components/layout/Footer.jsx';
import CardPreviewSite from './components/cardPreview/CardPreviewSite.jsx';
import { Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';

// 🧠 Recupera los datos guardados al iniciar
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
  // 🧠 Estado del formulario, cargado desde localStorage si existe
  const [data, setData] = useState(getInitialData);

  // 💾 Guarda los datos automáticamente al cambiar
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(data));
  }, [data]);

  // 📝 Recoge los cambios de los inputs de texto
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  // 🖼 Actualiza la imagen del proyecto
  const handleImageProject = (image) => {
    setData({ ...data, projectPhoto: image });
  };

  // 🧝‍♀️ Actualiza la imagen de la autora
  const handleImageAuthor = (image) => {
    setData({ ...data, authorPhoto: image });
  };

  // 🧹 Reinicia el formulario y borra el localStorage
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
         // id: '', // añadir un id para el key
    };
    setData(emptyData);
    localStorage.removeItem("formData");
  };

  return (
    <>
      <Header />
       <Routes>
	      <Route index path="/"  element= { 
            <Landing data={data}
                handleInputChange={handleInputChange}
                handleImageProject={handleImageProject}
                handleImageAuthor={handleImageAuthor}
                handleResetForm={handleResetForm} />
         } />
	      <Route path="/cardPreview/" element= { <CardPreviewSite data={data}/> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

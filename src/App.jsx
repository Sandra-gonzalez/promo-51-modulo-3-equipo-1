import './styles/App.scss';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import FormSection from './components/form/FormSection.jsx';
import CardPreview from './components/cardPreview/CardPreview.jsx';
import Button from './components/Button.jsx';
import { useState } from 'react';

function App() {
  // Estado global de la app con los datos del formulario
  const [data, setData] = useState({
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
  });

  // Función que recoge los cambios de los inputs de texto
  const handleInputChange = (ev) => {
    const { name, value } = ev.target;
    setData({ ...data, [name]: value });
  };

  // Función para actualizar la imagen del proyecto
  const handleImageProject = (image) => {
    setData({ ...data, projectPhoto: image });
  };

  // Función para actualizar la imagen de la autora
  const handleImageAuthor = (image) => {
    setData({ ...data, authorPhoto: image });
  };

  return (
    <>
      <Header />
      <main className="main">
        <FormSection
          data={data}
          handleInputChange={handleInputChange}
          handleImageProject={handleImageProject}
          handleImageAuthor={handleImageAuthor}
        />
        <CardPreview data={data} />
      </main>
      <Button />
      <Footer />
    </>
  );
}

export default App;
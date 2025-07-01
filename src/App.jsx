/*
# 1. Crea tu propio react-starter-kit

  Durante este módulo vamos a crear muchos proyectos en React, por lo que es importante que tengas tu propio react-starter-kit. Si todavía no lo tienes,créalo.
*/

import './styles/App.scss';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import Form from './components/form/Form.jsx';
import CardPreview from './components/cardPreview/CardPreview.jsx';
import Button from './components/Button.jsx';

function App() {
  return (
    <>
    <Header></Header>
    <Form></Form>
    <CardPreview></CardPreview>
    <Button></Button>
    <Footer></Footer>
     
    </>
  );
}

export default App;

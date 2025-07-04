import { Link } from 'react-router-dom';
import '../styles/Home.scss';

function Home() {
  return (
    <div className="home">
      <div className="home__card">
        <h1>¡Hola!</h1>
        <p>¿Quieres crear una tarjeta de tu proyecto molón?</p>
        <p>¡Estás en el sitio indicado!</p>

        <Link to="/app">
          <button className="home__button">Entrar</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
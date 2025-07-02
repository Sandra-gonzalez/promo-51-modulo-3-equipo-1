import logoAdalab from '../../images/adalab.png';
import iconLaptop from '../../images/laptop-code-solid.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__top">
        <a className="header__brand" href="/">
          <img src={iconLaptop} alt="Icono Laptop" className="header__icon" />
          <p className="header__text">Proyectos Molones</p>
        </a>
        <img src={logoAdalab} alt="Logo Adalab" className="header__adalab" />
      </div>

      <section className="header__hero">
        <h1 className="header__hero-title">Proyectos Molones</h1>
        <p className="header__hero-subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </p>
        <a href="#" className="header__hero-button">
          VER PROYECTO
        </a>
      </section>
    </header>
  );
}

export default Header;
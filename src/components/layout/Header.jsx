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
    </header>
  );
}

export default Header;
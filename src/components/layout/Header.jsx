function Header() {
  return (
     <header class="header">
      <a class="header__brand" href="./" title="Haz click para volver a la página inicial">
        {/* <img class="header__companyLogo" src="./images/laptop-code-solid.svg" alt="Logo proyectos molones"> */}
        <h1 class="header__title">Proyectos molones</h1>
      </a>
      {/* <img class="logoSponsor" src="./images/adalab.png" alt="Logo Adalab"> */}
      <section class="hero">
        <h2 class="title">Proyectos molones</h2>
        <p class="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
        <a class="button--link" href="./">Ver proyectos</a>
      </section>

    </header>
  );
}

export default Header;

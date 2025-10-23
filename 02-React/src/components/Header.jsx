const Header = () => {
  return (
    <div>
      <header className="main-header">
        <div className="logo">
          <img src="./setting.svg" alt="setting logo" />
          <h1>DevJobs</h1>
        </div>

        <nav>
          <a href="./index.html">Inicio</a>
          <a href="./buscador_empleo.html">Empleos</a>
          <a href="./search.test.html">Empresas</a>
          <a href="">Salarios</a>
        </nav>

        <div>
          <button className="button-fullblue">Publicar un empleo</button>
          <button className="button-fullgray">Iniciar sesión</button>
        </div>
      </header>
    </div>
  );
};

export default Header;

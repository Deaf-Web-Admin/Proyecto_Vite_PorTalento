import "./Header.css";

const template = () => {
	return `
<div class="Container">
  <img src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/logo.png" alt="Logo Fundacion Once y portalento digital">
  <img src="https://portalentodigital.fundaciononce.es/sites/default/files/pictures/logo-gso2021.png" alt="Logo Grupo Social ONCE">
</div>
 <nav>
    <ul>
      <li>
        <a href="/">Inicio</a>
      </li>
      <li>
        <a href="/Cursos">Cursos</a>
      </li>
      <li>
        <a href="/Galeria">Galeria</a>
      </li>
      <li>
        <a href="/Contacto">Contacto</a>
      </li>
    </ul>
  </nav>
  `;
};

const Header = () => {
	document.querySelector("header").innerHTML = template();
};

export default Header;

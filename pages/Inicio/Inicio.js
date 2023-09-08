import "./Inicio.css";

const template = () => {
	return `<div class="InicioContainer">
  <h2>¿Qué es el Programa Por Talento Digital?</h2>
  <p>Por Talento Digital es un programa de formación permanente en competencias digitales y profesiones tecnológicas de la Fundación ONCE orientado a la adquisición de conocimientos y cualificación tecnológica y digital de las personas con discapacidad para favorecer así su inclusión laboral en profesiones con alta demanda en el mercado de trabajo, multiplicando de esta forma sus perspectivas profesionales.</p>
  </Div>`;
};

const Inicio = () => {
	document.querySelector("main").innerHTML = template();
};

export default Inicio;

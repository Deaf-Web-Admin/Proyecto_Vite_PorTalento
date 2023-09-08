import "./Cursos.css";

const listadoCursos = [
	{
		FechaLimite: "32 de Sept. 2023",
		NombreCurso: "Photoshop",
		FechaInicio: "01 de Octubre de 2023",
		Lugar: "PorTalento Embajadores",
		Duracion: "400 Hrs",
		Plazas: "25",
		Modalidad: "Presencial",
		Reqs: "CMYK, Resolucion, Vector",
		Descripcion: "Aprende a usar fotochop",
	},
	{
		FechaLimite: "32 de Sept. 2023",
		NombreCurso: "CorelDRAW",
		FechaInicio: "01 de Octubre de 2023",
		Lugar: "PorTalento Embajadores",
		Duracion: "600 Hrs",
		Plazas: "15",
		Modalidad: "Presencial",
		Reqs: "CMYK, Resolucion, Vector",
		Descripcion: "Lo mejor para diseno",
	},
	{
		FechaLimite: "32 de Sept. 2023",
		NombreCurso: "FlexiSign",
		FechaInicio: "01 de Octubre de 2023",
		Lugar: "PorTalento Embajadores",
		Duracion: "100 Hrs",
		Plazas: "5",
		Modalidad: "Presencial",
		Reqs: "CMYK, Resolucion, Vector",
		Descripcion: "Para impresion a formato ancho",
	},
	{
		FechaLimite: "32 de Sept. 2023",
		NombreCurso: "Linux",
		FechaInicio: "01 de Octubre de 2023",
		Lugar: "PorTalento Embajadores",
		Duracion: "400 Hrs",
		Plazas: "100",
		Modalidad: "Presencial",
		Reqs: "ninguno",
		Descripcion: "Aprende a usar el mejor sistema operativo",
	},
];

const template = () => {
	return `<div class="CursosContainer"></div>
  `;
};

const Cursos = () => {
	document.querySelector("main").innerHTML = template();
	for (let i = 0; i < listadoCursos.length; i++) {
		const container = document.querySelector(".CursosContainer");
		const div1 = document.createElement("div");
		div1.classList.add("Cajita1");
		div1.innerHTML = `${listadoCursos[i].NombreCurso}`;
		container.appendChild(div1);

		const div2 = document.createElement("div");
		div2.classList.add("Cajita2");
		div2.innerHTML = `Inscripciones hasta: ${listadoCursos[i].FechaLimite}`;
		container.appendChild(div2);

		const div3 = document.createElement("div");
		div3.classList.add("Cajita3");
		div3.innerHTML = `Lugar: ${listadoCursos[i].Lugar}`;
		container.appendChild(div3);

		const div4 = document.createElement("div");
		div4.classList.add("Cajita4");
		div4.innerHTML = `Duracion: ${listadoCursos[i].Duracion}`;
		container.appendChild(div4);

		const div5 = document.createElement("div");
		div5.classList.add("Cajita5");
		div5.innerHTML = `Plazas: ${listadoCursos[i].Plazas}`;
		container.appendChild(div5);

		const div6 = document.createElement("div");
		div6.classList.add("Cajita6");
		div6.innerHTML = `Modalidad: ${listadoCursos[i].Modalidad}`;
		container.appendChild(div6);

		const div7 = document.createElement("div");
		div7.classList.add("Cajita7");
		div7.innerHTML = `Conocimientos previos: <br>${listadoCursos[i].Reqs}`;
		container.appendChild(div7);

		const div8 = document.createElement("div");
		div8.classList.add("Cajita8");
		div8.innerHTML = `Descripcion del curso: <br>${listadoCursos[i].Descripcion}`;
		container.appendChild(div8);

		const div9 = document.createElement("div");
		div9.classList.add("Cajita9");
		div9.innerHTML = `Inicia el: ${listadoCursos[i].FechaInicio}`;
		container.appendChild(div9);
	}
};

export default Cursos;

import "./Galeria.css";

const template = () => {
	return `
  <Div class="LasImagenes">
  <img src="https://elsamex.com/wp-content/uploads/2022/01/Captura.png" alt="Foto de la oficina de Fundacion con algunas personas" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://elsamex.com/wp-content/uploads/2022/01/image1-1024x400.png" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://elsamex.com/wp-content/uploads/2022/08/image3-1536x746v2.jpg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://elsamex.com/wp-content/uploads/2022/01/image2.jpeg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://elsamex.com/wp-content/uploads/2022/01/image4-1024x768.jpeg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://ca.goteo.org/img/700x0/construye-ed5-foto1.jpg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://www.goteo.org/img/700x0/gira-foto2.jpg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://www.rrhhdigital.com/wp-content/uploads/userfiles/ayho-samsung.jpg" alt="Foto de la oficina de Fundacion con algunas personas">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyC6bOaezHb-uctjQyVTXJe0aEtRo005Z4yxsPFp7PqREi3NM9yTofygabyD866ew9juA&usqp=CAU" alt="Foto de la oficina de Fundacion con algunas personas">
  </Div>
  `;
};

const Galeria = () => {
	document.querySelector("main").innerHTML = template();
};

export default Galeria;

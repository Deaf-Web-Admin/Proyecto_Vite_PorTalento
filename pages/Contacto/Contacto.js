import "./Contacto.css";

const template = () => {
	return `<form action="https://flying-roaster.000webhostapp.com/temp.php" method="Post">
  <Input type="Text" placeholder="Su Nombre" name="ElNombre" required>
  <Input type="Text" placeholder="Telefono o correo" name="ElContacto" required>
  <Input type="Text" placeholder="Su Mensaje" name="ElMensaje" required>
  <Input type="Reset" value="Borrar">
  <Input type="Submit" value="Enviar">
  </form>
    <iframe width="400px" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=40.4043174,-3.6989607+(Proyecto%20Vite)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">`;
};

const Contacto = () => {
	document.querySelector("main").innerHTML = template();
};

export default Contacto;

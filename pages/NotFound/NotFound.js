import "./NotFound.css";

const template = () => {
	return `<img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg">`;
};

const NotFound = () => {
	document.querySelector("main").innerHTML = template();
};

export default NotFound;

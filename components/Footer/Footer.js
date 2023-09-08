import "./Footer.css";

const template = () => {
	return `
    <ul class="social-header"><li class="first"><a href="https://www.facebook.com/fundaciononce" target="_blank" title="Abre en nueva ventana"><img alt="Facebook (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-facebook.png" /></a></li>
<li class="first"><a href="https://twitter.com/Fundacion_ONCE" target="_blank" title="Abre en nueva ventana"><img alt="Twitter (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-twitter.png" /></a></li>
<li class="first"><a href="https://www.youtube.com/user/FundacionONCE" target="_blank" title="Abre en nueva ventana"><img alt="Youtube (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-youtube.png" /></a></li>
<!-- <li class="first"><a href="http://blog.fundaciononce.es/" target="_blank" title="Abre en nueva ventana"><img alt="Blog (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-blog.png" /></a></li> --><li class="first"><a href="https://www.instagram.com/fundaciononce/" target="_blank" title="Abre en nueva ventana"><img alt="Instagram (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-instagram.png" /></a></li>
<li class="first"><a href="https://es.linkedin.com/company/fundacion-once-inserta" target="_blank" title="Abre en nueva ventana"><img alt="LinkedIn (abre en ventana nueva)" src="https://portalentodigital.fundaciononce.es/sites/all/themes/foncecaptacion/img/iconos-redes/icon-linkedin.png" /></a></li>
</ul>`;
};

const Footer = () => {
	document.querySelector("footer").innerHTML = template();
};

export default Footer;

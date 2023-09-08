import "./style.css";
import Header from "./components/Header/Header";
import { router, addLinkListeners } from "./router/router";
import Footer from "./components/Footer/Footer";

Header();
router();
addLinkListeners();
Footer();

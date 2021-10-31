import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './pages/about';
import Contact from './pages/contact';
import Links from './pages/links';
import Services from './pages/services';
import Home from './pages/home';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';


//Define the routes for the different pages
const routes = [
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/links",
    component: Links,
  },
  {
    path: "/services",
    component: Services,
  },
  {
    path: "/",
    component: Home
  }
];

function App() {
	const location = useLocation();
	const year = new Date().getFullYear();
  return (
    <div className="App">
      <div className="headerT">
			<div className="container">
				<div className="home ">
					<div className="col-md-7">
						<div className="todo">
							<div className="imgI">
								<img src="/imgs/HomeLog1.jpg" title="Artis Aegis" alt="Artis Aegis Icon" className="img-responsive img-rounded imglogo img-center" style={{maxHeight:'175px'}}/>
							</div>
							<div className="textD">
								<h1 className="titulo">
									Artis Aegis, LLC
								</h1>
								<h3 className="subtitulo">
									Conservation of Paintings
								</h3>
							</div>
						</div>
					</div>
					<div className="col-md-5 bots">
						<div className="botones">
							<div className={location.pathname === '/' ? 'botonac' : 'boton'}>
					<Link to="/" >HOME</Link>
							</div>
							<div className={location.pathname === '/about' ? 'botonac' : 'boton'}>
				<Link to="/about" >ABOUT</Link>
							</div>
							<div className={location.pathname === '/services' ? 'botonac' : 'boton'}>
								<Link to="/services">SERVICES</Link>
							</div>
							<div className={location.pathname === '/contact' ? 'botonac' : 'boton'}>
								<Link to="/contact">CONTACT</Link>
							</div>
							<div className={location.pathname === '/links' ? 'botonac' : 'boton'}>
								<Link to="/links">LINKS</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			</div>
      <div>
        <Switch>
          {routes.map( (route, i) =>(
            <Route key={i} {...route} />
          ) )}
        </Switch>
      </div>
	  <a href="http://www.conservation-us.org/peer-reviewed" ><img width="90" height="90" src="http://www.conservation-us.org/images/default-source/membercenter/aic-pa-mark-logo.jpg?sfvrsn=4" alt="AIC Professional Associate Mark" title="AIC PA Mark" className="imgCentro" /></a>
      <div className="navBottom">
				<div className="container">
					<div className="navG">
						<div className="navBI">
							<p className="marginT">
								© {year} Artis Aegis, LLC
							</p>	
							<p className="copyR">
								Unless otherwise noted, all images and content of this site are the property of Artis Aegis, LLC and cannot be reproduced or published without written permission.
							</p>
						</div>
						<div className="navBC">
							<p className="marginT">
								<a href="https://www.facebook.com/paintingsconservation/" className="navBot" title="Facebook">
									<i className="fa fa-facebook-official" aria-hidden="true"></i>
								</a>&nbsp; 
								<a href="https://www.linkedin.com/in/catalina-vasquez-kennedy-a4a22a17" title="LinkedIn" className="navBot">
									<i className="fa fa-linkedin" aria-hidden="true"></i>
								</a>
							</p>	
						</div>
						<div className="navBD">
							<p className="copyRight">
								artisaegis@gmail.com
								<br />
								757-405-2971
							</p>	
							<p className="madeBy">
								Site Design by <a href="https://webdevuniandes.github.io/nvasquez97/" className="Nico">Nicolás Vásquez Murcia</a>
							</p>
						</div>
					</div>
					
				</div>
			</div>
    </div>
  );
}

export default App;

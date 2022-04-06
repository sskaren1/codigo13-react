import { Link, Outlet } from "react-router-dom";
import "./../../styles/navBar.css";
import pika from "./../../assets/image/pik5.png"

const Main = () => {
  return (
    <div>
      <nav className="navBar">
        <div className="navBar__container">
          <div>
            <img src={pika} alt="logo" className="logo"/>
            {/* <h2>Logo</h2> */}
          </div>
          <div>
            <ul className="link">
              <li className="link__item">
                <Link to="/">Pokemon</Link>
              </li>
              <li className="link__item">
                <Link to="/flags">Banderas</Link>
              </li>
              <li className="link__item">
                <Link to="/youtube">Youtube</Link>
              </li>
              <li className="link__item">
                <Link to="/maps">Maps</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Esto va recibir los componentes hijos */}
      <Outlet />
    </div>
  );
};

export default Main;

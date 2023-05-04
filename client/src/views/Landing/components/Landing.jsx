import { Link } from "react-router-dom";
import style from './Landing.module.css'

const Landing = () => {
  return (
    <div className={`${style.container} ${style.background}`}>
      <h1 className={style.title}>Bienvenido a Pokemon-PI</h1>
      <p className={style.subtitle}>Creado y Diseñado por Jeremias Brussino</p>
      <div className={style["button-container"]}>
        <Link to="/Home" className={style.button}>Entrar</Link>
      </div>
    </div>
  );
};

export default Landing;
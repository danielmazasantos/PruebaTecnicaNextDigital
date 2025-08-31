
import { Link } from "react-router-dom";
import "./Home.scss"


export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="card">
          <h2 className="title"> <em>Facelook </em> es un protototipo de red social en la que podras consultar sobre distintos usuarios e informacion relacionada sobre estos</h2>
          <Link to="/users" className="button primary">Ver usuarios</Link>
        </div>
      </div>
    </div>
  );
}

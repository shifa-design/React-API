import FetchUsers from './Users';
import FetchUsers1 from './Users1';

import FetchCars from "./FetchData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

export default function App(){
  return(
    <div className="container">
<FetchCars/>
      <hr/>
      <FetchUsers/>
      <hr/>
      <FetchUsers1/>
      
    </div>

  );
}
import { useState } from "react";
import "./App.css";
import img1 from "./assets/antes.jpg";
import img2 from "./assets/despues.jpg";

function App() {
const [oculto, setOculto] = useState(false)

const open = () => {
  setOculto(!oculto)
}


  return (
    <div className="App">
      <h1 className="text-center">Feliz cumple leona</h1>
      <h5 className="text-center">click en la imagen</h5>
      <div className="container" onClick={open}>
      <div className="col-12" style={{heigth:"100%"}}>
        <div className="item1" style={{opacity:oculto?"0":"1"}}>
          <img className="leo1" src={img1} alt="leona" />
          <span>Antes de ver a Harry</span>
        </div>
        <div className="item2" style={{opacity:oculto?"1":""}}>
          <img className="leo2" src={img2} alt="leona" />
          <span>Después de ver a Harry</span>
        </div>

      </div>
      </div>
    </div>
  );
}

export default App;

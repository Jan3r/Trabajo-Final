//import logo from './logo.svg';
import './App.css';
import { Especies } from "./components/Especies/especies-modulo";
import {Imagenes} from "./components/imagenes/imagenes";
import {Descripcion} from "./components/descripcion/descripcion-modulo"
import { M } from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{backgroundImage: `url("https://media.istockphoto.com/id/1160725910/es/foto/textura-de-fondo-reptiles-de-cuero-verde.jpg?s=612x612&w=0&k=20&c=_eGYH5oKpVOVQBG3oY68rjuExvtXgrWbQBXkCPLwEPs=")`}}>
     {/* <Especies />
    <Imagenes />
    <Descripcion />  */}
    <M />    

    </div>
  );
}

export default App;

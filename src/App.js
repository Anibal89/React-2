import logo from './assets/images/logo.svg';
import gato from './assets/images/gato.gif';
import './assets/css/App.css';

// importar componente  = controlador o objeto
import MiComponente from './components/MiComponente';

function HolaMundo(nombre, edad){
  var presentacion = (<div>
      
      </div>);
  return presentacion
}

function App() {
  var nombre = "anibal zapeta";
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={gato} className="App-logo" alt="logo"/> 
        <h1></h1>
        <p>
          I love maili :)
        </p>
        {HolaMundo(nombre,12)}
        <section className="componentes">

            <MiComponente />

        </section>
      </header>
     
    </div>
  );
}

export default App;

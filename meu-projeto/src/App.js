//Area para importar coisas
import './App.css';
//import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa.Js';

//Area de programar.
function App() {

  return (
    <div className="App">
      <SayMyName nome="Adriel" />
      <Pessoa nome="adriel"/>
    </div>
  );
}

export default App;

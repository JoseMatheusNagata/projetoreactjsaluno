import logo from './logo.svg';
import './App.css';
import OficinaComponent from './Components/OficinaComponent';
import OficinaBandeira from './Components/OficinaBandeira';
import OficinaForm from './Components/OficinaForm';
function App() {
  return (
    <div className="App">
     <h1> Projeto para o aluno praticar </h1>
         <OficinaComponent />
         <OficinaBandeira />
         <OficinaForm />
    </div>
  );
}

export default App;

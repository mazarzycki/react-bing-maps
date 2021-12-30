import './App.css';
import './components/BingMap';
import BingMap from './components/BingMap';
import NavbarElement from './components/NavbarElement';



function App() {
  return (
    <div className="App">
      <header>
        <NavbarElement></NavbarElement>
      </header>
      <body>
        <BingMap></BingMap>
        
      </body>


    </div>

  );
}

export default App;

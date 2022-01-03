import './App.css';
import './components/BingMap';
import BingMap from './components/BingMap';
import NavbarElement from './components/NavbarElement';
import LocationInfo from './components/LocationInfo';


function App() {
  return (
    <div className="App">
      <header>
        <NavbarElement></NavbarElement>
      </header>
      <body>
      <LocationInfo />
        <BingMap></BingMap>
        
        
      </body>


    </div>

  );
}

export default App;

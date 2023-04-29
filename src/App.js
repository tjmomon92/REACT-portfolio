import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from './components/NavBar';
import {AboutMe} from './components/AboutMe';
import {Portfolio} from './components/Portfolio';
import {MyResume} from './components/MyResume';
import {Contact} from './components/Contact';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <AboutMe />
      <Portfolio />
      <MyResume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

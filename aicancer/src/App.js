import AppHeader from './Component/Header';
import AppHero from './Component/Hero';
import AppAbout from './Component/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppSercvices from './Component/OurServices';
import AppTeam from './Component/Team';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <header id='header'>
        <AppHeader />
      </header>  
      <main>
        <AppHero />
        <AppAbout/>
        <AppSercvices/>
        <AppTeam/>
      </main>
    </div>
  );
}

export default App;

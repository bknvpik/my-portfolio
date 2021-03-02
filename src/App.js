import './styles/App.scss';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutMe />
      <MySkills />
      <MyProjects />
      <ContactMe />
    </div>
  );
}

export default App;

import './styles/App.scss';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutMe />
      <MySkills />
    </div>
  );
}

export default App;

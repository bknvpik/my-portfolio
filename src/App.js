import './styles/App.scss';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div className="app-container">
      <LandingPage />
      <AboutMe />
    </div>
  );
}

export default App;

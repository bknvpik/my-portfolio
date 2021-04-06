import './styles/App.scss';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import { Component } from 'react';

class App extends Component {  
  render() {
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
}

export default App;

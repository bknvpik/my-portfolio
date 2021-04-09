import './styles/App.scss';
import LandingPage from './components/LandingPage';
import AboutMe from './components/AboutMe';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import ContactMe from './components/ContactMe';
import ScrollableAnchor, { goToAnchor } from 'react-scrollable-anchor';

const App = () => {

  goToAnchor('0');
  
  const scrollHome = (e) => {
    if(e.deltaY > 0)
    { 
      goToAnchor('1');
    }
    if(e.deltaY < 0)
    { 
      goToAnchor('0');
    }
  }

  const scrollAbout = (e) => {
    if(e.deltaY > 0)
    { 
      goToAnchor('2');
    }
    if(e.deltaY < 0)
    { 
      goToAnchor('0');
    }
  }

  const scrollSkills = (e) => {
    if(e.deltaY > 0)
    { 
      goToAnchor('3');
    }
    if(e.deltaY < 0)
    { 
      goToAnchor('1');
    }
  }

  const scrollProjects = (e) => {
    if(e.deltaY > 0)
    { 
      goToAnchor('4');
    }
    if(e.deltaY < 0)
    { 
      goToAnchor('2');
    }
  }

  const scrollContact = (e) => {
    if(e.deltaY > 0)
    { 
      goToAnchor('4');
    }
    if(e.deltaY < 0)
    { 
      goToAnchor('3');
    }
  }

  return (
    <div id="app-container" >
      <ScrollableAnchor id={'0'}>
        <div onWheel={scrollHome}>
          <LandingPage />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'1'}>
        <div onWheel={scrollAbout}>
          <AboutMe />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'2'}>
        <div onWheel={scrollSkills}>
          <MySkills />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'3'}>
        <div onWheel={scrollProjects}>
          <MyProjects />
        </div>
      </ScrollableAnchor>
      <ScrollableAnchor id={'4'}>
        <div onWheel={scrollContact}>
          <ContactMe />
        </div>
      </ScrollableAnchor>
    </div>
  );
}

export default App;
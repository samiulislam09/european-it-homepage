import './App.css';
import CareerCouncelling from './components/CareerCouncelling/CareerCouncelling';
import Courses from './components/Courses/Courses';
import Facilities from './components/Facilities/Facilities';
import Header from './components/Header/Header';
import JobPlacement from './components/JobPlacement/JobPlacement';
import Services from './components/Services/Services';
import Slider from './components/TopCarousel/Slider'
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <Services></Services>
      <WelcomeMessage></WelcomeMessage>
      <Courses></Courses>
      <Facilities></Facilities>
      <JobPlacement></JobPlacement>
      <CareerCouncelling></CareerCouncelling>
    </div>
  );
}

export default App;

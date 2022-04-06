import './App.css';
import CareerCouncelling from './components/CareerCouncelling/CareerCouncelling';
import ContactUs from './components/ContactUsSection/ContactUs';
import Courses from './components/Courses/Courses';
import Facilities from './components/Facilities/Facilities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JobPlacement from './components/JobPlacement/JobPlacement';
import Services from './components/Services/Services';
import WelcomeMessage from './components/WelcomeMessage/WelcomeMessage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Services></Services>
      <WelcomeMessage></WelcomeMessage>
      <Courses></Courses>
      <Facilities></Facilities>
      <JobPlacement></JobPlacement>
      <CareerCouncelling></CareerCouncelling>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;

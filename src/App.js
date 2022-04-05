import './App.css';
import Courses from './components/Courses/Courses';
import Facilities from './components/Facilities/Facilities';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Courses></Courses>
      <Facilities></Facilities>
    </div>
  );
}

export default App;

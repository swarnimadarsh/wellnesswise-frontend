import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header.js';
import './App.css';
import Login from './components/Login.js';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.js';
import Signup from './components/Signup.js';
import Home from './components/Home/Home.js';
import Footer from './components/Footer.js';
import LearningVideos from './components/LearningVideos.js';
import Quiz from './components/Quiz.js';
import Doctor from './components/Consult/Doctor.js';
import Syllabus from './components/Syllabus/Syllabus.js';
import AppointmentList from './components/Consult/AppoinmentList.js';
import EditAppoinment from './components/Consult/EditAppoinment.js';

function App() {
  return (
    <div>
      <HashRouter>
        <Header />
        <Nav/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/learningvideos" element={<LearningVideos/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/doctor" element={<Doctor/>}/>
          <Route path="/syllabus" element={<Syllabus/>}/>
          <Route path="/appoinmentlist" element={<AppointmentList/>}/>
          <Route path="/editappoinment/:id" element={<EditAppoinment />} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;

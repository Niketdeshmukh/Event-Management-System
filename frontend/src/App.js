import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventForm from '../src/components/EventForm'; // Ensure the file name is correct
import EventList from '../src/pages/EventList'; // Ensure the file name is correct
import Home from './components/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/create-event" element={<EventForm />} />
        <Route path="/events" element={<EventList />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

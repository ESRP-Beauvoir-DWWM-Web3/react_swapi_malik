import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import People from './components/People';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/people" element={<People />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;

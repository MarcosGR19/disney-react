import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/characters" element={<CharactersPage></CharactersPage>} />
        <Route path="/characters/:id" element={<CharacterPage></CharacterPage>} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListClient from './pages/ListClient';
import NewClient from './pages/NewClient';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewClient />} />
        <Route path="/cadastros" element={<ListClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

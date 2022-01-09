import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ListClient from './pages/ListClient';
import NewClient from './pages/NewClient';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewClient />} />
          <Route path="/cadastros" element={<ListClient />} />
        </Routes>
      </BrowserRouter>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import store from 'store';
import User from 'pages/User';
import { LayoutDefault } from 'components/LayoutDefault';
import ListUser from './pages/ListUser';
import NewUser from './pages/NewUser';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <LayoutDefault>
            <Routes>
              <Route path="/" element={<NewUser />} />
              <Route path="/cadastros" element={<ListUser />} />
              <Route path="/cadastros/:id" element={<User />} />
            </Routes>
          </LayoutDefault>
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

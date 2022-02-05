import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';
import { ThemeProvider } from 'styled-components';
import { render, RenderResult } from '@testing-library/react';
import theme from 'styles/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );

export const renderWithThemeEndRouter = (
  children: React.ReactNode
): RenderResult =>
  render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );

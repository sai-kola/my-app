import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import TaskPage from './pages/TaskPage';
import Header from './components/Header';
import ThemeToggle from './components/ThemeToggle';
import { useSelector } from 'react-redux';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
  }
`;

const lightTheme = {
  body: '#fff',
  text: '#000'
};

const darkTheme = {
  body: '#000',
  text: '#fff'
};

function App() {
  const theme = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

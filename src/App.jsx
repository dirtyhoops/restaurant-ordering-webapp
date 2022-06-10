import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import Header from './components/Header';
import FeaturedFood from './components/FeaturedFood';
import './App.css';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },

  mobile: '768px'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {/* transfer all this to HomePage later on */}
        <Header />

        <FeaturedFood></FeaturedFood>
      </>
    </ThemeProvider>
  );
}

export default App;

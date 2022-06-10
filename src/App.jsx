import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global.styled';
import { Container } from './components/styles/Container.styled';
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
        <Container>
          <FeaturedFood></FeaturedFood>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;

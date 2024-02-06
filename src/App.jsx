
import * as S from './App.styles';
import { Dictionary } from './components/Dictionary/Dictionary';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <S.Wrapper>
      <S.Container>
        <Dictionary />
        <Footer/>
      </S.Container>
    </S.Wrapper>
  );
}

export default App;

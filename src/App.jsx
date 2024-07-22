
import * as S from './App.styles';
import { Dictionary } from './components/Dictionary/Dictionary';
import { Footer } from './app/components/Footer';

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

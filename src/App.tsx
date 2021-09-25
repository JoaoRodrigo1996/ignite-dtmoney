import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
// JSON SERVER -> CONSUMIR DADOS SEM TER UMA API REST PRONTA.
// MIRAGE JS -> API FAKE DENTRO DO FRONT END.

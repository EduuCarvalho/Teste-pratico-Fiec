import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import GlobalStyled from "./assets/GlobalStyle"
import { FiecManagerPage } from "./pages/FiecManagerPage";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyled/>
    <Routes>
    <Route path="/" element={<FiecManagerPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

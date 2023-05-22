import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/card/Cards";
import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/detail/Detail";
import PageNotFound from "./components/PageNotFound";
import Header from "./components/header/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="detailPoke/:id" element={<Detail />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

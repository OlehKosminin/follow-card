import { Route, Routes, BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import { Provider } from "react-redux";

import NavBar from "./modules/NavBar/NavBar";
import MainPage from "./pages/MainPage/MainPage";
import CardsPage from "./pages/CardPage/CardPage";

import "./App.css";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

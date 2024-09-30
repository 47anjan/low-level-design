import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { MemeApp } from "./components/MemeApp";
import { About } from "./components/About";
import { Login } from "./components/Login";
import { Profile } from "./Profile";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MemeApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

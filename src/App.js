import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EditEvent from "./components/EditEvent/EditEvent";
import Catalog from "./components/Catalog/Catalog";
import DetailsEvent from "./components/DetailsEvent/DetailsEvent";
import Page404 from "./components/404/404";

import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/eventContext";

import "./App.css";

function App() {

  return (
    <AuthProvider>
      <div id="box">
        <Header />

        <EventProvider>
          <main className="main-layout">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/events/:eventId/edit" element={<EditEvent />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:eventId" element={<DetailsEvent />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>
          </main>
        </EventProvider>
      </div>
      <div id="footer">
        <footer>
          <p>ENTRO React App Softuni 2022 ©</p>
        </footer>
      </div>
    </AuthProvider>
  );
}

export default App;

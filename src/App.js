import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
// import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Register from "./components/Register/Register";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import EditEvent from "./components/EditEvent/EditEvent";
import Catalog from "./components/Catalog/Catalog";
import DetailsEvent from "./components/DetailsEvent/DetailsEvent";
// import { useEffect } from "react";
// import * as eventService from "./services/eventService";
import { AuthProvider } from "./context/AuthContext";
import { EventProvider } from "./context/eventContext";
// import * as requester from "./services/requester"
// import { useLocalStorage } from "./hooks/useLocalStorage";

import "./App.css";

function App() {
  // const [events, setEvents] = useState([]);
  // const [auth, setAuth] = useLocalStorage("auth", {});
  // const navigate = useNavigate();

  // useEffect(() => {
  //   eventService.getAll().then((result) => {
  //     setEvents(result);
  //   });
  // }, []);

  // const addEvent = (eventData) => {
  //   setEvents((state) => [...state, eventData]);
  //   navigate("/catalog");
  // };

  // const eventEdit = (eventId, eventData) => {
  //   setEvents((state) => state.map((x) => (x._id === eventId ? eventData : x)));
  // };

  // const userLogin = (authData) => {
  //   setAuth(authData);
  // };

  // const userLogout = () => {
  //   setAuth({});
  // };

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
              <Route
                path="/catalog/:eventId"
                element={<DetailsEvent />}
              />
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

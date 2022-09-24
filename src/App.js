import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header";
import Welcome from "./Pages/Home/Welcome";
import AllContacts from "./Pages/Contact/AllContacts";
import AddContact from "./Pages/Contact/AddContact";
import Favorites from "./Pages/Contact/Favorites";
import Login from './Pages/Login/Login';
import Register from "./Pages/Login/Register";
import NotFound from "./Pages/Shared/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from './Pages/Login/RequireAuth';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import UpdateContact from "./Pages/Contact/UpdateContact";





function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      <Header></Header>
      <Routes>
        {!user && <Route path="/" element={<Home></Home>}></Route>}
        <Route
          path="welcome"
          element={
            <RequireAuth>
              <Welcome></Welcome>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="allContacts"
          element={
            <RequireAuth>
              <AllContacts></AllContacts>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="addContact"
          element={
            <RequireAuth>
              <AddContact></AddContact>
            </RequireAuth>
          }
        ></Route>
        <Route path="/update/:id" element={
          <RequireAuth>
            <UpdateContact></UpdateContact>
          </RequireAuth>}></Route>
        <Route
          path="favorites"
          element={
            <RequireAuth>
              <Favorites></Favorites>
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

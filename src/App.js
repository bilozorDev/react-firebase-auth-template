import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SharedLayout from "./components/SharedLayout";
import AccountDetails from "./pages/AccountDetails";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="account" element={<ProtectedRoute><AccountDetails/></ProtectedRoute>}/>
      </Route>
    </Routes>
  );
}

export default App;

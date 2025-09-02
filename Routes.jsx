import { Route, Routes } from "react-router-dom";

import Navbar from "./ecommerce/src/component/component/layout/Navbar";
import Mainlayout from "./ecommerce/src/component/component/layout/Mainlayout";
import Contact from "./ecommerce/src/component/component/pages/Contact";
import About from "./ecommerce/src/component/component/pages/About";
import Signup from "./ecommerce/src/component/component/pages/Signup";
import Login from "./ecommerce/src/component/Navvv/Login";
import Cart from "./ecommerce/src/component/component/pages/Cart";
import Fav from "./ecommerce/src/component/component/pages/Fav";
import Admin from "./ecommerce/src/component/component/pages/Admin";
import User from "./ecommerce/src/component/component/pages/Profile";
import AccountManagement from "./ecommerce/src/component/component/layout/AccountManagement";
import PrivateRoute from "./ProtectedRouter/PrivateRoute";
import UserDetail from "./ecommerce/src/component/component/layout/UserDetail";



function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        {/* Public pages */}
        <Route index element={<Mainlayout />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />

        {/* Protected pages */}
        <Route
          path="home"
          element={
            <PrivateRoute>
              <Mainlayout />
            </PrivateRoute>
          }
        />
         <Route path='/user/:id' element={<UserDetail/>}/>
        <Route
          path="contact"
          element={
            <PrivateRoute>
              <Contact />
            </PrivateRoute>
          }
        />
        <Route
          path="about"
          element={
            <PrivateRoute>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="favourites"
          element={
            <PrivateRoute>
              <Fav />
            </PrivateRoute>
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
        <Route
          path="account"
          element={
            <PrivateRoute>
              <AccountManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;

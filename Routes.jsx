    import { Route, Routes } from "react-router-dom";



    import Contact from "./ecommerce/src/component/component/pages/Contact";
    import Navbar from "./ecommerce/src/component/component/layout/Navbar";
    import Mainlayout from "./ecommerce/src/component/component/layout/Mainlayout";

    import About from "./ecommerce/src/component/component/pages/About";
    import Signup from "./ecommerce/src/component/component/pages/Signup";
    import Login from "./ecommerce/src/component/Navvv/Login";
    import Cart from "./ecommerce/src/component/component/pages/Cart";
    import Fav from "./ecommerce/src/component/component/pages/Fav";
    import Admin from "./ecommerce/src/component/component/pages/Admin";
import User from "./ecommerce/src/component/component/pages/Profile";




    function Router(){
        return(
            <Routes>
                <Route path='/' element={<Navbar/>}>
                <Route index element={<Mainlayout/>}/>
                <Route path="/home" element={<Mainlayout/>}/>
                
                
                <Route path='/contact' element={<Contact/>}/>
                <Route  path='/about' element={<About/>} />
                <Route  path='/signup' element={<Signup/>}/>
                <Route  path='/cart' element={<Cart/>}/>
                 <Route  path='/profile' element={<User/>}/>
                <Route  path='/favourites' element={<Fav/>}/>
                <Route path='/login' element={<Login/>}/>
                {/* <Route path='/logout' element={<Logout/>}/> */}
                <Route path='/admin' element={<Admin/>}/>

            
                


                </Route>
                <Route path='/admin' element ={<Admin/>}/>
                {/* <Route element={<ProtectedRouteUser />}>
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/tour-history" element={<TourRequestList />} />
              <Route path="/tours/:tourId" element={<TourRequestDetail />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/change-password" element={<ChangePassword />} />
            </Route> */}
            </Routes>
        )
    }
    export default Router;
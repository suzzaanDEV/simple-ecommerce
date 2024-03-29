import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Order from "./pages/Order.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Header from "./components/Header.jsx";
import Admin from "./pages/Admin.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/Cart'} element={<Cart />}/>
                <Route path={'/Order'} element={<Order />}/>
                <Route path={'/sign-up'} element={<SignUp />}/>
                <Route path={'/sign-in'} element={<SignIn />}/>

                <Route element={<PrivateRoute />}>
                    <Route path={'/profile'} element={<SignIn />}/><Route path={'/admin'} element={<Admin />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import Home from "./Home/Home";
import About from "./About/About";
import Header from "./header-footer/Header";
import Footer from "./header-footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Programs from "./Programs/Programs";
import Trainers from "./Trainers/Trainers";
import Membership from "./Membership/Membership";
import Gallery from "./Gallery/Gallery";
import Contact from "./Contact/Contact";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ForgotPassword from "./auth/ForgotPassword";
import Settings from "./settings/Settings";
import ResetPassword from "./auth/ResetPassword";
import Profile from "./Profile/Profile";
import Payment from "./Membership/Payment";
import MembershipSuccess from "./Membership/MembershipSuccess";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <ScrollToTop />
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/trainers" element={<Trainers />} />
                <Route path="/membership" element={<Membership />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/reset-password/:token" element={<ResetPassword />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/membership-success" element={<MembershipSuccess />}
/>
              
            </Routes>

            <Footer />
        </BrowserRouter>

    </>

);




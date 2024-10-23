import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import DoctorsPage from "components/DoctorsPage.js";
import ForumsPage from "components/ForumsPage.js";
import HealthArticlesPage from "components/HealthArticlesPage.js";
import DoctorProfilePage from "components/DoctorProfilePage.js";
import BookingPage from "components/BookingPage.js";

function App() {
    React.useEffect(() => {
        document.body.classList.add("index-page");
        document.body.classList.add("sidebar-collapse");
        document.documentElement.classList.remove("nav-open");
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
        return function cleanup() {
            document.body.classList.remove("index-page");
            document.body.classList.remove("sidebar-collapse");
        };
    });

    return (
        <>
            <IndexNavbar />
            <Routes>
                <Route path="/index" element={<Index />} />
                <Route path="/nucleo-icons" element={<NucleoIcons />} />
                <Route path="/landing-page" element={<LandingPage />} />
                <Route path="/profile-page" element={<ProfilePage />} />
                <Route path="/login-page" element={<LoginPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/doctor/:id" element={<DoctorProfilePage />} />
                <Route path="/doctor/:id/book" element={<BookingPage />} />
                <Route path="/forums" element={<ForumsPage />} />
                <Route path="/articles" element={<HealthArticlesPage />} />
                <Route path="*" element={<Navigate to="/index" replace />} />
            </Routes>
            <DarkFooter />
        </>
    );
}

export default App;

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";

// pages
import Index from "views/Index.js";
import DoctorsPage from "components/DoctorsPage.js";
import ForumsPage from "components/ForumsPage.js";
import HealthArticlesPage from "components/HealthArticlesPage.js";
import DoctorProfilePage from "components/DoctorProfilePage.js";
import BookingPage from "components/BookingPage.js";
import UserProfilePage from "components/UserProfilePage.js";

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
                <Route path="/" element={<Index />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/doctor/:id" element={<DoctorProfilePage />} />
                <Route path="/doctor/:id/book" element={<BookingPage />} />
                <Route path="/forums" element={<ForumsPage />} />
                <Route path="/articles" element={<HealthArticlesPage />} />
                <Route path="/profile" element={<UserProfilePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <DarkFooter />
        </>
    );
}

export default App;

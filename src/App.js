import React from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";

// components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import PageHeader from "components/PageHeader.js";

// pages
import Index from "views/Index.js";
import DoctorsPage from "components/DoctorsPage.js";
import ForumsPage from "components/ForumsPage.js";
import HealthArticlesPage from "components/HealthArticlesPage.js";
import DoctorProfilePage from "components/DoctorProfilePage.js";
import BookingPage from "components/BookingPage.js";
import UserProfilePage from "components/UserProfilePage.js";
import Article from "components/Article.js";

// images
import homeBackground from "assets/img/home-bg.jpg";
import doctorsBackground from "assets/img/doctors-bg.jpg";
import forumsBackground from "assets/img/forums-bg.jpg";
import articlesBackground from "assets/img/articles-bg.jpg";
import defaultBackground from "assets/img/default-bg.jpg";
import doctorProfileBackground from "assets/img/doctors-bg.jpg";
import userProfileBackground from "assets/img/default-bg.jpg";

function App() {
    const location = useLocation();

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

    const getHeaderContent = () => {
        const path = location.pathname;
        
        if (path === '/') {
            return {
                title: "Welcome to HiDoc",
                subtitle: "Your Health, Our Priority",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                buttonText: "Get Started",
                buttonLink: "/login",
                backgroundImage: homeBackground
            };
        }
        
        if (path === '/doctors') {
            return {
                title: "Our Doctors",
                subtitle: "Expert Care at Your Fingertips",
                backgroundImage: doctorsBackground
            };
        }
        
        if (path.startsWith('/doctor/')) {
            return {
                title: "Doctor Profile",
                subtitle: "Learn More About Our Experts",
                backgroundImage: doctorProfileBackground
            };
        }
        
        if (path === '/forums') {
            return {
                title: "Community Forums",
                subtitle: "Join the Conversation",
                backgroundImage: forumsBackground
            };
        }
        
        if (path === '/articles') {
            return {
                title: "Health Articles",
                subtitle: "Stay Informed, Stay Healthy",
                backgroundImage: articlesBackground
            };
        }
        
        if (path.startsWith('/article/')) {
            // We'll update this in the Article component
            return null;
        }
        
        if (path === '/profile') {
            return {
                title: "User Profile",
                subtitle: "Manage Your Account",
                backgroundImage: userProfileBackground
            };
        }
        
        return {
            title: "HiDoc",
            subtitle: "Your Health Partner",
            backgroundImage: defaultBackground
        };
    };

    const headerContent = getHeaderContent();

    return (
        <>
            <IndexNavbar />
            {headerContent && <PageHeader {...headerContent} />}
            <div className="wrapper">
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/doctors" element={<DoctorsPage />} />
                    <Route path="/doctor/:id" element={<DoctorProfilePage />} />
                    <Route path="/doctor/:id/book" element={<BookingPage />} />
                    <Route path="/forums" element={<ForumsPage />} />
                    <Route path="/articles" element={<HealthArticlesPage />} />
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/profile" element={<UserProfilePage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <DarkFooter />
            </div>
        </>
    );
}

export default App;

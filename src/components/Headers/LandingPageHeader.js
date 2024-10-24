import React from "react";
import { Container } from "reactstrap";

function LandingPageHeader({ title, subtitle, backgroundImage }) {
    let pageHeader = React.createRef();

    React.useEffect(() => {
        if (window.innerWidth > 991) {
            const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                    "translate3d(0," + windowScrollTop + "px,0)";
            };
            window.addEventListener("scroll", updateScroll);
            return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
            };
        }
    });

    return (
        <>
            <div className="page-header page-header-small">
                <div
                    className="page-header-image"
                    style={{
                        backgroundImage: `url(${backgroundImage})`
                    }}
                    ref={pageHeader}
                ></div>
                <div className="content-center">
                    <Container>
                        <h1 className="title">{title}</h1>
                        {subtitle && <div className="text-center">{subtitle}</div>}
                    </Container>
                </div>
            </div>
        </>
    );
}

export default LandingPageHeader;

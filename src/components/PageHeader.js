import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";

function PageHeader({ title, subtitle, text, buttonText, buttonLink, backgroundImage }) {
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
    <div className="page-header clear-filter">
      <div
        className="page-header-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        ref={pageHeader}
      ></div>
      <Container>
        <div className="content-center brand">
          <h1 className="h1-seo">{title}</h1>
          {subtitle && <h3>{subtitle}</h3>}
          {text && <p>{text}</p>}
          {buttonText && buttonLink && (
            <Button
              className="btn-round"
              color="info"
              to={buttonLink}
              tag={Link}
              size="lg"
            >
              {buttonText}
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default PageHeader;

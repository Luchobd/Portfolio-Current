import { useContext } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./styles.css";
import { galleryCertificates } from "../../utils/Images/certificates";
import { PortfolioContext } from "../../context/Context";

export function Certificates() {
  const { portfolioState } = useContext(PortfolioContext);

  const isEnglishLanguage = portfolioState.language === "en";

  const title = isEnglishLanguage
    ? "Degree and Certificates"
    : "Titulo y Certificados";

  return (
    <div className="certificates-container" id="certificates">
      <h2 className="certificates-title">{title}</h2>
      <br />
      <div className="certificates-slider-container">
        <ImageGallery
          items={galleryCertificates}
          showBullets={true}
          showPlayButton={true}
          showFullscreenButton={true}
          showThumbnails={true}
          showNav={false}
          autoPlay={true}
          slideInterval={5000}
          slideDuration={1000}
          thumbnailPosition="bottom"
        />
      </div>
    </div>
  );
}

import { Fragment, useContext } from "react";
import { PortfolioContext } from "../../context/Context";
import { NetworkIconsProps } from "../../interfaces/networking";
import { useNetworkIcons } from "../../utils/Icons/home/useNetworkIcons";
import "./styles.css";

export function Footer() {
  const { portfolioState } = useContext(PortfolioContext);
  const { networkIcons } = useNetworkIcons();

  return (
    <div className="footer-container">
      <section className="footer-social">
        {networkIcons.map((social: NetworkIconsProps) => (
          <Fragment key={social.id}>
            <a
              href={social.href}
              className="footer-network-icon"
              target="_blank"
              title={social.title}
            >
              <i>{social.icon}</i>
            </a>
          </Fragment>
        ))}
      </section>
      <section>
        {portfolioState.language === "en" ? (
          <p className="footer-reserved-text">
            Create by Luis Blanco | All rights reserved
          </p>
        ) : (
          <p className="footer-reserved-text">
            Creado por Luis Blanco | todos los derechos reservados
          </p>
        )}
      </section>
    </div>
  );
}

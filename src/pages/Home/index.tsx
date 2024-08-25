import "boxicons/css/boxicons.min.css";
import "./styles.css";
import { Fragment } from "react";
import { HomeIcons, homeIcons } from "../../utils/Icons/home/home-icons";

export function Home() {
  return (
    <main className="home">
      <section className="home-social-media">
        {homeIcons.map((social: HomeIcons) => (
          <Fragment key={social.id}>
            <a href={social.href} target="_blank" title={social.title}>
              <i className={`${social.icon} home-icon`} />
            </a>
          </Fragment>
        ))}
      </section>
    </main>
  );
}

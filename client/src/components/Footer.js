import GitHubLogo from "../assets/svg/github";
import InstagramLogo from "../assets/svg/instagram";
import LinkdinLogo from "../assets/svg/linkedin";
import CopyRight from "../assets/svg/copyright";

export default function Footer () {
    return (
      <div className="footer-layout row">
        <div className="fs-5 col-lg-6 col-md-6 col-sm-12 footer-section d-flex align-items-center justify-content-center gap-2">
          Copyright <CopyRight /> 2023 Mars Leyva
        </div>
        <div className=" col-lg-6 col-md-6 col-sm-12 social-media-space">
          <a href="https://github.com/marial711">
            <GitHubLogo />
          </a>
          <a href="https://www.linkedin.com/in/maria-leyva-241362181/">
            <LinkdinLogo />
          </a>
          <a href="https://www.instagram.com/marsolaz_/">
            <InstagramLogo />
          </a>
        </div>
      </div>
    );
}
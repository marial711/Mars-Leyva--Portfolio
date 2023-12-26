import {GitHubLogo,IgLogo,LinkdinLogo} from "../assets/svg/logo-icons";
import CopyRight from "../assets/svg/copyright";

export default function Footer () {
    return (
      <div className="footer-layout container-fluid row">
        <div className="fs-5 col-lg-5 col-md-5 col-sm-12 footer-section d-flex align-items-center justify-content-center gap-2">
         <p>Copyright <CopyRight /> 2023 Mars Leyva</p> 
        </div>
        <div className=" col-lg-5 col-md-5 col-sm-12 social-media-space">
          <a href="https://github.com/marial711">
            <GitHubLogo />
          </a>
          <a href="https://www.linkedin.com/in/maria-leyva-241362181/">
            <LinkdinLogo />
          </a>
          <a href="https://www.instagram.com/marsolaz_/">
            <IgLogo />
          </a>
        </div>
      </div>
    );
}
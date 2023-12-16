import { HtmlLogo, CssLogo, JsLogo, ReactjsLogo,
     SassLogo, IllustratorLogo, LightroomLogo, 
     PhotoshopLogo, BootstrapLogo} from "../assets/svg/logo-icons";

export default function MobileSkillSection() {
    return (
        <ul className="icons">
            <li>
                <HtmlLogo />
            </li>
            <li>
                <CssLogo />
            </li>
            <li>
                <SassLogo />
            </li>
            <li>
                <JsLogo />
            </li>
            <li>
                <ReactjsLogo />
            </li>
            <li>
                <BootstrapLogo />
            </li>
            <li>
                <IllustratorLogo />
            </li>
            <li>
                <LightroomLogo />
            </li>
            <li>
                <PhotoshopLogo />
            </li>
        </ul>
    );
}
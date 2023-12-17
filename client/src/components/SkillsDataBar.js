import {
    HtmlLogo, CssLogo, JsLogo, ReactjsLogo,
    SassLogo, IllustratorLogo, LightroomLogo, BootstrapLogo
} from "../assets/svg/logo-icons";

function countPercent(percent, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        percent.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function SkillsBar({ children, ...props }) {
    return (
        <div className="d-flex justify-content-around gap-2 align-items-center icons">  
            {props.skill}
            <div className="skillbar-layout">
                <div className="bar"></div>
                <div className="bar-percent" style={{ width: props.skillPercent +'%'}}></div>                    
            </div>
            <p>
                <span id='percent' className='icon-percent'> 
                    {props.skillPercent}
                </span> %
            </p>
            
        </div>
            
    )
}

window.onload = () => {
    let percent = document.querySelectorAll(`#percent`);
    for(let i = 0; i < percent.length; i++) {
        countPercent(percent[i], 0, percent[i].innerHTML, 2000);
    }
};

export default function SkillsDataBar() {
    return (
        <div className="skills-bar row justify-content-around flex-wrap m-3">
            <div className="col d-flex flex-wrap justify-content-around align-items-center">
                <SkillsBar skill={ <HtmlLogo /> } skillPercent="98" />
                <SkillsBar skill={<JsLogo />} skillPercent="95" />
                <SkillsBar skill={<CssLogo />} skillPercent="98" />
                <SkillsBar skill={<SassLogo />} skillPercent="95" />
                <SkillsBar skill={<ReactjsLogo />} skillPercent="90" />
                <SkillsBar skill={<BootstrapLogo />} skillPercent="90" />
                <SkillsBar skill={<IllustratorLogo />} skillPercent="98" />
                <SkillsBar skill={<LightroomLogo />} skillPercent="98" />
            </div>
        </div>
    )
}
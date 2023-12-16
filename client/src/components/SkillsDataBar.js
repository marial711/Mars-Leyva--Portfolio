function SkillsBar({ children, ...props }) {
    return (
        <div className="d-flex justify-content-center align-items-center">  
            <p className="m-0"> {props.skill}</p>
            <div className="skillbar-layout">
                <div className="bar"></div>
                <div className="bar-percent" style={{ width: props.skillPercent +'%'}}></div>
            </div>
        </div>
            
    )
}

export default function SkillsDataBar() {
    return (
        <div className="skills-bar row justify-content-around flex-wrap m-3">
            <div className="col">
                <SkillsBar skill="HTML" skillPercent="95" />
                <SkillsBar skill="Javascript" skillPercent="97" />
                <SkillsBar skill="ReactJS" skillPercent="90" />
                <SkillsBar skill="CSS" skillPercent="90" />
                <SkillsBar skill="Sass" skillPercent="90" />
            </div>
            <div className="col">
                <SkillsBar skill="Adobe Illustrator" skillPercent="97" />
                <SkillsBar skill="Adobe Lightroom" skillPercent="97" />
                <SkillsBar skill="Adobe Photoshop" skillPercent="90" />
                <SkillsBar skill="Bootstrap" skillPercent="90" />
                <SkillsBar skill="Tailwindcss" skillPercent="90" />
            </div>
        </div>
    )
}
export default function SkillsBar({ children, ...props }) {
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
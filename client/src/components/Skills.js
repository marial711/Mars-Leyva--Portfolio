export default function SkillsCard({children, ...props}){
    return (
        <>
            <div className="card"> 
                <div className="card-content">   
                    <div className="card-front"> 
                        <h1>
                            {props.title}
                        </h1>
                    </div>
                    <div className="card-back">
                        <div>
                        { children }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
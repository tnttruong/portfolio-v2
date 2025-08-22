import { skills } from "../data/skills";

const Skills = () => {
    return (
        <div className="">
            <h1 className="">Skills</h1>

            {Array.from(skills.entries()).map(([key, item], index) => {
                return (
                    <div key={index} className="">
                        <a href={item}>{key}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Skills;
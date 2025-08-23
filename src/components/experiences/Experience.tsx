import ExperienceItem from "./ExperienceItem";
import { experience } from "../../data/experience";

const Experience = () => {
    return (
        <div className="">
            {Array.from(experience.entries()).map(([key, item]) => {
                return (
                    <ExperienceItem
                        key={key}
                        title={item.title}
                        date={item.date}
                        summary={item.summary}
                    />
            )})}
        </div>
    )
}

export default Experience;
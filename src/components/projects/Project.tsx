import { projects } from "../../data/projects";
import ProjectItem from "./ProjectItem";

export default function Project() {
    return (
        <div className="">
            {Array.from(projects.entries()).map(([key, item]) => (
                <ProjectItem
                    key={key}
                    img_url={item.img_url}
                    title={item.title}
                    stack={item.stack}
                    link={item.link}
                />
            ))}
        </div>
    )
}
import type { ProjectItemProps } from "../../props/interface";  

const ProjectItem = (props: ProjectItemProps) => {
    const {title, img_url, stack, link} = props;

    return (
        <a href={link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
        >
            <img src={img_url}
            alt="project link"
            className=""
            />

            <div className="">
                <h3 className="">
                    {title}
                </h3>

                <p className="">
                    {stack.map((item, index) => (
                        <span key={index} className="">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default ProjectItem;
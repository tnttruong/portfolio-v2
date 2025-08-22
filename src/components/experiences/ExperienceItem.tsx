import type { ExperienceProps } from "../../props/interface";

const ExperienceItem = (props: ExperienceProps) => {
    const {title, date, summary} = props;

    return (
        <div className="">
            <div className="">
                <p className="">{title}</p>
                <p className="">{date}</p>
                <p className="">{summary}</p>
            </div>
        </div>
    )
}

export default ExperienceItem;
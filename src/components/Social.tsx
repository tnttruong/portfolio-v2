import { socials } from "../data/social";

const Social = () => {
    return (
        <div className="">
            {Array.from(socials.entries()).map(([key, item], index) => {
                return (
                    <div key={index} className="">
                        <a href={item}>{key}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default Social;
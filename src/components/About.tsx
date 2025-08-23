import Experience from "./experiences/Experience";
import Skills from "./Skills";

export default function About() {
    return (
        <div className="">
            <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet turpis ac risus porta congue. Etiam sagittis nisi orci, eget viverra augue iaculis vel. Praesent sapien ante, bibendum ac ornare ut, laoreet suscipit neque. Sed auctor tellus a molestie accumsan. In suscipit, odio eu maximus tincidunt, massa nisi accumsan diam, ac varius orci nisl a sapien. Aliquam et enim orci. In sed lorem sed nunc eleifend commodo ut nec arcu.
            </p>

            <Experience />
            <Skills />
        </div>
    )
}
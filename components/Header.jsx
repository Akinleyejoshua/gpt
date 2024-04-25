import { AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { Space } from "./Space";

export const Header = () => {
    return <header>
        <nav className="row space-between">
            <div className="nav-brand">
                <a href="/">ULTRA GPT</a>
            </div>
            <div className="navlinks row">
                <a className="fill" target="blank" href="https://twitter.com/Joshuaakinleye4"><AiOutlineTwitter /></a>
                <a className="fill" target="blank" href="https://www.linkedin.com/in/joshua-akinleye-9895b61ab/"><AiOutlineLinkedin /></a>
            </div>
        </nav>


    </header>
}
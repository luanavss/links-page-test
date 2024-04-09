import {Props} from "./interface";
import "./styles.css";

const Button = (props:Props) => {
    return (
        <div className="linkButtons">
                <button><a href={props.link}></a>{props.button}</button>
        </div>
    );
}

export default Button;
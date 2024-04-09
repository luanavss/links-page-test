import {Props} from "./interface";
import "./styles.css";

const Logo = (props:Props) => {
    return (
        <div className="logoHeader">
                <img src={props.image} />
                <p>Sampalho <br></br>Temperos e Produtos Naturais</p>
        </div>
    );
}

export default Logo;


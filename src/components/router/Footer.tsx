import { Link } from "react-router-dom";
import StyledFooter from "./Footer.style";

function Footer() {
    return (
        <StyledFooter>
            <div className="container">
                <Link to={"/"}>HOME</Link>
                <Link to={"/contact"}>Contact</Link>
                <Link to={"/profile"}>Profile</Link>
                <Link to={"/venues"}>Venues</Link>
            </div>
        </StyledFooter>
    )
}

export default Footer;
import StyledHomeContact from "./HomeContact.style";
import HomeContactImage from "../../images/holidayz-home-contact-section.jpg"

function HomeContact() {
    return (
        <StyledHomeContact>
            <h2>have a question?</h2>
            <div className="container">
                <div className="imageContainer">
                    <img src= {HomeContactImage} alt="" />
                </div>
                <div>
                    <p>contact us today at: 123 45 678</p>
                    <p>email: info@abc.com</p>
                    <p>visit us: somewhere 19 oslo</p>
                </div>

            </div>

        </StyledHomeContact>
    )

};



export default HomeContact;
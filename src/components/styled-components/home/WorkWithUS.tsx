import StyledWorkWithUS from "./WorkWithUS.style";
import saving from "../../images/savings.png";
import savings2 from "../../images/savings2.png";
import savings3 from "../../images/savings3.png";
import savings4 from "../../images/savings4.png";


function WorkWithUs() {

    return (
        <StyledWorkWithUS>
        <h2>why work with us ?</h2>
        <div className="container">

            <div className="innerContainer">
                <div className="text">
                    <h4>save money</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur earum </p>
                </div>
                <div className="image">
                <img src={saving} alt="" />
                </div>
            </div>


            <div className="innerContainer">
                 <div className="text">
                     <h4>we know better</h4>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur earum </p>
                 </div>
                 <div className="image">
                 <img src={savings2} alt="" />
                 </div>
            </div>



            <div className="innerContainer">
                <div className="text">
                    <h4>24H support</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur earum </p>
                </div>
                <div className="image">
                <img src={savings3} alt="" />
                </div>
            </div>



            <div className="innerContainer">
                <div className="text">
                    <h4>green ways</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit consequuntur earum </p>
                </div>
                <div className="image">
                <img src={savings4} alt="" />
                </div>
            </div>


        </div>
        </StyledWorkWithUS>
    );
};



export default WorkWithUs;
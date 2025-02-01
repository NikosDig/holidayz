import StyledContactMain from "./ContactMain.style";


function ContactMain() {
        return (
            <StyledContactMain>
                <h1>Holidayz tours & travels</h1>
            <p className="infoParagraph">We would love to hear from our clients. Your travel dreams are out priority. Feel free to reach out, and let's make your next adventure extraordinary together.</p>
            <div className="container">

                <div className="bgwhite">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="36" viewBox="0 0 27 36">
                <g id="geo-alt" transform="translate(-4.5)">
                <path id="Path_2" data-name="Path 2" d="M18,36S31.5,23.207,31.5,13.5a13.5,13.5,0,0,0-27,0C4.5,23.207,18,36,18,36Zm0-15.75a6.75,6.75,0,1,0-6.75-6.75A6.75,6.75,0,0,0,18,20.25Z" fillRule="evenodd"/>
                </g>
                </svg>
                <h5>visit us</h5>
                <p>somewhere 19 oslo</p>
                </div>


                <div className="bgwhite">
                <svg xmlns="http://www.w3.org/2000/svg" width="29.261" height="29.25" viewBox="0 0 29.261 29.25">
                <path id="phone" d="M29.25,32.625h-.191C6.952,31.354,3.814,12.7,3.375,7.009A3.375,3.375,0,0,1,6.48,3.375h6.2a2.25,2.25,0,0,1,2.093,1.417L16.481,9a2.25,2.25,0,0,1-.495,2.43l-2.4,2.419a10.541,10.541,0,0,0,8.527,8.55l2.441-2.419A2.25,2.25,0,0,1,27,19.519l4.241,1.7a2.25,2.25,0,0,1,1.385,2.092v5.94a3.375,3.375,0,0,1-3.375,3.375Zm-22.5-27A1.125,1.125,0,0,0,5.625,6.75v.09c.518,6.66,3.836,22.41,23.558,23.535a1.125,1.125,0,0,0,1.193-1.057V23.31l-4.241-1.7-3.229,3.206-.54-.068c-9.787-1.226-11.115-11.014-11.115-11.115l-.068-.54,3.195-3.229L12.69,5.625Z" transform="translate(-3.364 -3.375)"/>
                </svg>
                <h5>call us</h5>
                <p>012 34 567</p>
                </div>


                <div className="bgwhite">
                <svg xmlns="http://www.w3.org/2000/svg" width="31.5" height="22.5" viewBox="0 0 31.5 22.5">
                <path id="email" d="M31.5,6.75H4.5A2.25,2.25,0,0,0,2.25,9V27A2.25,2.25,0,0,0,4.5,29.25h27A2.25,2.25,0,0,0,33.75,27V9A2.25,2.25,0,0,0,31.5,6.75ZM29.025,9,18,16.627,6.975,9ZM4.5,27V10.024l12.859,8.9a1.125,1.125,0,0,0,1.282,0l12.859-8.9V27Z" transform="translate(-2.25 -6.75)"/>
                </svg>
                <h5>email us</h5>
                <p>info@abc.com</p>
                </div>

            </div>
            </StyledContactMain>
        )
};


export default ContactMain;
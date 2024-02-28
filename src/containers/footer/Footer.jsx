import gpt3Logo from '../../logo.svg';
import './footer.css';


const Footer = () => {
    const today = new Date();
    const Year = today.getFullYear();
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading" data-aos="fade-up">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gpt3__footer-btn" data-aos="fade-up">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links" data-aos="fade-up">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="gpt3_logo" />
                    <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions </p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>Crechterwoord K12 182 DK Alknjkcb</p>
                    <p>085-132567</p>
                    <p>info@payme.net</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>@{Year} GPT-3. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
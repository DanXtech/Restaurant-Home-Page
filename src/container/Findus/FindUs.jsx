import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
    <div className="app__bg app__wrapper section__padding" id="contact">
        <div className="app__wrapper_info">
            <SubHeading title="Contact" />
            <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }} data-aos="fade-up">Find Us</h1>
            <div className="app__wrapper-content">
                <p className="p__opensans" data-aos="fade-up">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G</p>
                <p className="p__cormorant" data-aos="fade-up" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
                <p className="p__opensans" data-aos="fade-up">Mon - Fri: 10:00 am - 02:00 am</p>
                <p className="p__opensans" data-aos="fade-up">Sat - Sun: 10:00 am - 03:00 am</p>
            </div>
            <button type="button" className="custom__button" style={{ marginTop: '2rem' }} data-aos="fade-up">Visit Us</button>
        </div>

        <div className="app__wrapper_img" data-aos="zoom-in">
            <img src={images.findus} alt="finus_img" />
        </div>
    </div>
);

export default FindUs;

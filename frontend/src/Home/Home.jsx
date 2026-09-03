import CTA from "./CTA";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Membership from "./Membership";
import Programs from "./Programs";
import Stats from "./Stats";
import Testimonials from "./Testimonials";
import Trainers from "./Trainers";
import WhyChooseUs from "./WhyChooseUs";
import Header from "../header-footer/Header";

const Home = () => {
    return (
        <><Header/>
            <Hero/>
            <WhyChooseUs/>
            <Programs/>
            <Stats/>
            <Trainers/>
            <Membership/>
            <Gallery/>
            <Testimonials/>
            <CTA/>
            
        </>
    );
}

export default Home;
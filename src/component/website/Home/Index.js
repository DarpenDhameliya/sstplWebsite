import React from 'react';
import Drawer from '../Mobile/Drawer';
import Header from '../../common/Header';
import useToggle from '../../common/Hooks/useToggle';
import Home from './Home'
import Discription from './Discription'
import WhyChoseUs from './WhyChoseUs';
import Services from './Services';
import OurWorkService from './OurWorkService';
import Technology from './Technology';
import Industry from './Industry';
import Portfoliyo from './Portfoliyo';
import Testimonial from './Testimonial';
import BackToTop from '../../common/BackToTop';
import Footer from '../../common/Footer';
import Hireus from '../../common/Hireus';

const Sstpl = () => {
    const [drawer, drawerAction] = useToggle(false);
    const [cart, cartAction] = useToggle(false);
    return (
        <>
            <Drawer drawer={drawer} action={drawerAction.toggle} cartToggle={cartAction.toggle} />
            <Header action={drawerAction.toggle} cartToggle={cartAction.toggle} />
            <Hireus value={cart} action={cartAction.toggle} />
            <Home />
            <Discription />
            <WhyChoseUs />
             <Services />
            <OurWorkService />
            <Technology />
            <Industry />
            <Portfoliyo />
            <Testimonial />
            <Footer />
             <BackToTop />
        </>
    );
};

export default Sstpl;

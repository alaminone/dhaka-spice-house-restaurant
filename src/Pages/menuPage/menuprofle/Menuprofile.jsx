import { Helmet } from "react-helmet-async";

import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import Cover from "../../shareditem/cover/Cover";
import TodayOffer from "../offer/TodayOffer";
import Desserts from "../dessert/Desserts";
import Pizza from "../pizza/Pizza";
import Salads from "../salads/Salads";
import Soups from "../soups/Soups";


const Menu = () => {
    return (
    <section>
        <Helmet>
            <title>
                Dhaka Spice | Menu
            </title>
        </Helmet>
        <Cover
      img={'https://i.ibb.co/b5mBPmK/banner3.jpg'}
      title={'OUR MENU'}
      content={'Would you like to try a dish?'}
        ></Cover>
        <SectionTitle
        subheading={"Don't miss"}
        mainheading={"TODAY'S OFFER"}
        ></SectionTitle>
        <TodayOffer></TodayOffer>
        <Desserts></Desserts>
        <Pizza></Pizza>
        <Salads></Salads>
        <Soups></Soups>
   
    </section>
    );
};

export default Menu;
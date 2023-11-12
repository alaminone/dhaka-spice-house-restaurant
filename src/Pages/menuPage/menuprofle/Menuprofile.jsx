import { Helmet } from "react-helmet-async";

import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import Cover from "../../shareditem/cover/Cover";
import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import Menucategory from "../menucategory/Menucategory";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";


const Menuprofile = () => {

    const [menu] = useMenuhuk();
    const offered = menu.filter((item) => item.category === "offered");
    const salads = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");
    const desserts = menu.filter((item) => item.category === "dessert");
    const drinks = menu.filter((item) => item.category === "drinks");

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
       
       <div className="grid md:grid-cols-2 gap-6 mt-8">
            {
                offered.map(menuitem => <PopularmenuCard 
                    key={menuitem._id}
                    menuitem={menuitem}
                    ></PopularmenuCard>)
            }
      </div>
       <Menucategory item={salads} img={'https://i.ibb.co/SPJ0R78/salad-bg.jpg'} title={'salad'} content={'Discover the freshest and most exquisite salads at Dhaka Spice House Restaurant. Our culinary artisans meticulously curate vibrant salads bursting with flavor and nutrients. Elevate your dining experience with our crisp, refreshing greens. Visit Dhaka Spice House for a salad sensation that transcends the ordinary, and savor the epitome of culinary excellence.'} >

       </Menucategory>

       <Menucategory item={pizza} img={'https://i.ibb.co/56gGM1D/pizza-bg.jpg'} title={'pizza'} content={"Satisfy your pizza cravings at Dhaka Spice House Restaurant, home to the finest slices in town. Immerse your taste buds in a symphony of flavors, with handcrafted crusts and premium toppings. Experience pizza perfection, only at Dhaka Spice House, where every bite is a celebration of taste and tradition."}>

       </Menucategory>
       <Menucategory item={desserts} img={'https://i.ibb.co/WBDhz5S/dessert-bg.jpg'} title={'dessert'} content={"Indulge in unparalleled sweetness at Dhaka Spice House Restaurant, where our desserts reign supreme. Immerse yourself in a symphony of flavors, crafted with passion and precision. From decadent cakes to exotic treats, our dessert menu promises a sublime finale to your culinary journey. Savor the best at Dhaka Spice House."}>

       </Menucategory>
       <Menucategory item={soups} img={'https://i.ibb.co/BCXbb51/soup-bg.jpg'} title={'soup'} content={"Embark on a flavorful journey with Dhaka Spice House Restaurant's exceptional soups. Crafted with passion and precision, our soups are a symphony of aromatic spices and wholesome ingredients. Indulge in the best soups in town, exclusively at Dhaka Spice House—a haven for culinary enthusiasts seeking a taste of perfection"}></Menucategory>
       <Menucategory item={drinks} img={'https://i.ibb.co/BCXbb51/soup-bg.jpg'} title={'drinks'} content={"Embark on a flavorful journey with Dhaka Spice House Restaurant's exceptional soups. Crafted with passion and precision, our soups are a symphony of aromatic spices and wholesome ingredients. Indulge in the best soups in town, exclusively at Dhaka Spice House—a haven for culinary enthusiasts seeking a taste of perfection"}></Menucategory>
        
    </section>
    );
};

export default Menuprofile;
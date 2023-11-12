import { Link } from "react-router-dom";
import useMenuhuk from "../../../huks/menuhuk/usemenuhuk";
import Cover from "../../shareditem/cover/Cover";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";


const Desserts = () => {

    const [menu] = useMenuhuk();

    const desserts = menu.filter((item) => item.category === "dessert");

    return (
        <div>
                    <Cover
      img={'https://i.ibb.co/WBDhz5S/dessert-bg.jpg'}
      title={'DESSERTS'}
      content={'Indulge in unparalleled sweetness at Dhaka Spice House Restaurant, where our desserts reign supreme. Immerse yourself in a symphony of flavors, crafted with passion and precision. From decadent cakes to exotic treats, our dessert menu promises a sublime finale to your culinary journey. Savor the best at Dhaka Spice House.'}
        ></Cover>

<div>
     
     <div className="grid md:grid-cols-2 gap-6 my-16">
       {desserts.map((menuitem) => (
         <PopularmenuCard
           key={menuitem._id}
           menuitem={menuitem}
         ></PopularmenuCard>
       ))}
     </div>
     <div className="flex justify-center mb-6">
        <Link to={`/order/${desserts}`}>
        <button className="btn btn-outline border-l-0  border-t-0 border-r-0 border-b-4">
       ORDER YOUR FAVOURITE FOOD </button>
        </Link>
     </div>
   </div>
        </div>
    );
};

export default Desserts;
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../shareditem/cover/Cover";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";


const Menucategory = ({item,img, title, content}) => {
    return (
        <div className="pt-8 my-20">
            {<Cover img={img} title={title} content={content}></Cover>}
            <div className="grid md:grid-cols-2 gap-6 mt-20">
            {
                item.map(menuitem => <PopularmenuCard 
                    key={menuitem._id}
                    menuitem={menuitem}
                    ></PopularmenuCard>)
            }
        </div>
        <div className="flex justify-center">
    <Link to={`/order/${title}`}>
    <button className="btn btn-outline border-l-0  border-t-0 border-r-0 border-b-4 mt-4">ORDER YOUR FAVOURITE FOOD</button>
    </Link>
        </div>
        </div>
    );
};

export default Menucategory;
/* eslint-disable react/prop-types */
import Foodcard from "../foodcard/Foodcard";


const Ordertab = ({menuitem}) => {
    return (
        <div className="grid md:grid-cols-3 gap-6 mt-8">
        {
            menuitem.map(item => <Foodcard 
            key={item._id}
            item={item}
            ></Foodcard>)
        }
    </div>
    );
};

export default Ordertab;
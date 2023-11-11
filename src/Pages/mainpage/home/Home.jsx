import Bannar from "../bannar/Bannar";
import Callus from "../callus/Callus";
import Category from "../category/Category";
import Chefservice from "../chefservice/Chefservice";
import Featured from "../featured/Featured";
import Popularmenu from "../popularmenu/Popularmenu";
import Testimonials from "../testimonials/Testimonials";


const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Category></Category>
           <Chefservice></Chefservice>
           <Popularmenu></Popularmenu>
           <Callus></Callus>
           <Featured></Featured>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
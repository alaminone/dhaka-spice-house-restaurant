import Bannar from "../bannar/Bannar";
import Category from "../category/Category";
import Chefservice from "../chefservice/Chefservice";
import Popularmenu from "../popularmenu/Popularmenu";


const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Category></Category>
           <Chefservice></Chefservice>
           <Popularmenu></Popularmenu>
        </div>
    );
};

export default Home;
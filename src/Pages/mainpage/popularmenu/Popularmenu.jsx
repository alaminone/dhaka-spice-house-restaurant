import { useEffect, useState } from "react";
import SectionTitle from "../../../components/sectiontitle/SectionTitle";
import PopularmenuCard from "../../shareditem/popular/PopularmenuCard";

const Popularmenu = () => {


    const [menu , setmenu] = useState([])

    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const filtermenu = (data.filter(item => item.category === 'popular') )
            setmenu(filtermenu)
        })
    },[])

    return (
     <section className="my-16">
        <SectionTitle
        subheading={'Check it out'}
        mainheading={'FROM OUR MENU'}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
            {
                menu.map(menuitem => <PopularmenuCard 
                    key={menuitem._id}
                    menuitem={menuitem}
                    ></PopularmenuCard>)
            }
        </div>
     </section>
    );
};

export default Popularmenu;
import { useState } from "react";
import Cover from "../shareditem/cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenuhuk from "../../huks/menuhuk/usemenuhuk";

import Ordertab from "../../components/ordertab/Ordertab";
import { useParams } from "react-router-dom";

const OrderPage = () => {
  const categorys = ['salad', 'pizza','soup','dessert' ,'drinks']
  const {category} = useParams();
  const initialIndex = categorys.indexOf(category);
    const [menu] = useMenuhuk();
    const [tabIndex, setTabIndex] = useState(initialIndex);
    

    const salads = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const soups = menu.filter((item) => item.category === "soup");
    const desserts = menu.filter((item) => item.category === "dessert");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
      <section >
        <Cover
        img={'https://i.ibb.co/P9MFPb8/banner2.jpg'}
        title={'order now'}
        content={'Would you like to try a dish?'}
        ></Cover>

        <div className="my-20"> 
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>pizza</Tab>
        <Tab>soups</Tab>
        <Tab>desserts</Tab>
        <Tab>drinks</Tab>
      </TabList>
      <TabPanel>
        <Ordertab
        menuitem={salads}
        ></Ordertab>
    
      </TabPanel>
      <TabPanel>
      <Ordertab
        menuitem={pizza}
        ></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab
        menuitem={soups}
        ></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab
        menuitem={desserts}
        ></Ordertab>
      </TabPanel>
      <TabPanel>
      <Ordertab
        menuitem={drinks}
        ></Ordertab>
      </TabPanel>
    </Tabs>
        </div>
      </section>
    );
};

export default OrderPage;
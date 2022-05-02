import React, { useEffect, useState } from "react";
import Card from "./Card";
import { getMenuItems } from "./firebase";
import { getImageURL } from "./firebase";
const Home = () => {
  const [menuItems, setMenuItems] = useState([]);

  const getAllMenuItems = async () => {
    const data = await getMenuItems();
    console.log(data);
    setMenuItems(data);
  };

  useEffect(() => {
     
    getAllMenuItems();
  }, []);

  return (
    <>
        <div className="container">
          <div className="row">
            {menuItems.map((item) => {
              return (
                <div key={item.id} className="col-md-3 col-sm-6 card-box">
                  <Card
                    
                    image={item.image}
                    name={item.name}
                    price={item.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      
    </>
  );
};

export default Home;

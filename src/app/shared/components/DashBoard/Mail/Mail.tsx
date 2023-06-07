import React, { useState } from "react";
import "./Mail.css";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from 'primereact/button';
import Primary from "../Primary";
import Socials from "../Socials";
import Promotions from "../Promotions";

const Mail = () => {

  const [activeTab, setActiveTab] = useState(0);


  const handleTabChange = (e) => {
    setActiveTab(e.index)
  }

  return (
    <div className="mail">
      <div className="card">
        <div className="pt-2 pb-4">
        

        <TabView
          activeIndex={activeTab}
          onTabChange={(e) => handleTabChange(e)}
          
        >
          <TabPanel header="Primary">
            <p>
              <Primary/>
            </p>
          </TabPanel>
          <TabPanel header="Socials">
            <p>
             <Socials/>
            </p>
          </TabPanel>
          <TabPanel header="Promotions">
            <p>
              <Promotions/>
            </p>
          </TabPanel>
        </TabView>
      </div>
    </div>
    </div>
  );
};

export default Mail;

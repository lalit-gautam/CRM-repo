import React, { useState } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import Primary from "./Tabs/Primary";
import Promotions from "./Tabs/Promotions";
import Social from "./Tabs/Social";

const Mail = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (e) => {
    setActiveTab(e.index);
  };

  return (
    <div className="grid">
      <div className="col-12">
        <div className="mail">
          <div className="card">
            <div className="pt-2 pb-4">
              <TabView
                activeIndex={activeTab}
                onTabChange={(e) => handleTabChange(e)}
              >
                <TabPanel header="Primary">
                  <div className="grid">
                    <div className="col-12">
                      <p>
                        <Primary />
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Socials">
                  <div className="grid">
                    <div className="col-12">
                      <p>
                        <Primary />
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel header="Promotions">
                  <div className="grid">
                    <div className="col-12">
                      <p>
                        <Primary />
                      </p>
                    </div>
                  </div>
                </TabPanel>
              </TabView>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;

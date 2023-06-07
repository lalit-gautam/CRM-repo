"use client";
import { Inter } from 'next/font/google'
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';
import { useState } from 'react';
import Header from './shared/components/Header';
import AppSideBar from './shared/components/SideBar/AppSideBar';
import NewTable from './shared/components/NewTable';
import DynamicTable from './shared/components/NewTable';
import FormikDataTable from './shared/components/FormikTable/CRMDataTable';
import DynamicTableForms from './shared/components/FormikTable/CRMDataTableMultipleDropdown';
import TestForm from './shared/components/test/testFile';
import GmailDashBoard from './shared/components/DashBoard/GmailDashBoard';
import GmailApp from './shared/components/GmailDashboard/GmailApp';



const inter = Inter({ subsets: ['latin'] })

export default function Home(){

  const [menuOpen, setMenuOpen] = useState<boolean>(true);

    return (
      <div className={menuOpen ? "layout-wrapper layout-static p-ripple-disabled" : "layout-wrapper layout-static layout-static-inactive p-ripple-disabled"}>
        <Header setMenu={setMenuOpen} />
        <AppSideBar />
        <div className='layout-main-container'>
          <div className='layout-main'>
            <div className=''>
              
              <GmailApp/>
              {/* <GmailDashBoard/> */}
                {/* <DynamicTable/>   */}
                {/* <FormikDataTable/> */}
                {/* <DynamicTableForms/> */}
                {/* <TestForm/> */}
                
            </div>
          </div>
        </div>
      </div>
    )
}
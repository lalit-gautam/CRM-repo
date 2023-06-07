"use client";
import React from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { PrimeIcons } from "primereact/api";
import SideBarOption from "./SideBarOption";


const MailSidebar = () => {
  return (
    <div className='sidebar'>
        
        <Button label="COMPOSE" icon="pi pi-plus" className="p-button-raised p-button-secondary p-button-text" />
        <SideBarOption Icon={""} title='Inbox' number={54} />
   
    </div>
  )
}

export default MailSidebar
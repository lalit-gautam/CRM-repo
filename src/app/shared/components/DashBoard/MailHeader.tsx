"use client";
import React from "react";
import "primeicons/primeicons.css";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { PrimeIcons } from "primereact/api";

export default function MailHeader() {
  return (
    <div className="header">
      <div className="header_left">
     
      

        <button
          type="button"
          className="p-link layout-menu-button layout-topbar-button"
        >
        </button>
      </div>

      <div className="haader_middle">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText placeholder="Search" className="input_search_box" />
          <i className="pi  pi-sliders-h" style={{marginLeft : "10px"}}/>
        </span>
      </div>

      <div className="header-right">

      <i className="pi pi-question"/>
        <i className="pi pi-cog"></i>
        <i className="pi pi-bars" />

      </div>
        

    </div>
  );
}

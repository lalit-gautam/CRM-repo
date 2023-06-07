"use client";
import React from "react";
import "primeicons/primeicons.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function Header() {
  return (
    <div className="grid">
      <div className="col-3">
        <Button
          label="COMPOSE"
          icon="pi pi-plus"
          style={{ width: "200px" }}
          className="p-button-raised p-button-secondary p-button-text"
        />
      </div>

      <div className="col-6">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            placeholder="Search"
            style={{ width: "30rem" }}
            className="input_search_box"
          />
        </span>
      </div>

      <div
        className="col-3"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          placeItems: "center",
        }}
      >
        <i className="pi pi-question col-4" />
        <i className="pi pi-cog col-4"></i>
        <i className="pi pi-bars col-4" />
      </div>
    </div>
  );
}

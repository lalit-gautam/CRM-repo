"use client";
import React from 'react'
import Link from 'next/link';

const Submenu = ({ subMenuItems }) => {
    return (
        <ul>
            {
                subMenuItems.map((submenu) => {
                    return (
                        <li className="" key={submenu.label}>
                            <Link href={submenu.to} className='p-ripple'>
                                <i className={`layout-menuitem-icon pi pi-fw ${submenu.icon}`}></i>
                                <span className="layout-menuitem-text">{submenu.label}</span>
                                {/* <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i> */}
                                <span role="presentation" className="p-ink" style={{ "height": "0px", "width": "0px" }}></span>
                            </Link>
                        </li>
                    );
                })
            }
        </ul>
    )
}

export default Submenu
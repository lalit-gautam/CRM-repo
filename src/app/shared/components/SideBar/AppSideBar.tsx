"use client";
import React from 'react'
import Submenu from './Submenu';
import { table } from 'console';

const AppSideBar = () => {

    const model = [
        {
            label: "Add Table",
            items: [{ label: 'Create Table', icon: 'pi pi-fw pi-home', to: '/' }]
        },
        {
            label: "List Of Tables",
            items: []
            // items: [
            //     { label: 'Employee',  icon: 'pi pi-fw pi-table', to: 'addTableItems/employeeTable' },
            //     { label: 'Company',  icon: 'pi pi-fw pi-table', to: 'addTableItems/companyTable' },
            //     { label: 'College',  icon: 'pi pi-fw pi-table', to: 'addTableItems/collegeTable' }]
        },
        {
            label: "about",
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-info-circle', to: '/AboutUs' }]
        },
        {
            label: "about2.0",
            items: [
                { label: 'Dashboard', 
                icon: 'pi pi-fw pi-info-circle', 
                to: '/AboutUs',
                items: [{ label: 'Dashboard1.0', icon: 'pi pi-fw pi-info-circle', to: '/AboutUs' }]
             }
            ]
        }
    ]


 
    // const getStoredData = () => {
    //     const tabledata = JSON.parse(localStorage.getItem('myTableData'))??[];
    //     console.log("table data : " , tabledata);
    //     return tabledata.map((data) => {
    //         return {label : data.name, icon : 'pi pi-fw pi-table' , to:`addTableItems/${data.tableName}`}
    //     })
    // }

    
    // model[1].items.push(...getStoredData());

    return (
        <div className='layout-sidebar'>
            {
                model.map((item) => {
                    return (
                        <div key={item.label}>
                            <ul className="layout-menu">
                                <li className='layout-root-menuitem active-menuitem'>
                                    <div className="layout-menuitem-root-text">{item.label}</div>

                                    <Submenu subMenuItems={item.items} />

                                </li>
                            </ul>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AppSideBar
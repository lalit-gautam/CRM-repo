import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { SlideMenu } from "primereact/slidemenu";
import {faInbox,faStar,faBell,faExclamation,faClipboard,faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { Button } from "primereact/button";
import { ListBox } from 'primereact/listbox';

export default function SideBarOptions() {
  const items = [
    {
      label: "Inbox",
      icon: <FontAwesomeIcon icon={faInbox} style={{ color: "#c47d3b" , marginRight : "20px"}}/>,
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Starred",
      icon: <FontAwesomeIcon icon={faStar} style={{ color: "#c47d3b" , marginRight : "17px"}} />,
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Snoozed",
      icon: <FontAwesomeIcon icon={faBell} style={{color: "#51511f", marginRight : "20px"}} />,
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Important",
      icon: <FontAwesomeIcon icon={faExclamation} style={{color: "#51511f", marginRight : "20px"}} />,
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Sent",
      icon: "pi pi-send",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Drafts",
      icon: <FontAwesomeIcon icon={faClipboard} style={{color: "#3b511f", marginRight : "20px"}} />,
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      separator: true,
    },
    {
      label: "More",
      icon: <FontAwesomeIcon icon={faArrowDown} style={{color: "#46511f", marginRight : "20px"}} />,
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archive",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
  ];

  const barTemplate = () =>{
    return <>
      <div style={{display:"grid" , placeItems:"center"}}>
        
      </div>
    </>
  }


  return (
    <div className="" style={{}}>
      {/* <SlideMenu model={items} viewportHeight={435} menuWidth={180}></SlideMenu> */}
      <ListBox  value={items} itemTemplate={barTemplate}  />
    </div>
  );
}

//   return (
//     <div className="sidevar__options">
//       <div className="sidebarOption sidebarOption__active">
//         <Button
//           icon={<FontAwesomeIcon icon={faInbox} />}
//           label="Inbox"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon={<FontAwesomeIcon icon={faStar} style={{color: "#c47d3b",}} />}
//           label="Starred"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon={<FontAwesomeIcon icon={faBell} style={{color: "#51511f",}} />}
//           label="Snoozed"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon={<FontAwesomeIcon icon={faExclamation} style={{color: "#51511f",}} />}
//           label="Important"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon="pi pi-send"
//           label="Sent"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon={<FontAwesomeIcon icon={faClipboard} style={{color: "#3b511f",}} />}
//           label="Drafts"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//       <div className="sidebarOption">
//         <Button
//           icon={<FontAwesomeIcon icon={faArrowDown} style={{color: "#46511f",}} />}
//           label="More"
//           style={{width: "130px"}}
//           className="p-button-raised p-button-secondary p-button-text"
//         />
//       </div>

//     </div>
//   );
// }

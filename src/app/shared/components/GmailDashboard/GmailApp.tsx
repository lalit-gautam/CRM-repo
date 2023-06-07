import Header from "./Fragments/Header";
import Mail from "./Fragments/PageBody";
import SideBarOptions from "./Fragments/SideBarOptions";
import Primary from "./Fragments/Tabs/Primary";

export default function GmailApp() {
  return (
    <div className="card">
      <div className="grid">
        <div className="col-12">
          <Header />
        </div>
      </div>
      <div className="grid">
        <div className="col-3">
          <SideBarOptions />
        </div>
        <div className="col-9" style={{ height: "60vh", overflowY: "scroll" }}>
          <Mail />
        </div>
      </div>
    </div>
  );
}

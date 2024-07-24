import { Outlet } from "react-router-dom";

import "../../../src/App.css";
import Side from "../AdShared/Side";

export default function AdMain() {
  return (
    <>
      <Side />
      <main className="cards9">
        <Outlet  />
      </main>
      
    </>
  );
}

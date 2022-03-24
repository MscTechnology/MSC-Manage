import Drawer from "../../../components/Drawer/Drawer";
import { Routes, Route, Link } from "react-router-dom";
import Deneme1 from "./Deneme1";
import Deneme2 from "./Deneme2";
import Personeller from "./Personeller";

const Admin = () => {
  return (
    <div>
      <Drawer/>
      <div style={{
        paddingLeft: "15%",
      }}>
      <Routes >
      <Route path="personeller" element={<Personeller/>} />
        <Route path="deneme1" element={<Deneme1 />} />
        <Route path="deneme2" element={<Deneme2 />} />
      </Routes>
      </div>
     
    </div>
  );
};

export default Admin;

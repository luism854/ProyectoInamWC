import { Routes, Route } from "react-router-dom";
import { Home,Admin } from "../index";
export function MyRoutes() {
  return ( 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    
      
  );
}

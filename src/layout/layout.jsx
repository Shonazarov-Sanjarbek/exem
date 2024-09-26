import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import SupHeader from '../components/SupHeader/SupHeader.jsx'
import Footer from "../components/footer/footer";

const Layout = () => {
  return (
    <>
      <SupHeader />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer services={["Gift Card", "Mobile App", "Shipping & Delivery", "Account Signup"]} help={["ShopCart Help", "Track Orders", "Feedback", "Contact Us", "Security & Fraud"]} about={["News & Blog", "Help", "Press Center"]}  bottom={["Privacy & Policy", "Terms of Service", "All rights reserved by GameGeek | 2023"]}/>
    </>
  );
};

export default Layout;

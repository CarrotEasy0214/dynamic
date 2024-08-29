// import "./App.css";
import Menu from "./Components/Menu";
import Notice from "./Components/Notice";
import MySlide from "./Components/MySlide";
import ProductPage from "./Components/ProductPage";
import Card from "./Components/Card";
// import CompanyGuide from "./Components/CompanyGuide";
import Collabo from "./Components/Collabo";
import MandD from "./Components/MandD";
import ShippingDetail from "./Components/ShippingDetail";
import SupportCenter from "./Components/SupportCenter";
import BlackContainer from "./Components/BlackContainer";

// import Test from "./Components/Test";

function App() {
  return (
    <div>
      {/* <Test></Test> */}
      <Notice></Notice>
      <Menu></Menu>
      <MySlide></MySlide>
      <ProductPage></ProductPage>
      <Card></Card>
      {/* <CompanyGuide></CompanyGuide> */}
      <Collabo></Collabo>
      <MandD></MandD>
      <ShippingDetail></ShippingDetail>
      <SupportCenter></SupportCenter>
      <BlackContainer></BlackContainer>
    </div>
  );
}

export default App;

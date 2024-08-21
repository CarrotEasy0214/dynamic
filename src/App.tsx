// import "./App.css";
import BlackContainer from "./Components/BlackContainer";
import Card from "./Components/Card";
import Collabo from "./Components/Collabo";
import CompanyGuide from "./Components/CompanyGuide";
// import Test from "./Components/example/Test";
import MandD from "./Components/MandD";
import Menu from "./Components/Menu";
import Notice from "./Components/Notice";
import ProductPage from "./Components/ProductPage";
import ShippingDetail from "./Components/ShippingDetail";
import Slide from "./Components/Slide";
import Slide2 from "./Components/Slide2";
import SupportCenter from "./Components/SupportCenter";

function App() {
  return (
    <div>
      {/* <Test></Test> */}
      {/* <Slide2></Slide2> */}
      <Notice></Notice>
      <Menu></Menu>
      <Slide></Slide>
      <ProductPage></ProductPage>
      <Card></Card>
      <CompanyGuide></CompanyGuide>
      <Collabo></Collabo>
      <MandD></MandD>
      <ShippingDetail></ShippingDetail>
      <SupportCenter></SupportCenter>
      <BlackContainer></BlackContainer>
    </div>
  );
}

export default App;

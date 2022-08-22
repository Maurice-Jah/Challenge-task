import "./index.css";
import Profile from "./Components/Profile";
import PaymentPort from "./Components/PaymentPort";
import Payment from "./Components/Payment";
import Purchased from "./Components/Purchased";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Profile />} />
        <Route path={"/paymentPort"} element={<PaymentPort />} />
        <Route path={"/payment"} element={<Payment />} />
        <Route path={"/purchased"} element={<Purchased />} />
      </Routes>
    </div>
  );
};

export default App;

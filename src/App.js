import "bootstrap/dist/css/bootstrap.min.css";
import './Ewill.css'
import EwillHeader from "./component/EwillHeader";
import EwillFormArea from "./component/EwillFormArea";
import EwillGiftArea from "./component/EwillGiftArea";
import EwillLotteryInfo from "./component/EwillLotteryInfo";
import EwillShop from "./component/EwillShop";
function App() {
return (
  <>
    <div className="container-fluid">
      <EwillHeader />
      <EwillFormArea />
      <EwillGiftArea/>
      <EwillLotteryInfo/>
      <EwillShop/>
    </div>
  </>
);
}

export default App;

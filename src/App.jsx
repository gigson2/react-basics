import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import IconStyle from "./components/IconStyle";
import List from "./components/List";
import MainContent from "./components/MainContent";
import Password from "./components/Password";
import ProductInfo from "./components/ProductInfo";
import Props from "./components/Props";
import StateComp from "./components/StateComp";
import StyledCard from "./components/StyledCard";
import UserList from "./components/UserList";
import UserLoginStatus from "./components/UserLoginStatus";
import WeatherCondition from "./components/WeatherCondition";
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Greeting />
      <ProductInfo />
      <List />
      <UserList />
      <Props />
      <Password isValid={true} />
      <Footer />
      <Cart />
      <WeatherCondition />
      <UserLoginStatus isLoggedIn={true} isAdmin={true} />
      <Greet timeOfDay="evening" />
      <StyledCard />
      <IconStyle />
      <StateComp />
    </div>
  );
}
export default App;
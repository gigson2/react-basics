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
import Profilee from "./components/Profilee";
import Props from "./components/Props";
import { ShoppingList } from "./components/ShoppingList";
import StateComp from "./components/StateComp";
import StyledCard from "./components/StyledCard";
import ToDoList from "./components/ToDoList";
import UserList from "./components/UserList";
import UserLoginStatus from "./components/UserLoginStatus";
import WeatherCondition from "./components/WeatherCondition";
import CopyInput from './components/CopyInput';
import UseeEffect from "./components/UseeEffect";
import FetchDatabyUseEffect from "./components/FetchDatabyUseEffect";
import NUserProfile from "./components/NUserProfile";
import { UserContextProvider } from "./components/UserContext";
import UpdateUser from "./components/UpdateUser";
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
      <ToDoList />
      <Profilee />
      <ShoppingList />
      <CopyInput />
      <UseeEffect />
      <FetchDatabyUseEffect />
      <UserContextProvider>
        <NUserProfile />
        <UpdateUser />
      </UserContextProvider>

    </div>
  );
}
export default App;
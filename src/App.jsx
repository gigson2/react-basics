import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import List from "./components/List";
import MainContent from "./components/MainContent";
import Password from "./components/Password";
import ProductInfo from "./components/ProductInfo";
import Props from "./components/Props";
import UserList from "./components/UserList";
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
    </div>
  );
}
export default App;
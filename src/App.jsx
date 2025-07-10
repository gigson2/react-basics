import Add from "./components/Add";
import Footer from "./components/Footer";
import Greet from "./components/Greet";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import List from "./components/List";
import MainContent from "./components/MainContent";
import ProductInfo from "./components/ProductInfo";
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
      <Footer />
    </div>
  );
}
export default App;
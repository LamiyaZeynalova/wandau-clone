import Footer from "./components/Footer";
import Header from "./components/Header";
import WandauRouter from "./router/WandauRouter";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <WandauRouter />
      <Footer />
    </Provider>
  );
};

export default App;

import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes";
import EDBox from "./shared/EDBox";
import ResponsiveNavbar from "./presentation/pages/Navbar";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AllRoutes />
      </Router>
    </Provider>
  );
}

export default App;

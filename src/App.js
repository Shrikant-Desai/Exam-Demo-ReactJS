import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { HashRouter as Router } from "react-router-dom";
import AllRoutes from "./routes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AllRoutes />
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;

import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./routes";
import EDStack from "./shared/EDStack";
import EDBox from "./shared/EDBox";
function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Navbar /> */}

        <EDStack direction="row">
          <EDBox sx={{ m: 5 }}>
            <AllRoutes />
          </EDBox>
        </EDStack>
      </Router>
    </Provider>
  );
}

export default App;

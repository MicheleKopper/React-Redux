import { CssBaseline } from "@mui/material";
import { AppRoutes } from "./config/routes/AppRoutes";
import { Provider } from "react-redux";
import { store } from "./store";
import { GlobalStyle } from "./config/global/GlobalStyles";

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <GlobalStyle/>
      <AppRoutes />
    </Provider>
  );
}

export default App;

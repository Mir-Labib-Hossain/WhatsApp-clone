import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import RoutesComponent from "./components/RoutesComponent";
import { persistor, store } from "./redux/app/store";
import GlobalStyle from "./styles/global.styled";

const theme = {
  theme: "#FFBF23",
  primaryBg: "white",
  secondaryBg: "#fFF6F1",
  primaryText: "#000000",
  secondaryText: "#777770",
  pink: "#FFD7EF",
  red: "#f67c6a",
  blue: "#91BFE8",
  green: "#4ae1b2",
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RoutesComponent />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;

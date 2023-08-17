import { ThemeProvider } from "react-bootstrap";
import AppRouter from "routes/app-router";

function App() {
  return (
    <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { FooterS, Menu } from "./components";
import { MensagemProvider } from "./context";

function App() {
    return (
        <MensagemProvider>
            <BrowserRouter>
                <Menu />
                <AppRoutes />
                <FooterS />
            </BrowserRouter>
        </MensagemProvider>
    );
}

export default App;

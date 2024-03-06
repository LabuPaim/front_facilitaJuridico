import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import Cadastrar from "../pages/Cadastrar";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
    );
};

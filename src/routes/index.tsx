import { Routes, Route } from "react-router-dom";
import { Home } from "../pages";
import { Rota } from "../pages/Rota";
import Cadastrar from "../pages/Cadastrar";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rota" element={<Rota />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
    );
};

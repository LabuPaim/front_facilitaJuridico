import { Routes, Route } from "react-router-dom";
import { Cadastrar, Home } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar" element={<Cadastrar />} />
        </Routes>
    );
};

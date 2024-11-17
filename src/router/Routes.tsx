import { Route, Routes } from "react-router"
import { Login } from '../pages/Login/Login';
import { FuncAlmoxLayout } from '../layout/FuncAlmoxLayout/FuncAlmoxLayout';
import { AdminLayout } from '../layout/AdminLayout/AdminLayout';
import { SolicitarEPI } from "../pages/Funcionario/SolicitarEPI/SolicitarEPI";
import { DashboardAlmox } from "../pages/Almoxarifado/DashboardAlmox/DashboardAlmox";
import { DashboardAdmin } from "../pages/Administrador/DashboardAdmin/DashboardAdmin";
import { DashboardEPI } from "../pages/Administrador/DashboardEPI/DashboardEPI";
import { DashboardColab } from "../pages/Administrador/DashboardColab/DashboardColab";
import { CadastroColaborador } from "../pages/Administrador/CadastroColaborador/CadastroColaborador";
import { CadastroEPI } from "../pages/Administrador/CadastroEPI/CadastroEPI";
import { Usuarios } from "../pages/Usuarios/Usuarios";

export const Router = () => {
    return(
        <Routes>
            <Route index path="/" element={<Usuarios/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/funcionario" element={<FuncAlmoxLayout />}>
                <Route path="solicitarEPI" element={<SolicitarEPI />} />
            </Route>
            <Route path="/almoxarifado" element={<FuncAlmoxLayout />} >
                <Route path="dashboardAlmox" element={<DashboardAlmox />} />
            </Route>
            <Route path="/administrador" element={<AdminLayout />} >
                <Route path="dashboardAdmin" element={<DashboardAdmin />} />
                <Route path="dashboardEPI" element={<DashboardEPI />} />
                <Route path="dashboardFuncionario" element={<DashboardColab />} />
                <Route path="cadastroColab" element={<CadastroColaborador />} />
                <Route path="cadastroEPI" element={<CadastroEPI />} />
            </Route>
        </Routes>
    )
}
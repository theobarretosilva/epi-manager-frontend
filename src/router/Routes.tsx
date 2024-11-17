import { Route, Routes } from "react-router"
import { Login } from '../pages/Login/Login';
import { AdminLayout } from '../layout/AdminLayout/AdminLayout';
import { SolicitarEPI } from "../pages/Funcionario/SolicitarEPI/SolicitarEPI";
import { DashboardAlmox } from "../pages/Almoxarifado/DashboardAlmox/DashboardAlmox";
import { DashboardEPI } from "../pages/Administrador/DashboardEPI/DashboardEPI";
import { DashboardColab } from "../pages/Administrador/DashboardColab/DashboardColab";
import { CadastroColaborador } from "../pages/Administrador/CadastroColaborador/CadastroColaborador";
import { CadastroEPI } from "../pages/Administrador/CadastroEPI/CadastroEPI";
import { FuncLayout } from "../layout/FuncLayout/FuncLayout";
import { AlmoxLayout } from "../layout/AlmoxLayout/AlmoxLayout";
import { Solicitacoes } from "../pages/Administrador/Solicitacoes/Solicitacoes";
import { ConsultColab } from "../pages/Almoxarifado/ConsultColab/ConsultColab";
import { ConsultEPI } from "../pages/Almoxarifado/ConsultEPI/ConsultEPI";
import { Usuarios } from "../pages/Usuarios/Usuarios";
import { SolicitacoesFunc } from "../pages/Funcionario/SolicitacoesFunc/SolicitacoesFunc";

export const Router = () => {
    return(
        <Routes>
            <Route index path="/" element={<Usuarios/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/funcionario" element={<FuncLayout />}>
                <Route path="solicitacoes" element={<SolicitacoesFunc />} />
                <Route path="solicitarEPI" element={<SolicitarEPI />} />
            </Route>
            <Route path="/almoxarifado" element={<AlmoxLayout />} >
                <Route path="dashboardAlmox" element={<DashboardAlmox />} />
                <Route path="consultColab" element={<ConsultColab />} />
                <Route path="consultEPI" element={<ConsultEPI />} />
            </Route>
            <Route path="/administrador" element={<AdminLayout />} >
                <Route path="solicitacoes" element={<Solicitacoes />} />
                <Route path="dashboardEPI" element={<DashboardEPI />} />
                <Route path="dashboardFuncionario" element={<DashboardColab />} />
                <Route path="cadastroColab" element={<CadastroColaborador />} />
                <Route path="cadastroEPI" element={<CadastroEPI />} />
            </Route>
        </Routes>
    )
}
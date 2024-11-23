import { Outlet } from "react-router";
import { Headerbar } from "../../components/Headerbar/Headerbar";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import * as S from './FuncLayout.styles' 

export function FuncLayout() {
    const linksFuncLayout = [
        {title: 'Solicitações', href: '/funcionario/solicitacoes', image: '../../src/assets/img/document.png'},
        {title: 'Solicitar EPI', href: '/funcionario/solicitarEPI', image: '../../src/assets/img/setting.png'}
    ];

    return(
        <>
            <Headerbar />
            <S.DivRow>
                <Sidebar links={linksFuncLayout} />
                <Outlet />
            </S.DivRow>
        </>
    )
}
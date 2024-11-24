import { SidebarProps } from "./Sidebar.styles"
import * as S from "./Sidebar.styles"

export const Sidebar: React.FC<SidebarProps> = ({links, onClick}) => {
    return (
        <S.SidebarWrapper>
            <S.SidebarContent>
                <S.SidebarTitle>Atividades</S.SidebarTitle>
                <S.SidebarHr/>
                <ul>
                {links.map((elements, index)=> (
                        <S.LinkSidebarWrapper key={index} onClick={onClick}>
                            <S.LinkSidebarContent href={elements.href}>
                            <S.ImageContent>
                                    <S.Image src={elements.image} />
                            </S.ImageContent>
                            <S.TextLink>{elements.title}</S.TextLink>
                            </S.LinkSidebarContent>
                            
                        </S.LinkSidebarWrapper>
                ))}
                </ul>
            <S.Logout>Encerrar Sessão</S.Logout> 
            </S.SidebarContent>
        </S.SidebarWrapper>
    )
}
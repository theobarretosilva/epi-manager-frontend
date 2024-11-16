import { Outlet } from "react-router";
import { Headerbar } from "../../components/Headerbar/Headerbar";

export function FuncAlmoxLayout() {
    return(
        <>
            <Headerbar />
            <Outlet />
        </>
    )
}
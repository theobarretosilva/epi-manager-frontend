import { Outlet } from "react-router";
import { Headerbar } from "../../components/Headerbar/Headerbar";

export function FuncLayout() {
    return(
        <>
            <Headerbar />
            <Outlet />
        </>
    )
}
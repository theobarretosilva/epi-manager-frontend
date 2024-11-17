import { Outlet } from "react-router";
import { Headerbar } from "../../components/Headerbar/Headerbar";

export const AlmoxLayout = () => {
    return(
        <>
            <Headerbar />
            <Outlet />
        </>
    )
}
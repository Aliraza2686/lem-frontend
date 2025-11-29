
import logo from "../../../public/logo.png"
import { cn } from "../../lib/utills"
export const Logo = ({className}) => {
    return (
        <>
            <img src={logo} alt="logo" className={cn("w-16 h-16", className)} />
        </>
    )
}
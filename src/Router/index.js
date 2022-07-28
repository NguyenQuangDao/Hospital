import Acouting from "../Modules/Acounting/Acounting"
import Reception from "../Modules/Reception/Reception"
import Xray from "../Modules/X-Ray/Xray"
import Home from "../Modules/Home/Home"
const publicRoutes = [
    {path: "/", component: Home},
    {path: "/Acounting", component: Acouting},
    {path: "/Recrption", component: Reception},
    {path: "/Xray", component: Xray}
]

export default publicRoutes
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../provider/ThemeProvider";
import Header from "./Header";

const HeaderContainer = () => {
    const navigate = useNavigate()
    const { theme, toggleTheme } = useTheme();

    return (
        <Header theme={theme} onNavigate={(href: string) => navigate(href)} toggleTheme={toggleTheme} />
    )
}

export default HeaderContainer
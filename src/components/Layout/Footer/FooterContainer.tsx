import { useTheme } from "../../../provider/ThemeProvider"
import Footer from "./Footer"

const FooterContainer = () => {
    const { theme } = useTheme()

    return (
        <Footer theme={theme} />
    )
}

export default FooterContainer
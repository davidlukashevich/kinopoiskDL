import { useTheme } from "../../provider/ThemeProvider"
import Layout from "./Layout"

type Props = {
    children: React.ReactNode
}

const LayoutContainer = ({ children }: Props) => {
    const { theme } = useTheme()

    return (
        <Layout theme={theme}>
            {children}
        </Layout>
    )
}

export default LayoutContainer
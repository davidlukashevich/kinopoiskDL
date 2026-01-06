import type { Theme } from "../../provider/ThemeProvider"
import Container from "../ui/Container/Container"
import FooterContainer from "./Footer/FooterContainer"
import HeaderContainer from "./Header/HeaderContainer"

type Props = {
    children: React.ReactNode
    theme: Theme
}

const Layout = ({ children, theme }: Props) => {
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderContainer />
            <main className={`flex-1 ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                <Container>
                    {children}
                </Container>
            </main>
            <FooterContainer />
        </div>
    )
}

export default Layout
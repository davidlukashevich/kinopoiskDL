import type { Theme } from "../../types/TTheme"
import Container from "../ui/Container/Container"
import FooterContainer from "./Footer/FooterContainer"
import HeaderContainer from "./Header/HeaderContainer"

type Props = {
    children: React.ReactNode
    theme: Theme
}

const Layout = ({ children, theme }: Props) => {
    const isLight = theme === 'light'
    return (
        <div className="min-h-screen flex flex-col">
            <HeaderContainer />
            <main className={`flex-1 ${isLight ? 'bg-white text-black' : 'bg-gray-700 text-white'}`}>
                <Container>
                    {children}
                </Container>
            </main>
            <FooterContainer />
        </div>
    )
}

export default Layout
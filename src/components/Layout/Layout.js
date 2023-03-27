import Footer from './Footer';
import { Main, MainContent } from './Layout.styled';
import Navbar from './Navbar';

const Layout = (props) => {
    const { children } = props;
    return (
        <Main>
            <Navbar />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </Main>
    )
}

export default Layout
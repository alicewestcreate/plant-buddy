import Footer from './Footer';
import { Main, MainContent } from './AboutLayout.styled';
import Navbar from './Navbar';

const AboutLayout = (props) => {
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

export default AboutLayout;
import Navbar from './Navbar';
import Footer from './Footer';
import { Main, MainContent } from './QuizLayout.styled';

const QuizLayout = (props) => {
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

export default QuizLayout
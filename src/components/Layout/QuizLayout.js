import QuizNavbar from './QuizNavbar';
import Footer from './Footer';
import { Main, MainContent } from './QuizLayout.styled';

const QuizLayout = (props) => {
    const { children } = props;
    return (
        <Main>
            <QuizNavbar />
            <MainContent>
                {children}
            </MainContent>
            <Footer />
        </Main>
    )
}

export default QuizLayout
import { Main, MainContent } from './Layout.styled';

const Layout = (props) => {
    const { children } = props;
    return (
        <Main>
            <MainContent>
                {children}
            </MainContent>
        </Main>
    )
}

export default Layout
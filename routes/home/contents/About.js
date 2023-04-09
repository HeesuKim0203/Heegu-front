import { 

    Wrap,
    Container,
    Header,
    Title,
    Contents,
    AuthorImage,
    Footer,
    AuthorTextArea,
    Greeting,
    Introductory,
    UrlTextArea,
    UrlText,

} from 'styles/homeStyle/aboutStyle'

function About({ 
    aboutTitle,
    aboutGreeting,
    aboutIntroductory,
    aboutUrlImformation,
 }) {
    return (
        <Wrap>
            <Container>
                <Header>
                    <Title>{ aboutTitle }</Title>
                </Header>
                <Contents>
                    <AuthorImage />
                </Contents>
                <Footer>
                    <AuthorTextArea>
                        <Greeting>{ aboutGreeting }</Greeting>
                        <Introductory>{ aboutIntroductory }</Introductory>
                        <UrlTextArea>
                            { aboutUrlImformation.map((value, index) => {
                                return(
                                    <UrlText 
                                        key = { index }
                                    >
                                    { value }</UrlText>
                                )
                            }) }
                        </UrlTextArea>
                    </AuthorTextArea>
                </Footer>
            </Container>
        </Wrap>
    );
}

export default About ;
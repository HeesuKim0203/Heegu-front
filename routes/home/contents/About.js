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
    UrlLink

} from 'styles/homeStyle/aboutStyle'
import { LazyImage } from '../../../util/commHook'

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
                    <LazyImage 
                        width = "1194"
                        height = "425"
                        alt = "Author Image"
                        src = "/author_picture_1701962643499.png"
                        Component = { AuthorImage }
                    />
                </Contents>
                <Footer>
                    <AuthorTextArea>
                        <Greeting>{ aboutGreeting }</Greeting>
                        <Introductory>{ aboutIntroductory }</Introductory>
                        <UrlTextArea>
                            { aboutUrlImformation.map((value, index) => {
                                return( 
                                <> 
                                    { index === 0 ? (
                                            <UrlText 
                                                key = { index }
                                            >
                                            { `${value.icon} ${value.text}` }</UrlText>
                                        ) : (
                                            <UrlLink 
                                                key = { index }
                                                href = { value.text }
                                                passHref = { true }
                                            >
                                                    { `${value.icon} ${value.text}` }
                                             
                                            </UrlLink>
                                        )
                                    }
                                </>
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
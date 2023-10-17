import { 
    
    TitleContainer,
    Title

} from 'styles/commonStyle'

function TitleConponent({ title }) {
    return (
        <TitleContainer>
            <Title>
                { title }
            </Title>
        </TitleContainer>
    );
}

export default TitleConponent;
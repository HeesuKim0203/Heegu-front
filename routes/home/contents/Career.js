
import TitleComponent from 'components/TitleComponent'
import { 
    
    Wrap,
    Container,
    ItemsArea,
    Items,
    ItemsImage,
    TextArea,
    ItemsTitle,
    ItemsDescription,

} from 'styles/homeStyle/careerStyle'

function CareerContents({ 
    careerTitle, 
    careers
}) {
    return (
        <Wrap>
            <Container>
                <TitleComponent title = { careerTitle } />
                <ItemsArea>
                    { careers.map((value, index) => {
                        return (
                            <Items 
                                key = { index }
                            >
                                <ItemsImage 
                                    url = { value.image }
                                />
                                <TextArea>
                                    <ItemsTitle>
                                        { value.title }
                                    </ItemsTitle>
                                    <ItemsDescription>
                                        { value.description }
                                    </ItemsDescription>
                                </TextArea>
                            </Items>
                        ) ;
                    }) }
                </ItemsArea>
            </Container>
        </Wrap>
    );
}

export default CareerContents ;
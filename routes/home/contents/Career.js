
import TitleComponent from 'components/TitleComponent'
import { useRef } from 'react';
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
import { LazyImage } from '../../../util/commHook'

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
                                <LazyImage 
                                    width = "582"
                                    height = "300"
                                    alt = "Career Image"
                                    src = { value.image }
                                    Component = { ItemsImage }
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
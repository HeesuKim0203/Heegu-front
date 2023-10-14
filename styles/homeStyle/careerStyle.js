import styled from 'styled-components'

import {

    ContentsContainer,
    Contents,
    ItemContainer,
    UrlImage,

} from 'styles/commonStyle'

const Wrap = styled(ContentsContainer)`
    margin-top : 15px ;
`;

const Container = styled(Contents)`

`;

const ItemsArea = styled(ItemContainer)`
    display : flex ;
    flex-direction : row ;
`;

const Items = styled.div`
    width : 582px ;

    &:not(:last-child) {
        margin-right : 30px  ;
    }
`;

const ItemsImage = styled(UrlImage)`
    width : 582px ;
    height : 300px ;
`;

const TextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const ItemsTitle = styled.h3`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 21px ;
    font-weight : bold ;
`;

const ItemsDescription = styled.p`
    margin-top : 20px ;

    color : #555555 ;

    line-height : 170% ;

    white-space : pre-wrap ;
`;

export {

    Wrap,
    Container,
    ItemsArea,
    Items,
    ItemsImage,
    TextArea,
    ItemsTitle,
    ItemsDescription,

}
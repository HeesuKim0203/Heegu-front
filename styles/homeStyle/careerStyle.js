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

    @media ${props => props.theme.mobileL} {
        width : 45vw ;
        box-sizing : border-box ;
    }
`;

const ItemsImage = styled(UrlImage)`
    width : 582px ;
    height : 300px ;

    @media ${props => props.theme.mobileL} {
        width : 45vw ;
        height : 100px ;
        box-sizing : border-box ;
    }
`;

const TextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const ItemsTitle = styled.h3`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 21px ;
    font-weight : bold ;

    @media ${props => props.theme.mobileL} {
        margin-top : 15px ;
        font-size : 13px ;
    }
`;

const ItemsDescription = styled.p`
    margin-top : 20px ;

    color : #555555 ;

    line-height : 170% ;

    white-space : pre-wrap ;

    @media ${props => props.theme.mobileL} {
        margin-top : 5px ;
        font-size : 10px ;
    }
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
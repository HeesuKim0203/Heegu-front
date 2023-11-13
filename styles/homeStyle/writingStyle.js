import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

import slidePrevImage from 'public/slide_prev.svg'
import slideNextImage from 'public/slide_next.svg'

import {

    ContentsContainer,
    Contents,
    ItemContainer,
    UrlImage,
    TextEllipsis,

} from 'styles/commonStyle'

// Writing Style

const Wrap = styled(ContentsContainer)`
`;

const Container = styled(Contents)`

`;

const ItemArea = styled(ItemContainer)`
    position : relative ;
`;

const Item = styled.div`
    width : 378px ;

    cursor : pointer ;

    @media ${props => props.theme.mobileL} {
        box-sizing: border-box ;
        width : 30vw ;
    }
`;

const ItemImage = styled(UrlImage)`
    height: 240px ;

    @media ${props => props.theme.mobileL} {
        box-sizing: border-box ;
        height: 80px ;
    }
`;

const ItemTextArea = styled.div`

`;

const ItemTitle = styled.h3`
    height : 40px ;
    margin-top : 35px ;

    font-size : 20px ;
    font-weight : bold ;

    text-overflow : ellipsis ;
    line-height : 175% ;

    @media ${props => props.theme.mobileL} {
        height : 20px ;
        margin-top : 5px ;

        font-size : 12px ;
        line-height : 120% ;
    }
`;

const ItemDescription = styled(TextEllipsis)`
    height : 80px ;
    margin-top : 20px ;

    font-size : 15px ;
    color : #555555 ;
    
    line-height : 170% ;

    @media ${props => props.theme.mobileL} {
        margin-top : 30px ;

        font-size : 10px ;
        height: 30px ;
        line-height : 140% ;
    }
`;

const ItemDate = styled.p`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    color : #999999 ;

    @media ${props => props.theme.mobileL} {
        margin-top : 15px ;

        font-size : 8px ;
    }
`;

const MoreButtonArea = styled.div`
    display : flex ;

    width : 100% ;
`;

const MoreButton = styled(Link)`
    display : block ;

    width : 160px ;
    height : 55px ;

    margin : 60px auto 0 auto ;

    border : 1px solid #0AA79B ;
    border-radius : 10px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    font-weight : bold ;

    text-align : center ;
    line-height : 55px ;

    color : #0AA79B !important;

    background-color : #FAFAFA ;

    cursor : pointer ;

    &:hover {

        color : #ffffff !important;
        background-color : #0AA79B ;

        transition : all 0.2s ;
    
    }

    @media ${props => props.theme.mobileL} {
        width : 100px ;
        height : 35px ;
        font-size : 12px ;
        line-height : 35px ;
    }

`;

const SlidePrev = styled(Image).attrs(props => ({
    src : slidePrevImage,
    id : "slide_prev",
    alt : "Slide prev icon",
}))`
    position : absolute ;

    top : 98px ;
    left : -60px ;

    z-index : 10 ;

    cursor : pointer ;
`;

const SlideNext = styled(Image).attrs(props => ({
    src : slideNextImage,
    id : "slide_next",
    alt : "Slide next icon"
}))`
    position : absolute ;

    top : 98px ;
    right : -60px ;

    z-index : 10 ;

    cursor : pointer ;
`;

const ItemLink = styled(Link)`
    display : block ;
`;

//

export {

    Wrap,
    Container,
    ItemArea,
    Item,
    ItemImage,
    ItemTextArea,
    ItemTitle,
    ItemDescription,
    ItemDate,
    MoreButtonArea,
    MoreButton,
    SlidePrev,
    SlideNext,

    ItemLink

}
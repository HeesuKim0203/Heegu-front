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
    margin-top : 45px ;
    @media ${props => props.theme.mobileL} {
        margin-top : 35px ;
    }
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
        width : 100% ;
        box-sizing: border-box ;
    }
`;

const ItemImage = styled(UrlImage)`
    height: 240px ;

    @media ${props => props.theme.mobileL} {
        height : 200px ;
        box-sizing: border-box ;
    }
`;

const ItemTextArea = styled.div`

`;

const ItemTitle = styled.h3`
    height : 40px ;
    margin-top : 35px ;

    font-size : 20px ;
    font-weight : 700 ;

    text-overflow : ellipsis ;
    line-height : 175% ;

    @media ${props => props.theme.mobileL} {
        height : auto ;
        margin-top : 15px ;
        font-size : 20px ;
        line-height : none ;
    }
`;

const ItemDescription = styled(TextEllipsis)`
    height : 80px ;
    margin-top : 20px ;

    font-size : 15px ;
    color : #555555 ;
    
    line-height : 170% ;

    @media ${props => props.theme.mobileL} {
        margin-top : 10px ;

        font-size : 14px ;
        height: auto ;
        line-height : 170% ;
    }
`;

const ItemDate = styled.p`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    color : #999999 ;

    @media ${props => props.theme.mobileL} {
        margin-top : 15px ;

        font-size : 12px ;
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
        margin : 20px auto 0 auto ;
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

    @media ${props => props.theme.mobileL} {
        display : none ;
    }
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

    @media ${props => props.theme.mobileL} {
        display : none ;
    }
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
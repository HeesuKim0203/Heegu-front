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
`;

const ItemImage = styled(UrlImage)`
    height: 230px ;
`;

const ItemTextArea = styled.div`

`;

const ItemTitle = styled.h3`
    height : 65px ;
    margin-top : 35px ;

    font-size : 20px ;
    font-weight : bold ;

    text-overflow : ellipsis ;
    line-height : 175% ;
`;

const ItemDescription = styled(TextEllipsis)`
    height : 80px ;
    margin-top : 20px ;

    font-size : 15px ;
    color : #555555 ;
    
    line-height : 170% ;
`;

const ItemDate = styled.p`
    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    color : #999999 ;
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

    color : #0AA79B ;

    background-color : #FAFAFA ;

    cursor : pointer ;

    &:hover {

        color : #ffffff ;
        background-color : #0AA79B ;

        transition : all 0.2s ;
    
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
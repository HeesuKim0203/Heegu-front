import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

import authorPicture from 'public/author_picture.png'
import { animation } from 'styles/commonStyle'

// About Style

const Wrap = styled.div`

`;

const Container = styled.div`
    display : flex ;
    flex-direction : column ;
`;

const Header = styled.div`
    width : 828px ;

    ${animation}

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        box-sizing: border-box;
    }
`;

const Title = styled.h2`
    font-family : 'Poppins', sans-serif ;
    font-size : 50px ;
    font-weight : bold ;

    user-select : none ;
    line-height : 150% ;

    @media ${props => props.theme.mobileL} {
        font-size : 22px ;
    }
`;

const Contents = styled.div`
    margin-top : 50px ;

    ${animation}

    @media ${props => props.theme.mobileL} {
        margin-top : 25px ;
    }
`;

const AuthorImage = styled(Image).attrs(props => ({
    src : authorPicture,
    alt : "Picture of the author",
    priority : true
}))`
    border-radius : 10px ;

    @media ${props => props.theme.mobileL} {
        //position : relative ;

        width : 100% ;
        height : 140px ;

        display: none ;
    }
`;

const Footer = styled.div`
    display : flex ;
    justify-content : end ;

    margin-top  : 10px ;
    ${animation}

    @media ${props => props.theme.mobileL} {
        justify-content : start ;
        box-sizing: border-box;
    }
`;

const AuthorTextArea = styled.div`
    display : flex ;
    flex-direction : column ;
`;

const Greeting = styled.p`
    font-family : 'Poppins', sans-serif ;
    font-size : 17px ;
    font-weight : bold ;
    
    text-align : right ;

    padding : 10px 0 0 0 ;

    user-select : none ;

    @media ${props => props.theme.mobileL} {
        font-size : 14px ;
        padding : 0 ;
        text-align : left ;
    }
`;

const Introductory = styled.p`
    padding : 10px 0 0 0 ;

    width : 458px ;

    text-align : right ;

    font-size : 15px ;
    user-select : none ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        font-size : 12px ;
        padding : 3px 0 0 0 ;
        text-align : left ;
    }
`;

const UrlTextArea = styled.div`
    margin-top : 15px ;

    @media ${props => props.theme.mobileL} {
        margin-top : 5px ;
    }
`;

const UrlText = styled.p`
    display : block ;
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
    text-align : right ;

    color : #444444 ;
    
    font-weight : lighter ;
    cursor : unset ;

    @media ${props => props.theme.mobileL} {
        padding : 5px 0 0 0 ;
        text-align : left ;

        font-size : 10px ;
    }
`;

const UrlLink = styled(Link)`
    display : block ;
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;
    text-align : right ;

    color : #444444 ;
    
    font-weight : lighter ;

    @media ${props => props.theme.mobileL} {
        padding : 5px 0 0 0 ;

        text-align : left ;

        font-size : 10px ;
    }
`;

//


export {
    
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
}
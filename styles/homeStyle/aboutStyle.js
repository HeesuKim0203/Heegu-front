import styled from 'styled-components'
import Image from 'next/image'

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
`;

const Title = styled.h2`
    font-family : 'Poppins', sans-serif ;
    font-size : 50px ;
    font-weight : bold ;

    user-select : none ;
    line-height : 150% ;
`;

const Contents = styled.div`
    margin-top : 50px ;

    ${animation}
`;

const AuthorImage = styled(Image).attrs(props => ({
    src : authorPicture,
    alt : "Picture of the author",
    priority : true
}))`
    border-radius : 10px ;
`;

const Footer = styled.div`
    display : flex ;
    justify-content : end ;

    margin-top  : 25px ;
    ${animation}
`;

const AuthorTextArea = styled.div`
    display : flex ;
    flex-direction : column ;
`;

const Greeting = styled.p`
    font-family: 'Poppins', sans-serif ;
    font-size : 17px ;
    font-weight : bold ;

    padding : 10px 0 0 0 ;

    user-select : none ;
`;

const Introductory = styled.p`
    padding : 10px 0 0 0 ;

    width : 458px ;

    font-size : 15px ;
    user-select : none ;
`;

const UrlTextArea = styled.div`
    margin-top : 15px ;
`;

const UrlText = styled.p`
    padding : 10px 0 0 0 ;

    font-size : 15px ;
    font-family: 'Poppins', sans-serif ;

    user-select : none ;

    color : #444444 ;
    
    font-weight : lighter ;
    cursor : pointer ;
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

}
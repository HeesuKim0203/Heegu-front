import styled from 'styled-components'
import Image from 'next/image'

import languageIcon from 'public/language_icon.svg'

const Wrap = styled.header`
    width : 100% ;

    position : fixed ;
    z-index : 999 ;
    top : 0 ;

    background-color : #FAFAFA ;
    color : #000000 ;


    opacity : 0.95 ;

`;

const Container = styled.div`
    display : flex ;
    flex-direction : row ;

    width : 1194px ;
    margin : auto ;
    padding : 40px 0 40px 0 ;

    font-family: 'Poppins', sans-serif ;
    user-select : none ;
`;

const TitleContainer = styled.div`
    padding : 0 100px 0 0 ;
`;

const Title = styled.h1`
    font-size : 22px ;
    font-weight : bold ;
`;

const MenuContainer = styled.div`

`;

const Menu = styled.ul`
    display : flex ;
    flex-direction : row ;

    padding : 5px 0 0 0 ;

    font-size : 15px ;
    font-weight : lighter ;
`; 

const MenuItem = styled.li`
    cursor : pointer ;

    &:not(:last-child) {
        margin : 0 25px 0 0  ;
    }
`;

const LanguageContainer = styled.div`
    display : flex ;

    position : relative ;

    justify-content : flex-end ;
    align-items : center ;

    flex : 1 ;
`;

const LanguageImage = styled(Image).attrs(props => ({
    src : languageIcon,
    alt : "Icon of the language",
    loading : "eager",
    priority : true
}))`

    position : relative ;

    z-index : 1000 ;
    cursor : pointer ;

`;

const LanguageMenu = styled.ul`

    display : flex ;

    position : absolute ;

    top : 3px ;
    right : 30px ;

    font-size : 15px ;
    font-weight : lighter ;

    /* Initialization style */
    opacity : 0 ;
    pointer-events : none ;

    /* Animation style */
    @keyframes fadeIn {
        from {
            opacity : 0 ;
            pointer-events : none ;
        }
        to {
            opacity : 1 ;
            pointer-events : auto ;
        }
    }

    @keyframes fadeOut {
        from {
            opacity : 1 ;
            pointer-events : auto ;
        }
        to {
            opacity : 0 ;
            pointer-events : none ;
        }
    }

    animation-name : ${props => props.display ? "fadeIn" : (props.display === undefined ? "none" : "fadeOut")} ;
    animation-fill-mode : forwards ;
    animation-duration : 0.5s ;

`;

const LanguageMenuItem = styled.li`

    padding : 0 10px ;

    font-size : 15px ;
    font-family : 'Poppins', sans-serif ;

    cursor : pointer ;

`;

export {
    Wrap,
    Container,

    TitleContainer,
    Title,

    MenuContainer,
    Menu,
    MenuItem,
    
    LanguageContainer,
    LanguageImage,

    LanguageMenu,
    LanguageMenuItem
}
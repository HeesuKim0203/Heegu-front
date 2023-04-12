import styled from 'styled-components'

// Wrap Style

const Wrap = styled.div`
    width : 1194px ;

    margin : 167px auto 80px auto ;
`;

//

// Common Style

const ContentsContainer = styled.div`
    margin-top : 65px ;
`;

const Contents = styled.div`

`;

const TitleContainer = styled.div`

`;

const Title = styled.h2`
    font-family : 'Poppins', sans-serif ; 
    font-size : 30px ;
    font-weight : bold ;

    user-select : none ;
`;

const ItemContainer = styled.div`
    width : 100% ;
    margin-top : 30px ;
`;

const UrlImage = styled.div`
    ${ props => {
        return props.url ? `background-image : url(${ "http://localhost:3010" }/image${ props.url }) ;` : `background-color : #eeeeee ;` ;
    } }

    background-size : cover ;
    border-radius : 10px ;
`;

const TextEllipsis = styled.p`
    display : -webkit-box ;
    text-overflow : ellipsis ;
    overflow : hidden ;
    -webkit-line-clamp : 3 ; 
    -webkit-box-orient : vertical ;
`;

const focusStyle = `
    &:focus {
        border : 1px solid #0AA79B ;
    }
`;

//

// Blog Common Style

const BlogWrap = styled.div`
    margin-left : 305px ;
`;

const BlogContentsHeader = styled.div`
    font-size : 13px ;

    margin-bottom : 40px ;
`;

const BlogContentsMember = styled.p`
    display : inline ;
`;

const BlogContentsMemberEffect = styled.p`
    display : inline ;

    font-family : 'Poppins', sans-serif ;
    font-weight : bold ;

    color : #0AA79B ;
`;

const BlogContentsSearch = styled.input`

`;

//

// animation 

const animation = `
    opacity : 0 ;
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

    animation-name : 'fadeIn' ;
    animation-fill-mode : forwards ;
    animation-duration : 1s ;
` ;

//

export {

    Wrap,

    ContentsContainer,
    Contents,
    TitleContainer,
    Title,
    ItemContainer,
    UrlImage,
    TextEllipsis,
    focusStyle,

    BlogWrap,

    BlogContentsHeader,
    BlogContentsMember,
    BlogContentsMemberEffect,
    BlogContentsSearch,

    animation
} ;
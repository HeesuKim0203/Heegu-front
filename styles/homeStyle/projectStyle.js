import styled from 'styled-components'
import Image from 'next/image'

import goModal from 'public/go_modal.svg'

import {

    ContentsContainer,
    Contents,
    ItemContainer,
    UrlImage,
    TextEllipsis,

} from 'styles/commonStyle'

const Wrap = styled(ContentsContainer)`
    margin-top : 80px ;
    @media ${props => props.theme.mobileL} {
        margin-top : 40px ;
    }
`;

const Container = styled(Contents)`

`;

const ItemsArea = styled(ItemContainer)`
    display : grid ;

    grid-template-columns : repeat( 2, 582px ) ;

    grid-row-gap : 40px ;
    grid-column-gap : 30px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        box-sizing : border-box ;
        display : block ;
        box-sizing: border-box;
        grid-template-columns : none ;
        grid-row-gap : none ;
        grid-column-gap : none ;
    }
`;

const MainItem = styled.div`
    grid-column : 1 / 2 ;
    grid-row : 1 / 4 ;

    @media ${props => props.theme.mobileL} {
        display : none ;
    }
`;

const SubItem = styled.div`

    display : flex ;
    flex-direction : row ;

    padding : 10px ;
    border-radius : 10px ;

    border : ${props => props.select ? "1px solid #0AA79B" : "1px solid #FAFAFA"} ;

    background-color : ${props => props.select ? "rgba(10, 167, 155, 0.03)" : "none"} ;

    cursor : pointer ;

    margin-bottom : 10px ;

    @media ${props => props.theme.mobileL} {
        display : block ;
        width : 100% ;
        box-sizing : border-box ;
        border : none ;
        background-color : #FAFAFA ;
    }
`;

const MainItemImage = styled(UrlImage)`
    width : 582px ;
    height : 320px ;
`; 

const MainItemTextArea = styled.div`
    padding : 0 5px 0 5px ;
`;

const MainItemTitle = styled.h3`

    display : flex ;

    align-items : center ;

    margin-top : 35px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 27px ;
    font-weight : bold ;

    cursor : pointer ;

    &:hover {
        text-decoration : underline ;
    }
`; 

const GoModalIcon = styled(Image).attrs(props => ({
    src : goModal,
    alt : "Go mobal icon",
}))`
    margin-left : 10px ;
`;

const MainItemResponsibility = styled.p`
    margin-top : 30px ;

    font-size : 15px ;
    font-weight : bold ;
`;

const MainItemDescription = styled(TextEllipsis)`
    height : 75px ;

    margin-top : 15px ;

    font-size : 15px ;
    line-height : 170% ;

    color : #555555 ;

`; 

const MainItemSkillArea = styled.div`
    display : flex ;
    flex-direction : row ;

    margin-top : 40px ;
`; 

const MainItemSkill = styled.p`
    display : block ;

    height : 30px ;

    padding : 0 12px ;    

    border : 1px solid #0AA79B ;
    border-radius : 100px ;
    
    font-family : 'Poppins', sans-serif ;
    font-size : 13px ;
    font-weight : 600 ;
    text-align : center ;
    line-height : 30px ;

    color : #0AA79B ;

    &:not(:last-child) {
        margin-right : 5px ;
    }
`; 

const SubItemImage = styled(UrlImage)`
    width : 270px ;
    height : 165px ;

    margin-right : 40px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        height : 165px ;
        margin : none ;
        box-sizing : border-box ;
    }
`;

const SubItemTextArea = styled.div`
    width : 345px ;

    @media ${props => props.theme.mobileL} {
        width : 100% ;
        box-sizing : border-box ;
    }
`;

const SubItemTitle = styled.h4`
    margin-top : 20px ;

    font-family : 'Poppins', sans-serif ;
    font-size : 23px ;
    font-weight : bold ;

    @media ${props => props.theme.mobileL} {
        margin-top : 15px ;
        font-size : 20px ;
    }
`;

const SubItemIntroduction = styled.p`
    margin-top : 15px ;

    font-size : 15px ;
    color : #555555 ;
    
    line-height : 170% ;

`;

const SubItemDate = styled.p`
    margin-top : 20px ;
    
    font-family : 'Poppins', sans-serif ;
    font-size : 15px ;
    color : #999999 ;

    @media ${props => props.theme.mobileL} {
        font-size : 13px ;
    }
`;

const SubItemContainer = styled.div`
    height : 620px ;
    overflow-y : scroll ;

    @media ${props => props.theme.mobileL} {
        height : auto ;
        overflow-y : none ;
    }
` ;

//

export {

    Wrap,
    Container,
    ItemsArea,
    MainItem,
    SubItem,
    MainItemImage,
    MainItemTextArea,
    MainItemTitle,
    MainItemResponsibility,
    MainItemDescription,
    MainItemSkillArea,
    MainItemSkill,
    SubItemImage,
    SubItemTextArea,
    SubItemTitle,
    SubItemIntroduction,
    SubItemDate,
    GoModalIcon,
    SubItemContainer,
}
import styled from 'styled-components'

import { UrlImage } from 'styles/commonStyle'

// Modal Style

const Wrap = styled.div`
    display : ${ props => props.modalDisplay ? "flex" : "none" } ;  
    position : fixed ;
    z-index : 1001 ; 
    left : 0 ;
    top : 0 ;
    width : 100% ; 
    height : 100% ; 
    overflow : hidden ; 
    background-color : rgba(0, 0, 0, 0.5) ;
`;

const ProjectContainer = styled.div`
    display : flex ;
    flex-direction : column ;
    
    position : relative ;

    width : 930px ;

    padding : 45px 40px ;

    margin : auto ;
    border-radius : 10px ;
    background-color : #FAFAFA ;

    z-index : 1002 ; 

`;

const ProjectTitle = styled.h2`
    font-family : 'Poppins', sans-serif ;
    font-size : 30px ;
    font-weight : bold ;

`;

const ProjectInformationArea = styled.div`
    display : flex ;
    margin-top : 40px ;
`;

const ProjectInformationTextArea = styled.div`
    flex : 1 ;

    margin-left : 5px ;
`;

const ProjectInformationTextAreaDiv = styled.div`

    &:not(:last-child) {
        display : flex ;
    }

    &:not(:first-child) {
        margin-top : 20px ;
    }
`;


const ProjectInformationTextTitle = styled.h4`

    font-family : 'Poppins', sans-serif ;
    font-size : 16px ;
    font-weight : 500 ;

    width : 115px ;

    margin-right : 20px ;

`;

const ProjectInformationTextData = styled.p`
    display : block ;

    width : 300px ;

    line-height : 170% ;
    margin-top : -5px ;
`;

const ProjectInformationSkillArea = styled.div`

    display : flex ;
    flex-direction : row ;

    margin-top : 40px ;

    margin-top : 20px ;
    width : 430px ;
    height : 85px ;

    flex-wrap : wrap ;
    align-items : space-between ;
`;


const ProjectImage = styled(UrlImage)`
    width : 475px ;
    height : 240px ;
`;

const ProjectLongTextArea = styled.div`
    margin-top : 30px ;

    &:not(:first-child) {
        margin-top : 40px ;
    }
`;

const ProjectModalLongTexTitle = styled.h5`
    font-family : 'Poppins', sans-serif ;
    font-size : 20px ;
    font-weight : bold ;
`;

const ProjectLongText = styled.p`
    display : block ;

    height : 128px ;

    margin-top : 20px ;

    color : #555555 ;
    line-height : 180% ;
`;

const ProjectMainItemSkill = styled.p`
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

//

export {

    Wrap,
    ProjectContainer,
    ProjectTitle,
    ProjectInformationArea,
    ProjectInformationTextArea,
    ProjectInformationTextAreaDiv,
    ProjectInformationTextTitle,
    ProjectInformationTextData,
    ProjectInformationSkillArea,
    ProjectMainItemSkill,
    ProjectImage,
    ProjectLongTextArea,
    ProjectModalLongTexTitle,
    ProjectLongText,
    
}
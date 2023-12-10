import styled from 'styled-components'

const BlogContentsHeader = styled.div`
    font-size : 13px ;

    margin-bottom : 40px ;

    @media ${props => props.theme.mobileL} {
        padding : 0 20px ;
        margin-bottom : 0 ;
    }
`;

const BlogContentsMember = styled.p`
    display : inline ;

    font-size : 14px ;
`;

const BlogContentsMemberEffect = styled.p`
    display : inline ;

    font-family : 'Poppins', sans-serif ;
    font-weight : bold ;
    font-size : 14px ;

    color : #0AA79B ;
`;


export {

    BlogContentsHeader,
    BlogContentsMember,
    BlogContentsMemberEffect,
    
}
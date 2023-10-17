import styled from 'styled-components'

const Wrap = styled.div`

    display : flex ;

    width : 100% ;
    height : ${ props => props.small ? props.small  : "100vh" } ;

    justify-content : center ;
    align-items : center ;

`;

export {
    Wrap
}
import styled, { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'
import theme from 'styles/theme'

const PageContainer = styled.div`
    font-family : ${props => props.theme[props.language] } ;
` ;

const GlobalStyle = createGlobalStyle`
    /* style reset */
    ${reset}

    /* Basic Style */
    body { 
        background-color : #FAFAFA ; 
    }

    #wrap {
        width : 100% ;
    }

    a {
        color : black ;
        text-decoration : none ;
    }

    input, textarea {
        -webkit-appearance : none ;
        -moz-appearance : none ;
        appearance : none ;
        outline : none ;
    }

    /* Mark down style */

    .editor tr {
        border-top: 1px solid #c6cbd1;
    }

    .editor th,
    .editor td {
        padding: 12px 55px;
        border: 1px solid #dfe2e5;
    }

    .editor h1{
        font-size : 2em ;
    }

    .editor h2{
        font-size: 1.5em ;
    }

    .editor h3{
        font-size : 1.17em ;
    }

    .editor h4{
        font-size : 1em ;
    }
    
    .editor h5{
        font-size : .83em ;
    }

    .editor h6{
        font-size : .67em ;
    }

    .editor h1, h2, h3, h4, h5, h6{
        font-weight : bolder ;
    }

    .editor blockquote {
        color : #fff ;
        margin : 10px ;
        padding-left : 1.2em ;
        border-left : 0.2em #666 solid ; 
        font-style : italic ;
    }

    .editor li{
        list-style-type : square ;
    }

    .fullheight{
        height : 92vh ;
    }

    .wmde-markdown h1, h2, h3, h4, h5, h6, code {
        font-family : 'Poppins', sans-serif ;
    }
` ;

export { 
    GlobalStyle,
    PageContainer
} ;

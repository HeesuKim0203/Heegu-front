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

    .fullheight{
        height : 92vh ;
    }
` ;

export { 
    GlobalStyle,
    PageContainer
} ;

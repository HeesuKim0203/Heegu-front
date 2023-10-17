import { 
    Wrap, 
    
    CopyrightContainer, 
    Copyright, 
} from 'styles/footerStyle' ;

function Footer(props) {
    return (
        <Wrap>
            <CopyrightContainer>
                <Copyright>Copyright © 2023 HeeGu All Right Reserved.</Copyright>
            </CopyrightContainer>
        </Wrap>
    );
}

export default Footer;
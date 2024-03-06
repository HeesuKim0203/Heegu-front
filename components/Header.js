import Link from 'next/link'

import { menuTitle, menu, HOME } from 'util/text'
import { languageData } from 'util/data'
import { getPath } from 'util/commHook'
import { useState } from 'react'

import { 

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
    
} from 'styles/headerStyle' ;

function Header({ language }) {

    const { urlPath } = getPath() ;
    const [ languageMenuDisplay, setLanguageMenuDisplay ] = useState(undefined) ; 

    function languageImageOnClick(event) {
        setLanguageMenuDisplay( languageMenuDisplay ? 0 : 1 ) ;
    }

    function move(name) {
        const element = menu.find( value => value.name === name ) ;

        element && window.scroll({
            behavior : 'smooth',
            left : 0,
            top : element.y
        }) ;
    }

    return (
        <Wrap>
            <Container>
                <TitleContainer>
                    <Title>
                        <Link
                            href={ HOME }
                            locale = { language }
                        >
                            { menuTitle }
                        </Link>
                    </Title>
                </TitleContainer>
                <MenuContainer>
                    <Menu>
                        { menu.map((value, index) => {
                            const { name } = value ;
                            return (
                                <MenuItem
                                    key = { index }
                                    onClick = { () => move(name) }
                                >
                                    <Link 
                                        href = { 
                                            index !== menu.length - 1 ? 
                                            `/#${ name }` : 
                                            `/${ name.substring(0, 1).toLowerCase() + name.substring(1) }`
                                        }
                                        locale = { language }
                                    >
                                        { name }
                                    </Link>
                                </MenuItem>
                            ) ;
                        }) }
                    </Menu>
                </MenuContainer>
                <LanguageContainer>
                    <LanguageImage 
                        onClick = { languageImageOnClick }
                    />
                    <LanguageMenu
                        display = { languageMenuDisplay }
                    > 
                        { languageData.map((value, index) => {

                            const { language, text } = value ;

                            return (
                                <LanguageMenuItem
                                    key = { index }
                                >
                                    <Link
                                        href = { urlPath }
                                        locale = { language }
                                    >
                                    { text }
                                    </Link>
                                </LanguageMenuItem>
                            ) ;
                        }) }
                    </LanguageMenu>
                </LanguageContainer>
            </Container>
        </Wrap>
    )
}

export default Header;
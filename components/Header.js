import Link from 'next/link'

import { menuTitle, menu } from 'util/text'
import { languageData } from 'util/data'
import { getLanguageExcludePath } from 'util/commHook'
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

    const { urlLanguage } = getLanguageExcludePath() ;
    const [ languageMenuDisplay, setLanguageMenuDisplay ] = useState(undefined) ; 

    function languageImageOnClick(event) {
        setLanguageMenuDisplay( languageMenuDisplay ? 0 : 1 ) ;
    }

    return (
        <Wrap>
            <Container>
                <TitleContainer>
                <Title>{ menuTitle }</Title>
                </TitleContainer>
                <MenuContainer>
                    <Menu>
                        { menu.map((value, index) => {
                            const { name } = value ;
                            const url = `/${ language }` ;
                            return (
                                <MenuItem
                                    key = { index }
                                >
                                    <Link 
                                        href = { 
                                            index !== menu.length - 1 ? 
                                            `${ url }#${ name }` : 
                                            `${ url }/${ name.substring(0, 1).toLowerCase() + name.substring(1) }`
                                        }
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
                                        href = { `/${language}` + urlLanguage }
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
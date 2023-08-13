import { useState, useEffect } from 'react'

import TitleComponent from 'components/TitleComponent'
import { 

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

} from 'styles/homeStyle/projectStyle'

function ProjectContents({
    setModalStatus,
    projects,
    projectTitle
}) {

    console.log(projects) ;

    const [ mainItem, setMainItem ] = useState( projects[0] ) ;
    const [ select, setSelect ] = useState(0) ;

    function subItemOnClick(event, index) {

        setMainItem(projects[index]) ;
        setSelect(index) ;

    }

    useEffect(() => {
        
        setMainItem(projects && projects[select]) ;

    }, [ projects ]) 

    return (
        <Wrap>
            <Container>
                <TitleComponent title = { projectTitle } />
                { projects && 
                    <ItemsArea>
                        { mainItem && 
                            <MainItem>
                                <MainItemImage url = { mainItem.image } />
                                <MainItemTextArea>
                                    <MainItemTitle
                                        onClick = { event => setModalStatus( event, mainItem ) }
                                    > 
                                        { mainItem.title } 
                                        <GoModalIcon /> 
                                    </MainItemTitle>
                                    <MainItemResponsibility> { mainItem.responsibility } </MainItemResponsibility>
                                    <MainItemDescription> { mainItem.description } </MainItemDescription>
                                    <MainItemSkillArea>
                                        { mainItem.skill.map((value, index) => 
                                            (
                                                <MainItemSkill key = { index } > { value } </MainItemSkill>
                                            )
                                        ) }
                                    </MainItemSkillArea>
                                </MainItemTextArea>
                            </MainItem>
                        }
                        <SubItemContainer>
                            { projects.map((value, index) => (
                                <SubItem 
                                    key = { index }
                                    row = { index + 1 }
                                    select = { select === index ? 1 : 0 }
                                    onClick = { event => subItemOnClick(event, index) }
                                >
                                    <SubItemImage url = { value.image } />
                                    <SubItemTextArea>
                                        <SubItemTitle> { value.title } </SubItemTitle>
                                        <SubItemIntroduction> { value.introduction } </SubItemIntroduction>
                                        <SubItemDate> { `${value.startDate.substr(0, 7).replaceAll('-', '.') } ~ ${value.deadlineDate.substr(0, 7).replaceAll('-', '.')}` } </SubItemDate>
                                    </SubItemTextArea>
                                </SubItem>)
                            )}
                        </SubItemContainer>
                    </ItemsArea>
                }
            </Container>
        </Wrap>
    );
}

export default ProjectContents ;
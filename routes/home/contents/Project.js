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
import { LazyImage } from 'util/commHook';

function ProjectContents({
    setModalStatus,
    projects,
    projectTitle
}) {

    const [ select, setSelect ] = useState(0) ;

    function subItemOnClick(event, index) {

        setSelect(index) ;

    }

    return (
        <Wrap>
            <Container>
                <TitleComponent title = { projectTitle } />
                { projects[select] && 
                    <ItemsArea>
                        <MainItem>
                            <LazyImage
                                    width = "582"
                                    height = "320"
                                    alt = "Project Main Image"
                                    src = { projects[select].image }
                                    Component = { MainItemImage }
                                />
                            <MainItemTextArea>
                                <MainItemTitle
                                    onClick = { event => setModalStatus( event, projects[select] ) }
                                > 
                                    { projects[select].title } 
                                    <GoModalIcon /> 
                                </MainItemTitle>
                                <MainItemResponsibility> { projects[select].responsibility } </MainItemResponsibility>
                                <MainItemDescription> { projects[select].description } </MainItemDescription>
                                <MainItemSkillArea>
                                    { projects[select].skill.map((value, index) => 
                                        (
                                            <MainItemSkill key = { index } > { value } </MainItemSkill>
                                        )
                                    ) }
                                </MainItemSkillArea>
                            </MainItemTextArea>
                        </MainItem>
                        <SubItemContainer>
                            { projects.map((value, index) => (
                                <SubItem 
                                    key = { index }
                                    row = { index + 1 }
                                    select = { select === index ? 1 : 0 }
                                    onClick = { event => subItemOnClick(event, index) }
                                >
                                    <LazyImage
                                        width = "270"
                                        height = "165"
                                        alt = "Project Sub Image"
                                        src = { value.image }
                                        Component = { SubItemImage }
                                    />
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
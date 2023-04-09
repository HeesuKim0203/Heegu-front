import { 

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

} from 'styles/modalStyle'
 
function Modal({
    modalDisplay,
    setModalStatus,
    projectData,
    informationPeriod,
    informationTeamMember,
    informationResponsible,
    informationLanguage,
    longTextTitleIntroduction,
    longTextTitleLearned,
}) {
    return (
        <Wrap
            modalDisplay = { modalDisplay }
            onClick = { setModalStatus }
        >
            { projectData && 
                <ProjectContainer
                    onClick = { event => event.stopPropagation() }
                >
                    <ProjectTitle> { projectData.title } </ProjectTitle>
                    <ProjectInformationArea>
                        <ProjectInformationTextArea>
                            <ProjectInformationTextAreaDiv>
                                <ProjectInformationTextTitle>{ informationPeriod }</ProjectInformationTextTitle>
                                <ProjectInformationTextData>{ `${projectData.startDate.substr(0, 7).replaceAll('-', '.') } ~ ${projectData.deadlineDate.substr(0, 7).replaceAll('-', '.')}` }</ProjectInformationTextData>
                            </ProjectInformationTextAreaDiv>
                            <ProjectInformationTextAreaDiv>
                                <ProjectInformationTextTitle>{ informationTeamMember }</ProjectInformationTextTitle>
                                <ProjectInformationTextData>{ projectData.members }</ProjectInformationTextData>
                            </ProjectInformationTextAreaDiv>
                            <ProjectInformationTextAreaDiv>
                                <ProjectInformationTextTitle>{ informationResponsible }</ProjectInformationTextTitle>
                                <ProjectInformationTextData>{ projectData.responsibility }</ProjectInformationTextData>
                            </ProjectInformationTextAreaDiv>
                            <ProjectInformationTextAreaDiv>
                                <ProjectInformationTextTitle>{ informationLanguage }</ProjectInformationTextTitle>
                                <ProjectInformationSkillArea>
                                    { projectData.skill.map((value, index) => 
                                        (
                                            <ProjectMainItemSkill key = { index } > { value } </ProjectMainItemSkill>
                                        )
                                    ) }
                                </ProjectInformationSkillArea>
                            </ProjectInformationTextAreaDiv>
                        </ProjectInformationTextArea>
                        <ProjectImage
                            url = { projectData.image }
                        />
                    </ProjectInformationArea>
                    <ProjectLongTextArea>
                        <ProjectModalLongTexTitle>{ longTextTitleIntroduction }</ProjectModalLongTexTitle>
                        <ProjectLongText> { projectData.description } </ProjectLongText>
                    </ProjectLongTextArea>
                    <ProjectLongTextArea>
                        <ProjectModalLongTexTitle>{ longTextTitleLearned }</ProjectModalLongTexTitle>
                        <ProjectLongText> { projectData.learned } </ProjectLongText>
                    </ProjectLongTextArea>
                </ProjectContainer>
            }
        </Wrap>
    );
}

export default Modal;
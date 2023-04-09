import About from 'routes/home/contents/About'
import Career from 'routes/home/contents/Career'
import Project from 'routes/home/contents/Project'
import Writing from 'routes/home/contents/Writing'
import ContactUs from 'routes/home/contents/ContactUs'
import Modal from 'components/Modal'

import { PageContainer } from 'styles/GlobalStyle'
import { Wrap } from 'styles/commonStyle'

import Header from 'components/Header'
import Footer from 'components/Footer'

import { getModalDisplay } from 'util/commHook'
import { setDataLanguage } from 'util/data'
import { 

    // About const text 
    aboutTitle, 
    aboutGreeting,
    aboutIntroductory,
    aboutUrlImformation,

    // Career const text
    careerTitle,

    // Project const text
    projectTitle,

    // Writing const text
    writingTitle, 
    blogText,

    // ContactUs const text
    contactUsTitle,
    contactUsInputPlaceHolder,
    contactUsTextAreaPlaceHolder,

    // Modal const text
    informationPeriod,
    informationTeamMember,
    informationResponsible,
    informationLanguage,

    longTextTitleIntroduction,
    longTextTitleLearned,
    
} from 'util/text'

function HomeContainer ({ 
    data : { 
        careers, 
        projects,
        writings
    }, 
    language 
}) {

    const { modalDisplay, setModalStatus, projectData } = getModalDisplay() ;

    return (
        <>
           { language &&
                <>
                    <Header language = { language } />
                    <PageContainer language = { language } >
                    <Wrap>
                        <About 
                            aboutTitle = { aboutTitle }
                            aboutGreeting = { aboutGreeting }
                            aboutIntroductory = { aboutIntroductory[language] }
                            aboutUrlImformation = { aboutUrlImformation }
                        />
                        <Career 
                            careerTitle = { careerTitle }
                            careers = { setDataLanguage(careers, language) }
                        />
                        <Project
                            projectTitle = { projectTitle }
                            projects = { setDataLanguage(projects, language) }
                            setModalStatus = { setModalStatus }
                        />
                        <Writing 
                            writingTitle = { writingTitle }
                            writing = { setDataLanguage(writings, language) }
                            blogText = { blogText }
                            language = { language }
                        />
                        <ContactUs 
                            contactUsTitle = { contactUsTitle }
                            contactUsInputPlaceHolder = { contactUsInputPlaceHolder[language] }
                            contactUsTextAreaPlaceHolder = { contactUsTextAreaPlaceHolder[language] }
                            language = { language }
                        />
                    </Wrap>
                    <Modal
                        modalDisplay = { modalDisplay }
                        setModalStatus = { setModalStatus }
                        projectData = { projectData }
                        informationPeriod = { informationPeriod }
                        informationTeamMember = { informationTeamMember }
                        informationResponsible = { informationResponsible }
                        informationLanguage = { informationLanguage }
                        longTextTitleIntroduction = { longTextTitleIntroduction }
                        longTextTitleLearned = { longTextTitleLearned }
                    />
                    </PageContainer>
                    <Footer />
                </>
            }
        </>
    );
}

export default HomeContainer ;
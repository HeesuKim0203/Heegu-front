import { setObjectArrayKeyToLanguageData } from 'util/data'

// Site text

const siteTitle = "HeeGu" ;

//

// Meun text

const menuTitle = siteTitle ;

const blogText = "Blog" ;

const menu = [
    {   
        name : "About", 
        y : 0,
    },
    { 
        name : "Career", 
        y : 730,
    },
    { 
        name : "Project",
        y : 1350,
    },
    { 
        name : "Writing",
        y : 2070,
    },
    { 
        name : "Contact",
        y : 2750,
    },
    { 
        name : blogText,
        y : 0,
    }
] ;

//

// About text
const aboutTitle = "Good programs make users and developers comfortable." ;
const aboutGreeting = "Hello There! I’m HEESU KIM" ;

const aboutIntroductoryText = [
    "저는 현재 일본에서 일하고 있는 소프트웨어 개발자입니다. 🧑‍💻",
    "私は現在日本で働いているをソフトウェアエンジニアです。🧑‍💻"
] ;

const aboutUrlImformation = [
    { icon : "📨", text : "heesukim998@gmail.com"},
    { icon : "💻", text : "https://github.com/HeesuKim0203"}
] ;

//

// Career text
const careerTitle = "#Career" ;
//

// Project text
const projectTitle = "#Project" ;
//

// Writing text
const writingTitle = "#Writing" ;
//

// Contact us text
const contactUsTitle = "#Contact Us" ;

const contactUsInputPlaceHolderText = [
    "제목을 입력해주세요",
    "タイトルをご入力ください",
] ;

const contactUsTextAreaPlaceHolderText = [
    "내용을 입력해주세요",
    "内容をご入力ください"
] ;

//


// Project Modal 

const informationPeriod = "Period" ;
const informationTeamMember = "Member" ;
const informationResponsible = "Responsible" ;
const informationLanguage = "Language" ;

const longTextTitleIntroduction = "Description" ;
const longTextTitleLearned = "Learned" ;

//

// Blog Side Menu Text

const blogSideMenuTitle = "#Category" ;

const blogBigMenuText = [
    [
        {
            name : "개발",
            smallMenu : [
            ],
            status : 1
        },
        {
            name : "잡담",
            smallMenu : [
                
            ],
            status : 0
        },
        {
            name : "생활",
            smallMenu : [
                
            ],
            status : 0 
        }
    ],
    [
        {
            name : "開発",
            smallMenu : [
            ],
            status : 1
        },
        {
            name : "雑談",
            smallMenu : [
                
            ],
            status : 0
        },
        {
            name : "生活",
            smallMenu : [
                
            ],
            status : 0
        }
    ]
] ;

//

// Blog text

const numberOfBlogsText = [
    "전체게시물",
    "全体投稿",
] ;

const ballonText = [
    "준비 중...",
    "準備中…"
] ;

//

// BlogContent text

const relatedWritingText = [
    "관련글",
    "関連文"
] ;

//

// Web Data 

const webData = {
    webUrl : 'https://www.heegublog.com',
    titleData : 'Heegu Blog',
    name : 'heesu kim'
} ;

const HOME = '/' ;
const BLOG = '/blog' ;
const IMAGE = '/image' ;

const ENFONT = 'Poppins' ;
const KRFONT = 'Noto Sans KR' ;
const JPFONT = 'Noto Sans JP' ;

//

// Blog Type

const BLOGTYPE = [ "Cs", "TypeScript" ]

//

export const {
    aboutIntroductoryText : aboutIntroductory,
    contactUsInputPlaceHolderText : contactUsInputPlaceHolder,
    contactUsTextAreaPlaceHolderText : contactUsTextAreaPlaceHolder,
    blogBigMenuText : blogBigMenu,
    numberOfBlogsText : numberOfBlogs,
    ballonText : ballon,
    relatedWritingText : relatedWriting,
} = setObjectArrayKeyToLanguageData(
    { aboutIntroductoryText },
    { contactUsInputPlaceHolderText },
    { contactUsTextAreaPlaceHolderText },
    { blogBigMenuText },
    { numberOfBlogsText },
    { ballonText },
    { relatedWritingText }
) ;

export {
    siteTitle,
    menuTitle, 
    menu,
    blogText,

    aboutTitle,
    aboutGreeting,
    aboutUrlImformation,

    careerTitle,

    projectTitle,

    writingTitle,

    contactUsTitle,

    informationPeriod,
    informationTeamMember,
    informationResponsible,
    informationLanguage,

    longTextTitleIntroduction,
    longTextTitleLearned,

    blogSideMenuTitle,

    webData,
    HOME,
    BLOG,
    IMAGE,

    ENFONT,
    KRFONT,
    JPFONT,

    BLOGTYPE
}
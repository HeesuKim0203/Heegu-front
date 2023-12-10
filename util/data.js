// Language
const KR = "ko-kr" ;
const JP = "ja-jp" ;

// Const language, text
const languageData = [
    { 
        language : KR,
        text : "KR"
    },
    { 
        language : JP,
        text : "JP" 
    },
] ;

const setObjectKeyToLanguageData = (languageData, property) => {

    // Set Object Key To Language
    return Array.isArray(property) ? languageData.reduce(( theme, value, index ) => {
    
        const { language } = value ;
        theme[language] = property[index] ;
        
        return theme; 
    
    }, {}) : {} ;
}

const setObjectArrayKeyToLanguageData = (...objArray) => {

    return objArray.reduce((prev, object, index) => {

        const key = Object.keys(object)[0] ;
        const value = setObjectKeyToLanguageData(languageData, object[key]) ;

        return {
            [ key ] : value,
            ...prev
        } ;

    }, {}) ; 
}

const setDataLanguage = ( data, language ) => {

    if(data)
        return data.reduce((prev, value) => {

            return (value.hasOwnProperty( language ) ? 
                [
                    ...prev,
                    {
                        ...value[language],
                        ...value,
                    }
                ] : 
                [
                    ...prev,
                    {
                        value,
                        ...value
                    }
                ]
            )

        }, []) ;
}

//

export {
    KR,
    JP,
    languageData,
    setObjectArrayKeyToLanguageData,
    setDataLanguage
}

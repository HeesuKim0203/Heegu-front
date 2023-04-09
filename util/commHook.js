import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import FontFaceObserver from 'fontfaceobserver'

import { languageData } from 'util/data'
import { menu } from 'util/text'

export function getLanguageExcludePath() {

    const router = useRouter() ;

    const [ urlLanguage, setUrlLanguage ] = useState('') ; // Current Language exclude path status

    useEffect(() => {

        const { asPath } = router ;
        const languageExcludePath = asPath.slice( 6, asPath.length ) ; // 6 -> KR, JP length

        if( languageExcludePath.substring(0, 1) != '#' ) {

            setUrlLanguage(languageExcludePath) ;
        
        }else {

            const element =  menu.find( value => value.name === languageExcludePath.substring(1) ) ;

            element && window.scroll({
                behavior : 'smooth',
                left : 0,
                top : element.y
            }) ;

        }

    }, [ router ]) ;

    return { urlLanguage } ;

}

export function getLanguageSetStatus() {

    const router = useRouter() ;

    const [ language, setLanguage ] = useState(undefined) ;  // Current language status languageData[0] -> KR

    useEffect(() => {

        const { asPath } = router ;
        const urlLanguageStatus = asPath.slice(1, 6) ; // 1 -> / exclude, 6 -> KR, JP String length

        setLanguage(languageData.find(value => value.language === urlLanguageStatus).language) ;

    }, [ router ]) ;

    return { language, setLanguage } ;
}

export function getModalDisplay() {
    
    const [ modalDisplay, setModalDisplay ] = useState(0) ;
    const [ projectData, setProjectData ] = useState(undefined) ;

    function setModalStatus(event, projectData) {

        setModalDisplay(modalDisplay ? 0 : 1) ;
        setProjectData(projectData) ; 

    }
    
    return { modalDisplay, setModalStatus, projectData } ;
}

export function apiHook(api, query) {

    const [ data, setData ] = useState(undefined) ;
    const [ error, setError ] = useState('') ;
    const [ load, setLoad ] = useState(true) ;

    const getData = async ( loadState = true ) => {

        if(!loadState)
          return setLoad(false) ;
  
        try {
  
          const {
              data : result
          } = await api(query) ;
  
          setData(result) ;
  
        }catch {
  
          setError("Can't request data from server.") ;
  
        }finally {
  
          setLoad(false) ;

        }
    } ;
    
    return { data, error, load, getData, setLoad } ;
}

export function fontLoad(fontString) {

    const [ load, setLoad ] = useState(false) ;

    useEffect(() => {

        const enFont = new FontFaceObserver('Poppins') ;
        const font = new FontFaceObserver(fontString) ;

        Promise.all([font.load(), enFont.load()]).then(function () {
            setTimeout(() => {
                setLoad(true) ;
            }, 1000)
        });

    }, []) ;


    return { load } ;
} 
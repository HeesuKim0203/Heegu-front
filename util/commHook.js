import { useEffect, useState, useRef, memo } from 'react'
import { useRouter } from 'next/router'
import FontFaceObserver from 'fontfaceobserver'
import { menu } from 'util/text'

export function getPath() {

    const router = useRouter() ;

    const { locale, asPath, query } = router ;

    const element =  menu.find( value => value.name === asPath.substring(2) ) ;

    element && window.scroll({
        behavior : 'smooth',
        left : 0,
        top : element.y
    }) ;

    return { urlPath : asPath, lang : locale, query } ;

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

export function fontLoad(...fontString) {

    const [ load, setLoad ] = useState(true) ;

    // useEffect(() => {

    //     // const enFont = new FontFaceObserver('Poppins') ;
    //     // const font = fontString.map((value) => {
    //     //     return new FontFaceObserver(value)
    //     // }) ;

    //     // Promise.all([...font.map(value => value.load()), enFont.load()]).then(function () {
    //     //     setLoad(true)
    //     // }, function(err) { console.log(err) }) ;

    // }, []) ;


    return { load } ;
} 

export function LazyImageObserver( srcData, width, height ) {

    const src = process.env.NEXT_PUBLIC_IMAGE_URL + srcData + `?tr=w-1,h-1:w-${width},h-${height}` ;

    const [ imageSrc, setImageSrc ] = useState(src) ;
    const imageRef = useRef(null) ;
    
    useEffect(() => {

        let observer ;
        let timeOutClear ;
  
        if( imageRef ) {

            observer = new IntersectionObserver(
                ([entry]) => {

                    if(entry.isIntersecting) {
                        timeOutClear = setTimeout(() => {
                            setImageSrc(process.env.NEXT_PUBLIC_IMAGE_URL + srcData+ `?tr=w-${width},h-${height}`) ;
                        }, 150) ;
                        observer.unobserve( imageRef.current ) ;
                    } 

                }, { threshold : [ 0.25 ] }

            ) ;
            clearTimeout(timeOutClear) ;
            observer.observe( imageRef.current ) ;
        }
  
        return () => {
            observer && observer.disconnect(imageRef) ;
        } ;
  
    }, [ imageRef, imageSrc ]) ;
  
    return { imageSrc, imageRef } ;
}

export const LazyImage = memo((props) => {

    const { className, src, alt, width, height, style, Component } = props ;
    const { imageSrc, imageRef } = LazyImageObserver(src, width, height) ;

    return (
        <Component 
            className = { className } 
            ref = { imageRef } 
            src = { imageSrc } 
            alt = { alt }
            width = { width }
            height = { height }
            style = { style }
         />
    )
}) ;


import Loader from 'components/Loader'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import HomeContainer from 'routes/home/HomeContainer'
import { getProjects, getCareers, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'
import { KR } from 'util/data' 

import { HOME } from 'util/text'
import Seo from 'components/Seo'
import { siteTitle } from 'util/text' 

// data : Home data
function Index({}) {

  const { _, lang } = getPath() ;
  const [ load, setLoad ] = useState(false) ;
  const [ data, setData ] = useState({
    careers : [],
    projects : [],
    writings : []
  }) ;

  useEffect(() => {

    async function initHome() {

      try {

        const {
          data : careers
        } = await getCareers() ;
      
        const {
          data : projects
        } = await getProjects() ;
      
        const {
          data : writings
        } = await getBlogs() ;

        setData({
          careers,
          projects : projects.sort((a, b) => new Date(b.startDate) - new Date(a.startDate)),
          writings
        }) ;

      } catch (error) {

        console.log(error) ;

      }finally {
        
        setLoad(true) ;

      }
    }

    initHome() ;
  
  }, []) ;

  return (
    <>
      <Head>
        <Seo 
            title = { siteTitle }
            url = { `${HOME}${lang}` }
            description = "Let me introduce the developer Kim heesu."
        />
      </Head>
      { 
        load ?
          (
            <HomeContainer 
              data = { data }
              language = { lang }
            />
          ) : (
            <Loader />
          )
      }
    </>
  )
}

export default Index ;
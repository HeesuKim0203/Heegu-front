import Loader from 'components/Loader'
import { useEffect, useState } from 'react';
import HomeContainer from 'routes/home/HomeContainer'
import { getProjects, getCareers, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'
import { KR } from 'util/data' 

// data : Home data
function Index({}) {

  const { _, lang } = getPath() ;
  const { load } = fontLoad(lang === KR ? 'Noto Sans KR' : 'Noto Sans JP') ;
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

      }
    }

    initHome() ;
  
  }, []) ;

  return (
    <>
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
import Loader from 'components/Loader'
import { useEffect, useState } from 'react';
import HomeContainer from 'routes/home/HomeContainer'
import { getProjects, getCareers, getBlogs } from 'util/api'
import { fontLoad, getPath } from 'util/commHook'

// data : Home data
// notFound : Data existence
function Index({}) {

  const { load } = fontLoad('Noto Sans KR', 'Noto Sans JP') ;
  const { _, lang } = getPath() ;
  const [ data, setData ] = useState({
    careers : [],
    projects : [],
    writings : []
  }) ;
  const [ notFound, setNotFound ] = useState(false) ;

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
          projects,
          writings
        }) ;

      } catch (error) {

        console.log(error) ;
        setNotFound(true) ;

      }
    }

    initHome() ;
  
  })

  return (
    <>
      { 
        load ?
          (!notFound && 
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
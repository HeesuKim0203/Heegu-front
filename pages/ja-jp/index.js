import Loader from 'components/Loader'
import HomeContainer from 'routes/home/HomeContainer'
import { getCareers, getProjects, getBlogs } from 'util/api'
import { JP } from 'util/data'
import { fontLoad } from 'util/commHook'

export function Index({ data, notFound }) {

  const { load } = fontLoad('Noto Sans JP') ;

  return (
    <>
      { 
        load ?
          (!notFound && 
            <HomeContainer 
              data = { data }
              language = { JP }
            />
          ) : (
            <Loader />
          )
      }
    </>
  )
}

export const getStaticProps = async (context) => {

  const {
    data : careers
  } = await getCareers() ;

  const {
    data : projects
  } = await getProjects() ;

  const {
    data : writings
  } = await getBlogs() ;

  if (!careers && !projects && !blogs) {
    return {
      notFound : true,
    }
  }

  return {
   props : { 
     data : {
        careers,
        projects,
        writings
      },
    }
  }
}

export default Index ;

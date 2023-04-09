import { useCookies } from 'react-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import dynamic from 'next/dynamic'

const MDEditor = dynamic(
    () => import("@uiw/react-md-editor").then((mod) => mod.default),
    { ssr: false }
  );
const EditerMarkdown = dynamic(
  () =>
    import("@uiw/react-md-editor").then((mod) => {
      return mod.default.Markdown;
    }),
  { ssr: false }
);
const Markdown = dynamic(
  () => import("@uiw/react-markdown-preview").then((mod) => mod.default),
  { ssr: false }
);

function Write(props) {

    const router = useRouter() ;

    const [ cookies, _ ] = useCookies(['token']) ;
    const [ writeDescription, setWriteDescription ] = useState('') ;

    useEffect(() => {
        
      if(!cookies.token) router.push(`/profile/login`) ; 

    }, []) ;

    return (
      <>
        {
          cookies.token && 
          <>
              <MDEditor 
                value = { writeDescription } 
                onChange={ setWriteDescription } 
                height = "100vh"
              />
          </>
        }
      </>
    );
}

export default Write;
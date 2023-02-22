import Layout from '@/components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'



function Loading() {
 
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const handleStart = (url: string) => (url !== router.asPath) && setLoading(true) ;
    const handleComplete = (url: string) => (url !== router.asPath) &&   setLoading(false)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }

  }, [])


  return (

   <div>
 {loading && <div className='bg-white h-screen flex justify-center items-center'>
 <iframe src="https://giphy.com/embed/3oEjI6SIIHBdRxXI40" width="200" height="200" className="giphy-embed" allowFullScreen></iframe>
  </div>}
    </div>
  
  )
}



export default function App({ Component, pageProps }: AppProps) {



  return (
    <Layout>
        
      <Script type="text/javascript" id="zsiqchat"
        dangerouslySetInnerHTML={{
          __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "c02d6e813d8d233cded78bcf37f2238dcf8e542750c12d318cc5c76b32f1bc3f", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com.au/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t)`,
        }}
      />
      <Loading/>
      <Component {...pageProps} />
    </Layout>

  )

}

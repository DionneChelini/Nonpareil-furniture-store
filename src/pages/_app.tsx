import Layout from '@/components/Layout'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
export default function App({ Component, pageProps }: AppProps) {



  return (
    <Layout>
      <Script type="text/javascript" id="zsiqchat"
        dangerouslySetInnerHTML={{
          __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "c02d6e813d8d233cded78bcf37f2238dcf8e542750c12d318cc5c76b32f1bc3f", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com.au/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t)`,
        }}
      />










      <Component {...pageProps} />
    </Layout>
  )

}

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en_US">
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;600&family=Bai+Jamjuree:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_TRACKING_ID}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', '${GOOGLE_ANALYTICS_TRACKING_ID}');
                    `,
                }}
            /> */}

            {/*Global Site Tag (gtag.js) - Google Ads */}
            {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                    
                        gtag('config', '${GA_TRACKING_ID}');
                    `,
                }}
            /> */}

            {/* <script
                dangerouslySetInnerHTML={{
                    __html: `
                            (function(h,o,t,j,a,r){
                                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                                h._hjSettings={hjid:3572485,hjsv:6};
                                a=o.getElementsByTagName('head')[0];
                                r=o.createElement('script');r.async=1;
                                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                                a.appendChild(r);
                            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
                    `,
                }}
            /> */}

            <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml"/>
            <meta name="robots" content="index, follow"></meta>

            <meta name="description" content="Gerenciamos Anúncios, Criamos Sites, Sistemas e Design para o seu objetivo."/>
            <link rel="icon" type="image/x-icon" href="/icon.svg"/>

            <meta name="facebook-domain-verification" content="g8yp6iz97nsgjl1dxn46e34gxaot0s"></meta>
            <meta name="google-site-verification" content="Q5dGY-imD4ur2aZOKlLTgMCEIefxpB2AgWR36Ne2H2A"></meta>

            <meta name="category" content="Webdesign" />
            <link rel="index" title="Fine Floors" href="https://finefloorsus.com/"/>
            <link rel="logo" type="image/svg" href="/icon.svg"></link>
            <link rel="sitemap" type="application/xml" href="https://finefloorsus.com/sitemap.xml"></link>

            {/* <meta name="url" content="https://lanceconsorcio.com.br/"></meta> */}
            {/* <meta property="og:url" content="https://old.lanceconsorcio.com.br/blog"></meta> */}

            <meta property="og:site_name" content="Fine Floors"></meta>
            <meta property="og:locale" content="en_US"></meta>
            <meta property="og:title" content="Fine Floors - a company specialized in providing high-quality flooring installation services to transform your spaces into functional and long-lasting works of art."></meta>
            <meta property="og:description" content="A company specialized in providing high-quality flooring installation services to transform your spaces into functional and long-lasting works of art."></meta>

            <meta property="og:image" content="/card.jpg"></meta>
            <meta property="og:image:alt" content="Fine Floors - a company specialized in providing high-quality flooring installation services to transform your spaces into functional and long-lasting works of art."></meta>
            <meta property="og:app_id" content="ns67765jnmz8"></meta>
            <meta property="og:type" content="website"></meta>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

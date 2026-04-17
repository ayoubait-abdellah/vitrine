import './App.css'
import Navbar from './components/Navbar.tsx'
import Home from "./pages/Home.tsx";

function App() {

    return (
        <>
            <head>
                <script>(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5DSZL8LQ');
                </script>
                <!-- End Google Tag Manager -->
            </head>
            <body>
            <!-- Google Tag Manager (noscript) -->
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5DSZL8LQ"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe>
            </noscript>
            <!-- End Google Tag Manager (noscript) -->
            <Navbar/>
            <Home/>
            </body>
        </>
    )
}

export default App

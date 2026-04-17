import Projects from "../components/Projects.tsx";
import Contact from "../components/Contact.tsx";
import Hero from "../components/Hero.tsx";
import Footer from "../components/Footer.tsx";
import About from "../components/About.tsx";

export default function Home() {

    return (
        <main style={{backgroundColor: '#1c1c1e', minHeight: '100vh'}}>
            <Hero/>
            <Projects/>
            <About/>
            <Contact/>
            <Footer/>

        </main>
    )
}
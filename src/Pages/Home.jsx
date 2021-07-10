import { Container } from "reactstrap"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import { Element, animateScroll as scroll } from "react-scroll"
import { useEffect } from "react"

import Landing from "./Home/Landing"
import AboutMe from "./Home/AboutMe"

const Home = () => {
    const { scrollYProgress } = useViewportScroll()
    const sideBarColorsAnim = useTransform(scrollYProgress, [0, 0.5], ["#000000", "#ffffff"])
    const landingPageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const aboutMePageOpacity = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    useEffect(() => {
        scroll.scrollToTop({
            smooth: false,
            duration: 20
        });
    }, [])

    return (
        <>
            <Container fluid>
                <Landing opacity={landingPageOpacity} />
                <Element name="AboutMe"><AboutMe opacity={aboutMePageOpacity} /></Element>
            </Container>
            <motion.div 
                id="id-button-container" 
                className="side-button-container"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.25, type: "tween", delay: 2.5}}
            >
                <motion.p className="side-button no-select" style={{color: sideBarColorsAnim}}><a href="https://github.com/ArenaGrenade/ArenaGrenade.github.io/blob/main/files/Rohan_Asokan_Resume_SWE.pdf?raw=true" className="side-button-content" download>
                    Resume
                </a></motion.p>
            </motion.div>
            <motion.div 
                id="email-button-container" 
                className="side-button-container"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.25, type: "tween", delay: 2.5}}
            >
                <motion.p className="side-button no-select" style={{marginRight: "-10px", color: sideBarColorsAnim}}>
                    <a href="mailto:rohan.asokan@students.iiit.ac.in?subject=Hi! Rohan" className="side-button-content">
                        rohan.asokan@students.iiit.ac.in
                    </a>
                </motion.p>
            </motion.div>
        </>
    )
}

export default Home;

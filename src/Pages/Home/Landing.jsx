import { motion } from "framer-motion"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { scroller } from "react-scroll"

const Landing = ({opacity}) => {
    const scrollDown = ev => scroller.scrollTo("AboutMe", {
        duration: 1200,
        smooth: "easeInOutQuint"
    })

    return (
        <motion.div className="row h-100-custom d-flex flex-column justify-content-center align-items-center text-center" style={{opacity}}>
            <motion.p 
                id="landing-subtitle"
                initial={{y: -10, opacity: 0}}
                animate={{y: 10, opacity: 1}}
                transition={{duration: 1.25, type: "tween", delay: 1.25}}
                className="no-select"
            >
                Hi! I am
            </motion.p>
            <motion.h1 
                id="landing-title"
                initial={{y: -10, opacity: 0}}
                animate={{y: 10, opacity: 1}}
                transition={{duration: 1.25, type: "tween"}}
                className="no-select"
            >
                Rohan Asokan
            </motion.h1>
            <motion.button
                id="chevron"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.25, type: "tween", delay: 2.5}}
                onClick={scrollDown}
            >
                <FontAwesomeIcon icon={faChevronDown} size="2x" />
            </motion.button>
        </motion.div>
    )
}

export default Landing;

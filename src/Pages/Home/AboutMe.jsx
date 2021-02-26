import { Row, Col } from "reactstrap"
import { motion } from "framer-motion"

const AboutMe = ({opacity}) => {
    return (
        <Row className="h-100-custom d-flex flex-column justify-content-center align-items-center no-select">
            <Col md={6} xs={10} className="text-shadowed">
                <motion.p className="mt-4" id="about-me-title" style={{opacity}}>
                    About Me
                </motion.p>
                <motion.p className="about-me-paragraph" style={{opacity}}>
                    I am a full-stack developer who loves to see design in everything. 
                    As a side-effect of loving design I also am interested in shaders, 3D rendering and the best of them all - making games.
                </motion.p>
                <motion.p className="about-me-paragraph" style={{opacity}}>
                    I was born in a nice city called Vellore in India.
                    I did parts of my schooling in Vellore and Chennai.
                    And the other part of it in Abu Dhabi.
                    I am currently in my sophomore year doing my bachelors in Computer Science at the International Institute of Information Technology, Hyderabad.
                </motion.p>
                <motion.p className="about-me-paragraph" style={{opacity}}>
                    TL;DR I name my variables with camelCase - and that possibly tells a lot about me ;)
                </motion.p>
            </Col>
        </Row>
    )
}

export default AboutMe;

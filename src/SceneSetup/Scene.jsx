import { useThree, useFrame, useResource } from "react-three-fiber";
import { useEffect, Suspense } from "react";
import { useTransform, useViewportScroll } from "framer-motion"

import GalleryPlane from "./GalleryPlane";

const Scene = props => {
    const { gl, camera } = useThree();
    const pathRef = useResource();
    const { scrollYProgress } = useViewportScroll()
    const cameraPositionZ = useTransform(scrollYProgress, [0, 1], [1, 3.5])
    const cameraRotationY = useTransform(scrollYProgress, [0, 1], [0, -0.1 * Math.PI])

    useEffect(() => {
        camera.near = 0.1;
        camera.far = 1000;
        camera.fov = 75;
        camera.updateProjectionMatrix();
        gl.setSize(window.innerWidth, window.innerHeight);
        gl.setPixelRatio(window.devicePixelRatio);
    // eslint-disable-next-line
    }, []);

    useFrame(({gl, camera}) => {
        gl.setSize(window.innerWidth, window.innerHeight);
        gl.setPixelRatio(window.devicePixelRatio);

        camera.position.set(0, 0, cameraPositionZ.current);
        camera.rotation.set(0, cameraRotationY.current, 0);
    })

    return (
        <> 
            <Suspense fallback={null}>
                <GalleryPlane />
            </Suspense>
            {/*<axesHelper />*/}
            <path ref={pathRef} />
        </>
    )
};

export default Scene;

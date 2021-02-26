import RenderPlane from './RenderPlane';
import { useUpdate } from "react-three-fiber"
import * as THREE from "three"

const GalleryPlane = props => {
    const lightRef = useUpdate(light => {
        light.position.set(0, -1.5, 0);
        light.lookAt(0, -1.5, 2);
    }, []);
    const meshRef = useUpdate((mesh) => {
        mesh.position.set(0, -1.5, 0);
        mesh.rotation.set(Math.PI / 2, 0, 0);
    }, [])

    return (
        <>
            <RenderPlane {...props} />
            <rectAreaLight ref={lightRef} args={[0x0184a9, 3, 3, 1]} />
            <mesh ref={meshRef}>
                <planeGeometry args={[5, 5]} />
                <meshStandardMaterial args={[{ color: 0xFFFFFF, metalness: 0.6, roughness: 0.4, side: THREE.DoubleSide }]} />
            </mesh>
            {/*meshRef.current && <boxHelper args={[meshRef.current, 0x00FFFF]} />*/}
        </>
    )
}

export default GalleryPlane;

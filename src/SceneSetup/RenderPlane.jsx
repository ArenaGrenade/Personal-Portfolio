import { useResource, useFrame, useThree } from "react-three-fiber"
import { vertexShader, fragmentShader } from "./shaders"
import * as THREE from "three"

const RenderPlane = props => {
    const min_window_square_size = Math.min(window.innerWidth, window.innerHeight);
    const meshRef = useResource();
    const materialRef = useResource();
    const {clock} = useThree();

    const shader = true;

    useFrame(({camera}) => {
        meshRef.current?.position.set(0, props.y, 0);

        if (shader) {
            materialRef.current.onBeforeCompile = shader => materialRef.current.userData.shader = shader;
    
            if (materialRef.current.userData.shader) {
                const min_window_square_size = Math.min(window.innerWidth, window.innerHeight);
                const new_uniforms = {
                    resolution: new THREE.Vector2(min_window_square_size, min_window_square_size),
                    viewportSize: new THREE.Vector2(window.innerWidth, window.innerHeight),
                    time: clock.elapsedTime,
                }
                for (const [key, value] of Object.entries(new_uniforms)) {
                    materialRef.current.userData.shader.uniforms[key].value = value
                }
            }
        }
    })

    return(
        <>
            <mesh ref={meshRef}>
                <planeGeometry args={[3, 3, 3]} />
                {shader?
                    <rawShaderMaterial args={[{
                        uniforms: {
                            resolution: { value: new THREE.Vector2(min_window_square_size, min_window_square_size) },
                            viewportSize: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
                            time: { value: clock.elapsedTime },
                        },
                        vertexShader,
                        fragmentShader,
                    }]} ref={materialRef} />
                : <meshBasicMaterial args={[{color: 0xFFFF00}]} />}
            </mesh>
        </>
    )
}

export default RenderPlane;

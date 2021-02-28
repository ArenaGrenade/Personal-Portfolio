import { useResource, useFrame, useThree } from "react-three-fiber"
import { vertexShader, fragmentShader } from "./shaders"

const RenderPlane = props => {
    const meshRef = useResource();
    const materialRef = useResource();
    const {clock} = useThree();

    useFrame(() => {
        meshRef.current?.position.set(0, 0, 0);

        if (props.image == null) {
            materialRef.current.onBeforeCompile = shader => materialRef.current.userData.shader = shader;
    
            if (materialRef.current.userData.shader) {
                const new_uniforms = {
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
                <planeGeometry args={[4, 3, 3]} />
                {props.image == null?
                    <rawShaderMaterial args={[{
                        uniforms: {
                            time: { value: clock.elapsedTime },
                        },
                        vertexShader,
                        fragmentShader,
                    }]} ref={materialRef} />
                : <meshBasicMaterial args={[{map: props.image}]} />}
            </mesh>
        </>
    )
}

export default RenderPlane;

import React, { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Instances, Instance } from '@react-three/drei'
import { AdditiveBlending, MeshBasicMaterial, PlaneGeometry, SphereGeometry, Vector3 } from 'three';

const geometry = new PlaneGeometry(3, 3)
const sphere = new SphereGeometry(1, 64, 64)
const material = new MeshBasicMaterial({side: 2})
const pointsMaterial = new MeshBasicMaterial({ color: `hsl(${Math.random() * 360}, 100%, 50%)`, depthTest: false, blending: AdditiveBlending,})
const COLORS = [200, 111, 71, 297, 348]
const HomeScene = ({ count = 10000 }) => {
    const spritesRef = useRef<any[]>([]);
    const pointsRef = useRef<any>(null)
    const { scene, camera, viewport } = useThree()
    const sprites = useMemo(() => {
        return Array.from({ length: count / 2 }).map((_, i) => {
            const x = Math.random() * 1000 - 500;
            const y = Math.random() * 1000 - 500;
            const z = Math.random() * 1000 - 500;
            const scale = Math.random() * 2;
            return (
                <Instance
                    key={i}
                    /*@ts-ignore*/
                    ref={(mesh: any) => spritesRef.current.push(mesh)}
                    position={[x, y, z]}
                    scale={[scale, scale, 1]}
                    color={`hsl(${COLORS[i % 5] / 360}, 100%, 50%)`}
                />
            )
        })
    }, [count])

    const points = useMemo(() => {
        return Array.from({ length: count / 2 }).map((_, i) => {
            const x = Math.random() * 1000 - 500;
            const y = Math.random() * 1000 - 500;
            const z = Math.random() * 1000 - 500;
            const scale = Math.random() * 2;
            return (
                <Instance
                    key={i}
                    position={[x, y, z]}
                    scale={[scale, scale, 1]}
                />
            )
        })
    }, [count])
    useFrame((state, delta) => {
        const time = Date.now() * 0.00005;
        camera.position.x += ( (state.pointer.x * viewport.width) / 2 - camera.position.x ) * 0.01;
		camera.position.y += ( - (state.pointer.y * viewport.height) / 2 - camera.position.y ) * 0.01;
        camera.lookAt(scene.position);
        if (spritesRef.current) {
            for (let i = 0; i < spritesRef.current.length; i++) {
                spritesRef.current[i].rotation.y = time * ( i < 4 ? i + 1 : - ( i + 1 ) ) / 10;
                spritesRef.current[i].color.setHSL(COLORS[i % 5] / 360, 1, .5)
            }
        }
        if (pointsRef.current) {
            (pointsRef.current.material as MeshBasicMaterial).color.setHSL(COLORS[0] / 360, 1, .5)
        }
    })

    return (
        <>
        <Instances geometry={geometry} material={material}>
            { sprites }
        </Instances>
        <Instances geometry={sphere} material={pointsMaterial} ref={pointsRef}>
        { points }
        </Instances>
        </>
    )
}

export default HomeScene
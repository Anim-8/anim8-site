"use client"
import { useBVH, useCursor } from '@react-three/drei';
import React, { useRef, useState } from 'react'
import { BufferGeometry, Material, MeshPhysicalMaterial } from 'three'

type BrainComponentProps = {
    name: string;
    geometry: BufferGeometry;
    material: Material;
}

const hoverMaterial = new MeshPhysicalMaterial({ color: 0xade8f4, clearcoat: 1, metalness: .4, roughness: 0, })

const BrainComponent:React.FC<BrainComponentProps> = ({ name, geometry, material }) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const ref = useRef<any>()
    useCursor(hovered)
    useBVH(ref)
  return (
    <mesh 
        scale={10} 
        geometry={geometry} 
        material={hovered ? hoverMaterial : material} 
        ref={ref} 
        onPointerEnter={(e) => { e.stopPropagation(); setHovered(true);}} 
        onPointerLeave={(e) => { e.stopPropagation(); setHovered(false);}}
    />
  )
}

export default BrainComponent
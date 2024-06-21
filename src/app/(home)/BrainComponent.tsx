"use client"
import { StringNullable } from '@/custom-types';
import { hoverPhysicalMaterial } from '@/materials';
import { useBVH, useCursor } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import React, { useRef, useState } from 'react'
import { BufferGeometry, Material } from 'three'

type BrainComponentProps = {
    name: string;
    geometry: BufferGeometry;
    material: Material;
    onPointerEvent: (name: StringNullable) => void
}

const BrainComponent:React.FC<BrainComponentProps> = ({ name, geometry, material, onPointerEvent }) => {
    const [hovered, setHovered] = useState<boolean>(false)
    const ref = useRef<any>()
    useCursor(hovered)
    useBVH(ref)
    const handleHover = (e:ThreeEvent<PointerEvent>, hovered: boolean, name: StringNullable) => {
      e.stopPropagation(); 
      setHovered(hovered); 
      onPointerEvent(name);
    }
  return (
    <mesh 
        scale={10} 
        geometry={geometry} 
        material={hovered ? hoverPhysicalMaterial : material} 
        ref={ref} 
        onPointerEnter={(e) => handleHover(e, true, name)} 
        onPointerLeave={(e) => handleHover(e, false, null)}
    />
  )
}

export default BrainComponent
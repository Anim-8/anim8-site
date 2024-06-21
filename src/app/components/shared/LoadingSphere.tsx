"use client"
import React, { useRef } from 'react'
import { MeshStandardMaterial, SphereGeometry, Mesh } from 'three'

const sphere = new SphereGeometry(.2, 64, 64)
const material = new MeshStandardMaterial({ color: 0x00ffef, roughness: .1, metalness: .2 })

const LoadingSphere = () => {
  const ref = useRef<Mesh>(null)
  return <mesh geometry={sphere} material={material} ref={ref} />
}

export default LoadingSphere
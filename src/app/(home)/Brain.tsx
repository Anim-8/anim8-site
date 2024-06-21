"use client"
import { useGLTF } from '@react-three/drei'
import React, { useLayoutEffect, useMemo, useRef } from 'react'
import { Euler, Group, Mesh, MeshNormalMaterial } from 'three'
import BrainComponent from './BrainComponent';

const material = new MeshNormalMaterial()

const Brain = ({ url }: { url: string }) => {
  const ref = useRef<Group>(null)
  const { nodes } = useGLTF(`${url}`, true)
  const n = useMemo(() => Object.keys(nodes).filter(f => f !== "Scene").filter(n => (nodes[n] as Mesh)?.geometry?.isBufferGeometry).map((node, i) => <BrainComponent name={node} key={node + i} geometry={(nodes[node] as Mesh).geometry} material={material} />), [nodes])
  useLayoutEffect(() => {
    ref.current?.setRotationFromEuler(new Euler(0, 0.01, 0.015))
  }, [])
  return (
    <group ref={ref}>
      {n.map(n => n)}
    </group>
  )
}

export default Brain
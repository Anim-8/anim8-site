import { MeshNormalMaterial, MeshPhysicalMaterial } from "three";


const normalMaterial = new MeshNormalMaterial()
const hoverPhysicalMaterial = new MeshPhysicalMaterial({ color: 0xff3c00, clearcoat: 1, metalness: .8, roughness: 0, reflectivity: .4})


export { normalMaterial, hoverPhysicalMaterial }
import { useFrame } from "@react-three/fiber";
import { useCubeTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Panorama() {
  const texture = useCubeTexture(
    [
      "panorama_1.png", // px
      "panorama_3.png", // nx
      "panorama_4.png", // py
      "panorama_5.png", // ny
      "panorama_0.png", // pz
      "panorama_2.png", // nz
    ],
    {path: "/"}
  )

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame(({camera}) => {
    camera.rotation.y -= 0.0005
  })

  return <primitive object={texture} attach="background" />
}
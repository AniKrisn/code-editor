export const name = 'Sphere'

export const code = `const cx = 400, cy = 300
const scale3d = 200
const cameraZ = 2
const padding = 150

function project({ x, y, z }) {
  return { x: x / z, y: y / z }
}

function rotateX({ x, y, z }, a) {
  const c = Math.cos(a), s = Math.sin(a)
  return { x, y: y*c - z*s, z: y*s + z*c }
}

function rotateY({ x, y, z }, a) {
  const c = Math.cos(a), s = Math.sin(a)
  return { x: x*c + z*s, y, z: -x*s + z*c }
}

const minFactor = 1.62, maxFactor = 2.0

const numPoints = 160
const goldenRatio = (1 + Math.sqrt(5)) / 2

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
const sizes = ['s', 'm', 'l', 'xl']
const shapeIds = []
for (let i = 0; i < numPoints; i++) {
  shapeIds.push(canvas.createDot(cx, cy, {
    color: colors[i % 6],
    size: sizes[i % 4]
  }))
}

let time = 0
let angleX = 0, angleY = 0

const interval = setInterval(() => {
  time += 0.009
  angleX += 0.012
  angleY += 0.015

  const t = (1 - Math.cos(time * 0.5)) / 2
  const spiralFactor = minFactor + t * (maxFactor - minFactor)

  const points = []
  for (let i = 0; i < numPoints; i++) {
    const theta = spiralFactor * Math.PI * i / goldenRatio
    const phi = Math.acos(1 - 2 * (i + 0.5) / numPoints)
    points.push({
      x: Math.sin(phi) * Math.cos(theta),
      y: Math.cos(phi),
      z: Math.sin(phi) * Math.sin(theta),
      idx: i
    })
  }

  const breathe = 1 + 0.1 * Math.sin(time * 1.5)

  const updates = shapeIds.map((id, i) => {
    const pt = points[i]

    const wobbleX = Math.sin(time * 2 + pt.idx * 0.5) * 0.03
    const wobbleY = Math.cos(time * 1.7 + pt.idx * 0.3) * 0.03

    let p = {
      x: (pt.x + wobbleX) * breathe,
      y: (pt.y + wobbleY) * breathe,
      z: pt.z * breathe
    }

    p = rotateX(p, angleX)
    p = rotateY(p, angleY)

    const z = p.z + cameraZ
    const proj = project({ x: p.x, y: p.y, z })
    const screenX = cx + proj.x * scale3d
    const screenY = cy - proj.y * scale3d

    const depth = 1 - (p.z / breathe + 1) / 2

    const dotScale = 0.5 + depth * 1.5

    const colorIdx = Math.floor(time * 0.5 + pt.idx * 0.1) % 6

    return {
      id,
      type: 'draw',
      x: screenX,
      y: screenY,
      props: { color: colors[colorIdx], scale: dotScale },
      opacity: Math.min(1, Math.max(0, 0.3 + depth * 0.7))
    }
  })

  canvas.updateShapes(updates)
}, 50)

// Invisible bounding box to control zoom level
canvas.createRect(cx - scale3d - padding, cy - scale3d - padding, (scale3d + padding) * 2, (scale3d + padding) * 2, { opacity: 0 })


canvas.zoomToFit({ animation: { duration: 400 } })`

A split-view interface with a code editor and tldraw canvas.

## Getting Started

```bash
yarn
yarn dev
```

## Examples

Includes five demos: a clock, 3D sphere, watercolor flower, Game of Life, and a playable game of pool. These demonstrate the art of the possible!

## Canvas API

### Creating Shapes

```js
canvas.createRect(x, y, w, h, options);
canvas.createCircle(x, y, radius, options);
canvas.createEllipse(x, y, w, h, options);
canvas.createTriangle(x, y, w, h, options);
canvas.createDiamond(x, y, w, h, options);
canvas.createStar(x, y, w, h, options);
canvas.createHexagon(x, y, w, h, options);
canvas.createCloud(x, y, w, h, options);
canvas.createHeart(x, y, w, h, options);
canvas.createGeo(x, y, w, h, { geo: GEO.star, ...options });
canvas.createText(x, y, "Hello", options);
canvas.createNote(x, y, "Sticky note", options);
canvas.createArrow(fromX, fromY, toX, toY, options);
canvas.createFrame(x, y, w, h, options);
canvas.createDot(x, y, options);
canvas.createWatercolor(points, { color, style, size });
canvas.createBezier(x, y, { start, cp1, cp2, end });
```

### Shape Management

```js
canvas.getShape(id)
canvas.getAllShapes()
canvas.getGeneratedShapes()
canvas.updateShape(id, { x, y, props: {...} })
canvas.deleteShape(id)
canvas.deleteShapes([id1, id2])
canvas.clear()
```

### Selection

```js
canvas.select([id1, id2]);
canvas.selectAll();
canvas.selectNone();
canvas.getSelectedShapes();
canvas.getSelectedShapeIds();
```

### Grouping & Z-Order

```js
canvas.group([id1, id2]);
canvas.ungroup(groupId);
canvas.bringToFront(id);
canvas.sendToBack(id);
canvas.bringForward(id);
canvas.sendBackward(id);
```

### Camera

```js
canvas.getCamera();
canvas.setCamera({ x, y, z });
canvas.centerOnPoint({ x, y });
canvas.zoomIn();
canvas.zoomOut();
canvas.zoomToFit();
canvas.zoomToSelection();
canvas.resetZoom();
```

### Style Constants

```js
COLORS; // black, grey, white, red, orange, yellow, green, blue, violet
// light-red, light-green, light-blue, light-violet
FILLS; // none, semi, solid, pattern
DASHES; // draw, solid, dashed, dotted
SIZES; // s, m, l, xl
FONTS; // draw, sans, serif, mono
GEO; // rectangle, ellipse, triangle, diamond, pentagon, hexagon,
// octagon, star, rhombus, oval, trapezoid, cloud, heart,
// arrow-up, arrow-down, arrow-left, arrow-right, x-box, check-box
ARROWHEADS; // none, arrow, triangle, square, dot, pipe, diamond, inverted, bar
```

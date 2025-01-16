import block from "../types/block";

const terrainColors: { [key: string]: string } = {
    "meadow": "#00FF00",
    "lake": "#0000FF",
    "mountain": "#A9A9A9",
    "forest": "#228B22"
};

function getTerrainColor(terrain: string): string {
    return terrainColors[terrain] || "#FFFFFF"; // Default to white if terrain not found
}

function draw_block(block: block, ctx: CanvasRenderingContext2D, canvasSize: number) {
    ctx.fillStyle = getTerrainColor(block.terrain);
    ctx.fillRect(0, 0, 90 * canvasSize, 60 * canvasSize);
}

export default draw_block;
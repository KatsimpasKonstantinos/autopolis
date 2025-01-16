import React from 'react';
import draw_block from '../utils/draw_block';

const BlockGrid = ({ rows = 5, cols = 5, canvasSize = 100 }) => {
    const canvases = Array.from({ length: rows * cols });
    const canvas_width = canvasSize * 90;
    const canvas_height = canvasSize * 60;

    


    const draw = (canvas: HTMLCanvasElement | null) => {
        if (canvas) {
            const ctx = canvas.getContext('2d');
            draw_block({ terrain: 'meadow', extra_objects: [] }, ctx, canvasSize);
        }
    };

    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, ${canvas_width}px)`,
                gridTemplateRows: `repeat(${rows}, ${canvas_height}px)`,
                gap: '1px',
            }}
        >
            {canvases.map((_, index) => (
                <canvas
                    key={index}
                    ref={draw}
                    width={canvas_width}
                    height={canvas_height}
                    style={{
                        border: '1px solid #ccc',
                    }}
                />
            ))}
        </div>
    );
};

export default BlockGrid;

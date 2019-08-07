// 'use strict';

class Board {
    constructor () {
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }
    /**
     * Generates 2D array of spaces.
     * @return {Array}  An array of spaces objects
     */
    createSpaces () {
        const spaces = [];
        // ↓ The reason it's done this way instead of just creating 42 spaces
        //   is to make sure they're assigned the right (column, row) number (ie. (0,0) (0,1) ... (6,5))
        for (let x = 0; x < this.columns; x++) {
            const column = [];
            for (let y = 0; y < this.rows; y++) {
                const space = new Space(x, y);
                column.push(space);
            }
            spaces.push(column);
        }
        return spaces;
    }
    /**
     * Draws associated SVG spaces for all game spaces.
     */
    drawHTMLBoard () {
        for (let column of this.spaces) {
            for (let space of column) {
                space.drawSVGSpace();
            }
        }
    }
};
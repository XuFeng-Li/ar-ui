import React from 'react';

declare type ARSudokuPointValue = 0 | 1 | 2;
interface ARSudokuPoint {
    row: ARSudokuPointValue;
    column: ARSudokuPointValue;
}
interface ARSudokuProps {
    /**
     * 设置铺设点
     * */
    datumPoint?: ARSudokuPoint;
    /**
     * 铺设点发生改变时调用
     * */
    onChange?: (pointObj: ARSudokuPoint) => void;
}
declare const ARSudoku: React.FC<ARSudokuProps>;

export { ARSudoku, ARSudokuPoint, ARSudokuPointValue, ARSudokuProps };

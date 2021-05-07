import React, {useState} from 'react'

// @ts-ignore
import styles from "./index.module.scss";

const sudokoBoxWH = 44

export type ARSudokuPointValue = 0 | 1 | 2;

export interface ARSudokuPoint {
  row:ARSudokuPointValue,
  column:ARSudokuPointValue,
}
const limitRow = 3;
const limitColomn = 3;
const datumPoint:ARSudokuPoint = {row:1,column:1};

export interface ARSudokuProps {
  /**
   * 设置铺设点
   * */
  datumPoint?:ARSudokuPoint,
  /**
   * 铺设点发生改变时调用
   * */
  onChange?:(pointObj:ARSudokuPoint)=>void
}

export const ARSudoku: React.FC<ARSudokuProps> = ({...props}) => {

  const [location,setLocation] = useState<ARSudokuPoint>(()=>{
    const pointOjb = Object.create({});
    pointOjb["row"] = props.datumPoint?.row !== undefined ? props.datumPoint.row : 1;
    pointOjb["column"] = props.datumPoint?.column !== undefined ? props.datumPoint.column : 1;
    return pointOjb
  });

  const handleChange = (pointObj:ARSudokuPoint) => {
    if (pointObj.row === location.row && pointObj.column === location.column) {
      return
    }
    setLocation(pointObj);
    if (props.onChange) {
      props.onChange(pointObj);
    }
  }

  const renderNode = ()=>{
    const { column:colPoint, row:rowPoint } = datumPoint;
    const theVal = location
    const rowArr = new Array(limitRow).fill(limitRow)
    const colArr = new Array(limitColomn).fill(limitColomn)

    // 根据value中的横列index计算背景图偏移量
    // 0.1是因为bg缩小了92%。所以移动位置也要做调整，0.1是个初略值
    const offsetX = (theVal.column - colPoint + 0.1) * sudokoBoxWH + 'px'
    const offsetY =
      (theVal.row - rowPoint + 0.1) * sudokoBoxWH + 0.1 * sudokoBoxWH + 'px'
    const bgPos = {
      backgroundPositionX: offsetX,
      backgroundPositionY: offsetY
    }
    return (
      <div
        className={styles.sudoku}
        style={{ ...bgPos }}
      >
        {rowArr.map((item, index) => {
          return (
            <div className={styles["sudoku_row"]} key={item + index}>
              {colArr.map((itemCol, indexCol) => {
                return (
                  <div
                    className={styles["sudoku_col"]}
                    key={itemCol + indexCol}
                    onClick={()=>{
                      const pointObj = Object.create({});
                      pointObj["column"] = indexCol;
                      pointObj["row"] = index;
                      handleChange(pointObj);
                    }}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
  return renderNode()
}
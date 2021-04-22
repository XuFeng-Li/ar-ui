import React from 'react'
import styles from './index.module.scss'

const sudokoBoxWH = 44

export interface ARSudokuValue {
  columnIndex:number,
  rowIndex:number,
}

export interface ARSudokuProps {
  // 横轴，纵轴各多少
  config: { col:number, row:number, },
  // 基准点
  datumPoint: { colPoint:number, rowPoint:number, },
  value?:{ columnIndex:number, rowIndex:number, }
  onChange?:(value:ARSudokuValue)=>void,
  className?:string
}
interface ARSudokuState {
  value:{
    columnIndex:number,
    rowIndex:number,
  }
}

class ARSudoko extends React.PureComponent<ARSudokuProps,ARSudokuState> {
  static defaultProps = {
    config: {
      col: 3,
      row: 3
    },
    datumPoint: {
      colPoint: 1,
      rowPoint: 1
    },
    value: {
      columnIndex:1,
      rowIndex:1,
    },
  }

  constructor(props:ARSudokuProps) {
    super(props);
    this.state = {
      value:props.value || {columnIndex:1,rowIndex:1}
    }
  }

  handleChange(valueObj:ARSudokuValue) {
    this.setState({
      value: valueObj
    })
    if (this.props.onChange) {
      this.props.onChange(valueObj);
    }
  }

  render() {
    console.log("render ----------------------");
    const {
      config: { row, col },
      datumPoint: { colPoint, rowPoint },
    } = this.props
    const theVal = this.state.value
    const rowArr = new Array(row).fill('row')
    const colArr = new Array(col).fill('col')

    // 根据value中的横列index计算背景图偏移量
    // 0.1是因为bg缩小了92%。所以移动位置也要做调整，0.1是个初略值
    const offsetX = (theVal.rowIndex - colPoint + 0.1) * sudokoBoxWH + 'px'
    const offsetY =
      (theVal.columnIndex - rowPoint + 0.1) * sudokoBoxWH + 0.1 * sudokoBoxWH + 'px'
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
                      this.handleChange({
                        columnIndex:index,
                        rowIndex:indexCol
                      });
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
}
export default ARSudoko

import React, {useState} from 'react'

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
    if (props.datumPoint && props.datumPoint.column && props.datumPoint.row) {
      return props.datumPoint;
    }
    return datumPoint
  });

  const handleChange = (pointObj:ARSudokuPoint) => {
    if (pointObj.row === location.row && pointObj.column === location.column) {
      return
    }
    setLocation(pointObj);
  }

  const { column:colPoint, row:rowPoint } = datumPoint;
  const theVal = location
  const rowArr = new Array(limitRow).fill(limitRow)
  const colArr = new Array(limitColomn).fill(limitColomn)

  // 根据value中的横列index计算背景图偏移量
  // 0.1是因为bg缩小了92%。所以移动位置也要做调整，0.1是个初略值
  const offsetX = (theVal.row - colPoint + 0.1) * sudokoBoxWH + 'px'
  const offsetY =
    (theVal.column - rowPoint + 0.1) * sudokoBoxWH + 0.1 * sudokoBoxWH + 'px'
  const bgPos = {
    backgroundPositionX: offsetX,
    backgroundPositionY: offsetY
  }
  return (
    <div
    >
      123
    </div>
  )

  return (
    <div
      style={{
        width:'100%',
        height:'100%',
      }}
    >
      <div
        style={{
          width:'100%',
          height:'100%',
          backgroundColor:'#ABCD09'
        }}
      >
        <div
          className={styles['sudoku']}
          style={{
            ...bgPos,
            backgroundImage:"https://img.asman.com.cn/assets/1565683490873_2991.png",
          }}
        >
          {/*{*/}
          {/*  rowArr.map((_, sectionIndex) => {*/}
          {/*    return (*/}
          {/*      <div*/}
          {/*        key={(10000 + sectionIndex).toString()}*/}
          {/*        style={{*/}
          {/*          display:'flex',*/}
          {/*          flexDirection:'row',*/}
          {/*          flex:'1',*/}
          {/*          width:'100%',*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        {*/}
          {/*          colArr.map((_,rowIndex)=>{*/}
          {/*            return (*/}
          {/*              <div*/}
          {/*                key={(20000 + rowIndex).toString()}*/}
          {/*                style={{*/}
          {/*                  width:'44px',*/}
          {/*                  height:'44px',*/}
          {/*                  backgroundColor:'#FFFFFF',*/}
          {/*                }}*/}
          {/*              >*/}
          {/*                {rowIndex}*/}
          {/*              </div>*/}
          {/*            )*/}
          {/*          })*/}
          {/*        }*/}
          {/*      </div>*/}
          {/*    )*/}
          {/*  })*/}
          {/*}*/}
        </div>
      </div>
      <div>
        <ul>
          <li>{JSON.stringify(rowArr)}</li>
          <li>{JSON.stringify(colArr)}</li>
        </ul>
      </div>
      <button onClick={()=>{
        alert(`${JSON.stringify(location)}`);
      }}>显示参数</button>
    </div>
  )
}
import {ChangeEventHandler, CSSProperties, FC, ReactNode, useState} from 'react';
import {Input, Button} from 'antd';
import 'antd/lib/input/style';

export interface VerifyCodeProps {
  prefix?:ReactNode,
  styles?: CSSProperties,
  value?: string,
  onChange?: ChangeEventHandler,
  readyPost?: boolean,
  phoneNumber?: string,
}

export const VerifyCode: FC<VerifyCodeProps> = ({...props}) => {
  const {value,onChange,readyPost,phoneNumber} = props;
  const [lastTime, setLastTime] = useState(0)
  const counting = (time = 20) => {
    if (time < 0) return
    setLastTime(time)
    setTimeout(() => {
      counting(time - 1)
    }, 1000)
  }
  return (
    <div
      style={{
        display: 'inline-flex',
        width: '100%',
        alignItems: 'center'
      }}
    >
      <Input
        {...props}
        style={{
          marginRight: "5px",
          ...props.styles || {}
        }}
        value={value}
        onChange={onChange}
      />
      <div
        style={{
          flexShrink: 0,
          color: '#999',
          width: 100,
          height: 35,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {lastTime === 0 && (
          <Button
            disabled={!readyPost}
            block
            onClick={() => {
              if (phoneNumber) {
                console.log(`post code by phone number ${phoneNumber}`)
              }
              counting()
            }}
          >
            发送验证码
          </Button>
        )}
        {lastTime > 0 && <span>剩余{lastTime}秒</span>}
      </div>
    </div>
  )
}
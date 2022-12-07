import React, {forwardRef} from 'react';
// 定义类名前缀
const classPrefix = 'bc-button'

//原生的按钮的props 接口
type NativeButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export type IProps = {
  type?: 'default' | 'primary' | 'danger' | 'warning' | 'info' | 'text',
  size?: 'small' | 'middle' | 'large',
  loading?: boolean,
  loadingText?: string,
  disabled?: boolean,
  children?: string,
}
export type IRef = {
  nativeElement: HTMLButtonElement | null,
}

 const Button = forwardRef<IRef, IProps>((props, ref) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  )
})

export default Button

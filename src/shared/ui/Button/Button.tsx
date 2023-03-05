import { ReactNode } from 'react'
import * as styles from './Button.css'

export type ButtonProps = {
  children: ReactNode
  onClick: () => void
}

export const Button = ({ children, onClick }: ButtonProps) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
)

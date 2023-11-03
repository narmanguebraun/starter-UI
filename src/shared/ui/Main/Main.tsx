import { ReactNode } from 'react'
import * as styles from './Main.css'

type MainProps = {
  children: ReactNode
}

export function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>
}

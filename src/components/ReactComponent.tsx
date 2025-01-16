import type { FC, PropsWithChildren, ReactNode } from "react"


export const ReactComponent: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <>
    <h1>ReactComponent</h1>
    {children}
  </>
}

import React from 'react'
import { Layout as AntLayout } from 'antd';
import { StyledLayout } from "./index"

type Props = {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <StyledLayout>
        <AntLayout.Content style={{ height: '100%'}}>
            {children}
        </AntLayout.Content>
    </StyledLayout>
  )
}

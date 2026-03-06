import React from 'react'
import { Layout as AntLayout } from 'antd';
import { StyledLayout } from "./style"
import { Header } from '../header';

type Props = {
    children: React.ReactNode
}

export const Layout = ({children}: Props) => {
  return (
    <StyledLayout>
        <Header></Header>
        <AntLayout.Content style={{ height: '100%'}}>
            {children}
        </AntLayout.Content>
    </StyledLayout>
  )
}

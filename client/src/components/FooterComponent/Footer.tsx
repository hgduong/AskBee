import React from 'react'
import {Layout } from 'antd';

const {Footer} = Layout;

export const FooterPage = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>
        AskBee ©{new Date().getFullYear()} Created by AskBee
      </Footer>
  )
}

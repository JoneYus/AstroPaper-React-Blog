/*
 * @Author: yuqiang qiang.yu@paat.com
 * @Date: 2023-03-24 10:35:18
 * @LastEditors: yuqiang qiang.yu@paat.com
 * @LastEditTime: 2023-05-08 11:25:23
 * @FilePath: \react18\my-react-app\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useEffect, useState } from 'react'
import Router from './routers'
import { HashRouter } from "react-router-dom";
import useTheme from './hooks/useTheme'
import { RootState, useSelector } from "@/redux";

import './routers'

function App(props: any) {
  const themeConfig = useSelector((state: RootState) => state.global.themeConfig)
  useTheme(themeConfig)

  return (
    <HashRouter>
      <Router />
    </HashRouter>
  )
}

export default App

/*
 * @Author: yuqiang qiang.yu@paat.com
 * @Date: 2023-05-05 14:16:58
 * @LastEditors: yuqiang qiang.yu@paat.com
 * @LastEditTime: 2023-05-05 15:13:13
 * @FilePath: \react18\my-react-app\src\layouts\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import Header from './components/Header'
import { Outlet } from "react-router-dom";
import styles from './index.module.less'

type Props = {}

const LayoutIndex = (props: Props) => {
    return (
        <div className={styles.layoutContainer}>
            <Header />
            <Outlet />
        </div>
    )
}

export default LayoutIndex
/*
 * @Author: yuqiang qiang.yu@paat.com
 * @Date: 2023-03-24 11:08:00
 * @LastEditors: yuqiang qiang.yu@paat.com
 * @LastEditTime: 2023-05-06 15:49:06
 * @FilePath: \react18\my-react-app\src\routers\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { lazy } from "react";
import { Navigate, useRoutes } from 'react-router-dom'
import { RouteObject } from './interface'
import LayoutIndex from '../layouts'
import Home from '@/pages/Home'
import Images from '@/pages/imagesIndex'
import Tags from '@/pages/Tags'
import About from '@/pages/About'

export const rootRouter: any = [
    {
        path: "/",
        element: <Navigate to="/home" />
    },
    {
        path: "/",
        element: <LayoutIndex />,
        meta: {
            title: "主页",
        },
        children: [
            {
                path: "/Home",
                element: <Home />,
            },
            {
                path: "/Images",
                element: <Images />,
            },
            {
                path: "/Tags",
                element: <Tags />,
            },
            {
                path: "/About",
                element: <About />,
            },
        ]
    }
]


const Router = () => {
    const routes = useRoutes(rootRouter)
    return routes;
}


export default Router;
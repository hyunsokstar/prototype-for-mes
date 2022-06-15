import React, { useEffect, useState } from 'react'
import { MenuNavComponent, MenuNavItem, MenuText, SideMenuItem } from '../../styles/styledComponents'

export const POINT_COLOR: string = '#19B9DF' as const

type IMenu = 'HOME' | 'BASIC' | 'MES' | 'PMS' | 'WMS' | 'UMS' | 'SETTING' | "CNC" | ""

interface IProps {
    pageType?: IMenu,
    subType?: number
}



function MenuNavigation({ pageType, subType }: IProps) {
    const [menuType, setMenuType] = useState<IMenu>(pageType ?? "")

    const changeMenuType = (selectType: IMenu) => {
        setMenuType(selectType)

    }

    return (
        <div style={{ display: 'flex' }}>
            <MenuNavComponent >
                <div>
                    <MenuNavItem style={{ backgroundColor: menuType === "HOME" ? "skyblue" : undefined }} onClick={() => {
                        changeMenuType("HOME")
                    }}>
                        <MenuText>HOME</MenuText>
                    </MenuNavItem>
                    <MenuNavItem style={{ backgroundColor: menuType === "BASIC" ? "skyblue" : undefined }} onClick={() => {
                        changeMenuType("BASIC")
                    }}>
                        <MenuText>기준정보관리</MenuText>
                    </MenuNavItem>
                    <MenuNavItem style={{ backgroundColor: menuType === "MES" ? "skyblue" : undefined }} onClick={() => {
                        changeMenuType("MES")
                    }}>
                        <MenuText>MES</MenuText>
                    </MenuNavItem>
                    <MenuNavItem style={{ backgroundColor: menuType === "PMS" ? "skyblue" : undefined }} onClick={() => {
                        changeMenuType("PMS")
                    }}>
                        <MenuText>PMS</MenuText>
                    </MenuNavItem>
                </div>
            </MenuNavComponent >
        </div >
    )
}

export default MenuNavigation
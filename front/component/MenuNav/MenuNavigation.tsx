import React, {useEffect, useState} from 'react'
import { MenuNavComponent, MenuNavItem, MenuText, SideMenuItem } from '../../styles/styledComponents'

export const POINT_COLOR: string = '#19B9DF' as const

type IMenu = 'HOME' | 'BASIC' | 'MES' | 'PMS' | 'WMS' | 'UMS' | 'SETTING' | "CNC" | ""

interface IProps {
    pageType?: IMenu,
    subType?: number
}



function MenuNavigation({ pageType, subType }: IProps) {
    const [menuType, setMenuType] = useState<IMenu>(pageType ?? "")


    return (
        <div style={{ display: 'flex' }}>
            <MenuNavComponent >
                <div>
                    <MenuNavItem style={{backgroundColor: menuType === "HOME" ? "skyblue" : undefined}} >
                        <MenuText>HOME</MenuText>
                    </MenuNavItem>
                    <MenuNavItem >
                        <MenuText>기준정보관리</MenuText>
                    </MenuNavItem>
                    <MenuNavItem >
                        <MenuText>MES</MenuText>
                    </MenuNavItem>
                    <MenuNavItem >
                        <MenuText>PMS</MenuText>
                    </MenuNavItem>
                </div>
            </MenuNavComponent>
        </div>
    )
}

export default MenuNavigation
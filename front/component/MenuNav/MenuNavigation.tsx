import React from 'react'
import { MenuNavComponent, MenuNavItem, MenuText, SideMenuItem } from '../../styles/styledComponents'

export const POINT_COLOR: string = '#19B9DF' as const


function MenuNavigation() {

    return (
        <div style={{ display: 'flex' }}>
            <MenuNavComponent>
                <div>
                    <MenuNavItem >
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
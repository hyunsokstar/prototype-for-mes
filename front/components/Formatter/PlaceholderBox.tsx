import React from "react";
import styled from "styled-components";
// import {IExcelHeaderType} from "../../common/@types/type";
// import settingRowColor from "../../Functions/settingRowColor";

interface IProps {
    row: any
    column: any
    setRow: (row: any) => void
}

const PlaceholderBox = ({ row, column, setRow }: IProps) => {
    return (
        <Background row={row}>
            <p style={{ padding: 0, color: '#ffffff', opacity: row[column.key] ? 1 : column.type === 'autoInput' ? .5 : .3, textAlign: 'center', width: '100%' }}>
                {row[column.key] ? row[column.key] : column.placeholder}
            </p>
        </Background>
    )
}

const Background = styled.div<any>`
    background:${({ row }) => {
        return "red";
    }};
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    height:100%;
    padding: 0 8px;
    margin:0;
`;

export { PlaceholderBox };



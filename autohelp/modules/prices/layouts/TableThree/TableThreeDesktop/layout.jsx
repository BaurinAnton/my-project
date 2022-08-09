import { useContext } from 'react'

import { PriceContext } from '/contexts'
import style from './style.module.scss'

export const TableThreeDesktop = () => {
    const { TABLE_THREE: { TITLE,
        COLUMN_ONE,
        COLUMN_TO,
        COLUMN_THREE,
        COLUMN_FOUR
    } } = useContext(PriceContext)
    const columnOne = COLUMN_ONE.map((list) => (
        <div className={style.items} key={list.id}>{list.CONTENT}</div>
    ))
    const columnTo = COLUMN_TO.map((list) => (
        <div className={style.items} key={list.id}>{list.CONTENT}</div>
    ))
    const columnThree = COLUMN_THREE.map((list) => (
        <div className={style.items} key={list.id}>{list.CONTENT}</div>
    ))
    const columnFour = COLUMN_FOUR.map((list) => (
        <div className={style.items} key={list.id}>{list.CONTENT}</div>
    ))
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <p>{TITLE[0].TITLE}</p>
            </div>
            <div className={style.table}>
                <div className={style.column}>
                    <div className={style.row}>
                        {COLUMN_ONE[0].TITLE}
                    </div>
                    <div className={style.row}>{columnOne}</div>
                </div>
                <div className={style.column}>
                    <div className={style.row}>
                        {COLUMN_TO[0].TITLE}
                    </div>
                    <div className={style.row}>{columnTo}</div>
                </div>
                <div className={style.column}>
                    <div className={style.row}>
                        {COLUMN_THREE[0].TITLE}
                    </div>
                    <div className={style.row}>{columnThree}</div>
                </div>
                <div className={style.column}>
                    <div className={style.row}>
                        {COLUMN_FOUR[0].TITLE}
                    </div>
                    <div className={style.row}>{columnFour}</div>
                </div>
            </div>
        </div>
    )
}
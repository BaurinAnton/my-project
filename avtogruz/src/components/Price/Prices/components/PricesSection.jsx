import React from 'react'
import PricesStyle from '../scss/PricesStyle.module.scss'
import PriceDoc from '../doc/price.docx'

export const PricesSection = ({
    oneList,
    twoList,
    threeList,
    fourList,
    fiveList,
    sixList,
    sevenList,
    eightList,
    nineList,
    loadingAndUnloadingOperations,
    headerList,
}) => {
    const oneListContent = oneList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const twoListContent = twoList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const threeListContent = threeList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const fourListContent = fourList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const fiveListContent = fiveList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const sixListContent = sixList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const sevenListContent = sevenList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const eightListContent = eightList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const nineListContent = nineList.map((list) =>
        <span key={list.id}>{list.content}</span>
    )
    const headerListContent = headerList.map((list) =>
        <h4 key={list.id} className={PricesStyle.headerList}>{list.content}</h4>
    )

    return (
        <section className={PricesStyle.Prices}>
            <div className={PricesStyle.wrapper}>
                <div className={PricesStyle.row}>
                    <h2>Цены</h2>
                </div>
                <div className={PricesStyle.row}>
                    <div className={PricesStyle.column}>
                        {headerListContent[0]}
                        <div className={PricesStyle.column_grid}>
                            {oneListContent}
                        </div>
                        <p>{loadingAndUnloadingOperations}</p>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[1]}
                        <div className={PricesStyle.column_grid}>
                            {twoListContent}
                        </div>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[2]}
                        <div className={PricesStyle.column_grid}>
                            {threeListContent}
                        </div>
                        <p>{loadingAndUnloadingOperations}</p>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[3]}
                        <div className={PricesStyle.column_grid}>
                            {fourListContent}
                        </div>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[4]}
                        <div className={PricesStyle.column_grid}>
                            {fiveListContent}
                        </div>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[5]}
                        <div className={PricesStyle.column_grid}>
                            {sixListContent}
                        </div>
                    </div>
                    <div className={PricesStyle.column}>
                        {headerListContent[6]}
                        <div className={PricesStyle.column_grid}>
                            {sevenListContent}
                        </div>
                        <p>{loadingAndUnloadingOperations}</p>
                    </div>
                    <div className={PricesStyle.column}>
                        <div>
                            {headerListContent[7]}
                            <div className={PricesStyle.column_grid}>
                                {eightListContent}
                            </div>
                            {headerListContent[8]}
                            <div className={PricesStyle.column_grid}>
                                {nineListContent}
                            </div>
                        </div>
                        <div className={PricesStyle.button}>
                            <a href={PriceDoc}>{'Скачать таблицу'}</a>
                            <span className={PricesStyle.buttonBorder}></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
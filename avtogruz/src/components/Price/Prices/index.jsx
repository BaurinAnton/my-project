import React from 'react'
import { PricesSection } from './components/PricesSection'

export const Prices = () => {
    const oneList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '1500-1800 руб' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '50 руб/км + 1300 руб ПР*' },
        { id: 5, content: 'за пределами города свыше 80 км' },
        { id: 6, content: '50 руб/км' },
        { id: 7, content: 'перевозка в Москву до пересечения Волгоградского пр-кта с МКАД' },
        { id: 8, content: '10000 руб + по Москве 50 руб/км' }
    ]
    const twoList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '1800-2200 руб' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '50 руб/км + 1500 руб ПР*' },
        { id: 5, content: 'за пределами города свыше 80 км' },
        { id: 6, content: '50 руб/км' },
        { id: 7, content: 'перевозка в Москву до пересечения Волгоградского пр-кта с МКАД' },
        { id: 8, content: '10000 руб + по Москве 50 руб/км' }
    ]
    const threeList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '2000 руб' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '50 руб/км + 1500 руб ПР*' },
        { id: 5, content: 'за пределами города свыше 80 км' },
        { id: 6, content: '50 руб/км' },
        { id: 7, content: 'перевозка в Москву до пересечения Волгоградского пр-кта с МКАД' },
        { id: 8, content: '10000 руб + по Москве 50 руб/км' }
    ]
    const fourList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '2500 руб' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '50 руб/км + 1500 руб ПР*' },
        { id: 5, content: 'за пределами города свыше 80 км' },
        { id: 6, content: '50 руб/км' },
    ]
    const fiveList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '4000-6000 руб' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '60 руб/км + 1500 руб ПР*' },
        { id: 5, content: 'один час простоя у заказчика' },
        { id: 6, content: '600 рублей' },
    ]
    const sixList = [
        { id: 1, content: 'перевозка внутри города' },
        { id: 2, content: '6000-8000 руб + ПР*' },
        { id: 3, content: 'за пределами города до 80 км' },
        { id: 4, content: '120 руб/км, не менее 6000 руб + ПР*' },
        { id: 5, content: 'перевозка автопоезда' },
        { id: 6, content: '120 руб/км, не менее 8000 руб + ПР*' },
    ]
    const sevenList = [
        { id: 1, content: 'погрузочные работы' },
        { id: 2, content: '1000-5000 руб' },
        { id: 3, content: 'установка на вилки транспортировочные' },
        { id: 4, content: '1000 руб' },
        { id: 5, content: 'демонтаж кардана' },
        { id: 6, content: '1500-2000 руб' },
        { id: 7, content: 'растормаживание стояночной тормозной системы' },
        { id: 8, content: '2000 руб' },
        { id: 9, content: 'сцеп-расцеп автопоезда' },
        { id: 10, content: '1000 руб' },
        { id: 11, content: 'сложные погрузочно-разгрузочные работы' },
        { id: 12, content: '2000 руб' },
        { id: 13, content: 'работа лебедкой' },
        { id: 14, content: '2000 руб/час' },
    ]
    const eightList = [
        { id: 1, content: 'за пределами города до 80 км' },
        { id: 2, content: '60 руб/км + 1500 руб ПР*' },
    ]
    const nineList = [
        { id: 1, content: 'один час простоя у заказчика' },
        { id: 2, content: '1000 руб' },
        { id: 3, content: 'ложный вызов' },
        { id: 4, content: '40 руб/км' },
        { id: 5, content: 'холостой пробег до заказчика' },
        { id: 6, content: '45 руб/км' },
    ]
    const loadingAndUnloadingOperations = '*ПР — погрузочно-рагрузочные работы'
    const headerList = [
        { id: 1, content: 'Легковой автомобиль до 3 тонн' },
        { id: 2, content: 'Легковой автомобиль от 3 до 5 тонн' },
        { id: 3, content: 'Спецтехника (Бобкэт, Каток)' },
        { id: 4, content: 'Маршрутные такси (Форд, Пежо)' },
        { id: 5, content: 'Грузовики малые' },
        { id: 6, content: 'Грузовики, автобусы более 5 тонн' },
        { id: 7, content: 'Погрузочно-разгрузочные работы' },
        { id: 8, content: 'Трактора (МТЗ-80, 82, ЮМЗ)' },
        { id: 9, content: 'Дополнительно' },
    ]

    return (
        <main>
            <PricesSection
            oneList={oneList}
            twoList={twoList}
            threeList={threeList}
            fourList={fourList}
            fiveList={fiveList}
            sixList={sixList}
            sevenList={sevenList}
            eightList={eightList}
            nineList={nineList}
            loadingAndUnloadingOperations={loadingAndUnloadingOperations}
            headerList={headerList}
        />
        </main>
    )
}
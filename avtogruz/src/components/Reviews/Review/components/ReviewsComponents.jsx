import React from 'react'
import ReviewsStyle from '../scss/reviewsStyle.module.scss'

export const ReviewsComponents = () => (
    <main>
        <section className={ReviewsStyle.Reviews}>
            <div className={ReviewsStyle.wrapper}>
                <h2>Отзывы наших клиентов</h2>
                <div className={ReviewsStyle.Yandex}><iframe title='title' className={ReviewsStyle.Iframe} src="https://yandex.ru/maps-reviews-widget/1332502947?comments"></iframe></div>
            </div>
        </section>
    </main>
)
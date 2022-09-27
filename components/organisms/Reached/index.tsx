import React from 'react'
import ReachedItem from '../../moleculs/ReachedItem'

export default function Reached() {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem title='290M+' desc='Players Top Up' />
                    <ReachedItem title='12.500' desc='Games Available' />
                    <ReachedItem title='99,9%' desc='Happy Players' />
                    <ReachedItem title='4.7' desc='Rating Worldwide' verticalLine={false} horizontalLine={false} />
                </div>
            </div>
        </section>

    )
}

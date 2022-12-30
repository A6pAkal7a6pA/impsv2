import React from 'react'
import { Color, Title } from '../../ui/title/Title'

export const Team = () => {
    return (
        <div className="team">
            <div className="team__inner">
                <Title color={Color.GOLD} text="Team" />
                <div className="team__people">

                </div>
            </div>
        </div>
    )
}

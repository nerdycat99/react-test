import React from 'react'
import image from '../images/shop.jpg';


class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <img src={image} className="hero--image" alt="shop" />
                <h3 className="hero--title">Level Two Queen Victoria Building Sydney</h3>
                <p className="hero--description">Open Tuesday - Sunday, 11am - 5pm</p>
            </section>
        )
    }
}

export { Hero }

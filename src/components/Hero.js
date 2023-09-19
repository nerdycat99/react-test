import React from 'react'
import image from '../images/undercons.jpg';


class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                {/* <img src={image} className="hero--image" alt="shop" /> */}
                <img src={image} className="hero--image" alt="shop" />
                <h4 className="hero--title">Australian Glass, coming soon...</h4>
                {/* <h4 className="hero--title">Level Two Queen Victoria Building Sydney</h4> */}
                {/* <p className="hero--description">Open Tuesday - Sunday, 11am - 5pm</p> */}
            </section>
        )
    }
}

export { Hero }

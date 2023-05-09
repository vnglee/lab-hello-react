import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

import Images from "./Images"


const Icons = () => {

    return (
        <div className="iconsRow">

        <div>
            <Images source={icon1} specificClass="iconImages" />
            <h2>Declarative</h2>
            <p>Reach makes it painless to create interactive UIs.</p>
        </div>

        <div>
            <Images source={icon2} specificClass="iconImages" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state</p>
        </div>

        <div>
            <Images source={icon3} specificClass="iconImages" />
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components</p>
        </div>

        <div>
            <Images source={icon4} specificClass="iconImages" />
            <h2>JSX</h2>
            <p>Statically-types designed to run on modern browsers</p>
        </div>


        </div>
    )
}

export default Icons
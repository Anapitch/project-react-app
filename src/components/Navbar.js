import React, { Component } from 'react'
import Navitems from './Navitems'


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    render() {
        return (
            <nav>
                <ul>
                    <Navitems item="Home Page" tolink="/"></Navitems>
                    <Navitems item="The attraction" tolink="attraction"></Navitems>
                    <Navitems item="Animal" tolink="animal"></Navitems>
                    <Navitems item="Water resources" tolink="water"></Navitems>
                </ul>
            </nav>

        )
    }
}

export default Navbar;
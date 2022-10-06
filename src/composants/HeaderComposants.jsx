/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class HeaderComponents extends Component {

    constructor(props){
        super(props)

        this.state = {
            
        }
    }
    
    render() {
        return (
            <div>
                <header>
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <div className="container">
                                <a className="navbar-brand" href="#"> Gestion des ventes  </a>
                                
                            </div>
                        </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponents;
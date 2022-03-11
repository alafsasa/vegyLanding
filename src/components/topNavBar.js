import React from "react";

class TopNavBar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-sm fixed-top" style={{backgroundColor: '#17b978', fontFamily: 'Saira'}}>
                    <div className="container-fluid">
                        <div className="navbar-brand" style={{fontWeight: 'bold', color: '#fff'}}>VEGY</div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <button className="nav-link btn" style={{color: 'white'}}>Shop</button>
                            </li>
                            <li className="nav-item mx-4">
                                <button className="nav-link btn" style={{color: 'white', border: '2px solid #fff'}}>Dowload App</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default TopNavBar;
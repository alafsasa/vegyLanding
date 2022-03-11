import React from "react";
import mobileveg from '../images/vv.png';

class LandingHeader extends React.Component{
    constructor(props){
        super(props);
        this.state = {windowWidth: undefined};
    }
    handleResize = () => this.setState({windowWidth: window.innerWidth});
    componentDidMount(){
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.handleResize)
    }
    render(){
        return(
            <div>
                {
                    this.state.windowWidth >= 900 ? (
                        <div className="container-fluid" style={{backgroundColor: '#17b978', fontFamily: 'Saira'}}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="" style={{paddingTop: '150px'}}>
                                        <div>
                                            <p style={{fontSize: '21px', color: '#023020'}}>Shop online with <strong>VEGY</strong> grocery store.</p>
                                            <p style={{fontSize: '32px', fontWeight: 'bold', color: '#fff'}}>Ease shopping of fruits and Vegetables <br/> from comfort of your home.</p>
                                            <p style={{fontSize: '14px', fontWeight: 'bold', color: '#023020'}} >Produce sold are sourced fresh from farms and well <br/> known grocery vendors  all over Dubai.</p>
                                            <div className="clearfix">
                                                <div className="float-end">
                                                    <div style={{position: 'absolute', zIndex: 1, top: '150px', right: '90px'}}>
                                                        <img src={mobileveg} alt="Mobile Mockup" width="300px" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <button className="btn" style={{backgroundColor: '#7CFC00', color: '#023020', fontWeight: 'bold'}}>DOWNLOAD NOW</button>
                                            </div>
                                            <div className="mt-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container-fluid" style={{backgroundColor: '#17b978', fontFamily: 'Saira'}}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="" style={{paddingTop: '150px'}}>
                                        <div>
                                            <p style={{fontSize: '21px', color: '#023020'}}>Shop online with <strong>VEGY</strong> grocery store.</p>
                                            <p style={{fontSize: '32px', fontWeight: 'bold', color: '#fff'}}>Ease shopping of fruits and Vegetables <br/> from comfort of your home.</p>
                                            <p style={{fontSize: '14px', fontWeight: 'bold', color: '#023020'}} >Produce sold are sourced fresh from farms and well <br/> known grocery vendors  all over Dubai.</p>
                                            <div className="clearfix">
                                                <div className="text-center mt-5">
                                                    <div style={{}}>
                                                        <img src={mobileveg} alt="Mobile Mockup" width="300px" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-3">
                                                <button className="btn" style={{backgroundColor: '#7CFC00', color: '#023020', fontWeight: 'bold'}}>DOWNLOAD NOW</button>
                                            </div>
                                            <div className="mt-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default LandingHeader;
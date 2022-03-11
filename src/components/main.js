import React from "react";
import vegdubs from '../images/vegdubs.png';
import master from '../images/master.png';
import visa from '../images/visa.png';
import applePay from '../images/apple-pay.png';
import googlePay from '../images/google-pay.png';
import paypal from '../images/paypal.png';
import cod from '../images/cod.png';

class MainInterface extends React.Component{
    constructor(props){
        super(props)
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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="" style={{fontFamily: 'Lobster Two', fontSize: '48px', paddingTop: '130px', color: '#023020'}}>
                                        <div style={{paddingLeft: '80px'}}>
                                            <img src={vegdubs} alt="AD1" width="300" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{paddingTop: '110px'}}></div>
                                <div className="col-sm-12" style={{fontFamily: 'Saira'}}>
                                    <div style={{borderLeft: '4px solid #17b978'}}>
                                        <div className="mx-3">
                                            <h4 style={{fontWeight: 'bold'}}>About Vegy</h4>
                                            <p>
                                                <span style={{fontSize: '26px'}}>V</span>egy is an online grocery store whose aim is to ease shopping of fruits and vegetables from the comfort of your home.
                                                 We source our products from farms and well known grocery vendors from all over Dubai and avail it to you fresh and
                                                 timely whenever you need it. Deliveries are currently free but we only deliver within Dubai for now. We will reach
                                                 out to all other states across the country soon.
                                                 The mobile app is available on both <strong>IOS</strong> and <strong>Android</strong> platforms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12" style={{fontFamily: 'Saira'}}>
                                    <div className="mt-4">
                                        <p className="mx-3">
                                            The app is simple to use and allows up to six (6) payment methods including.
                                        </p>
                                        <div className="container text-center">
                                            <div className="row">
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '100px'}} className="">
                                                            <img src={master} alt="master card"/>
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Master card</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '100px'}} className="">
                                                            <img src={visa} alt="visa card" height="100" />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Visa Card</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '100px'}} className="">
                                                            <img src={applePay} alt="apple pay" height="100" />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Apple pay</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '100px'}} className="">
                                                            <img src={googlePay} alt="apple pay" height="100" />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Google pay</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '83px'}} className="mt-3">
                                                            <img src={paypal} alt="apple pay" height="60" />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Paypal</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 p-1">
                                                    <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                                        <div style={{height: '83px'}} className="mt-3">
                                                            <img src={cod} alt="apple pay" height="60" />
                                                        </div>
                                                        <div className="card-body">
                                                            <h4 className="card-title">Cash on Delivery</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{paddingTop: '48px'}}></div>
                                        <div style={{borderLeft: '4px solid #17b978'}}>
                                            <div className="mx-3">
                                                <h4 style={{fontWeight: 'bold'}}>NOTE</h4>
                                                <p>
                                                    All prices include a 5% VAT as per the Dubai government tax laws. All payments done using cash on
                                                    delivery method incur an extra 5AED.
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{paddingTop: '48px'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="text-center" style={{fontFamily: 'Lobster Two', fontSize: '48px', paddingTop: '60px', color: '#023020'}}>
                                        <div style={{}}>
                                            <img src={vegdubs} alt="AD1" width="300" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{paddingTop: '60px'}}></div>
                                <div className="col-sm-12" style={{fontFamily: 'Saira'}}>
                                    <div style={{borderLeft: '4px solid #17b978'}}>
                                        <div className="mx-3">
                                            <h4 style={{fontWeight: 'bold'}}>About Vegy</h4>
                                            <p>
                                                <span style={{fontSize: '26px'}}>V</span>egy is an online grocery store whose aim is to ease shopping of fruits and vegetables from the comfort of your home.
                                                 We source our products from farms and well known grocery vendors from all over Dubai and avail it to you fresh and
                                                 timely whenever you need it. Deliveries are currently free but we only deliver within Dubai for now. We will reach
                                                 out to all other states across the country soon.
                                                 The mobile app is available on both <strong>IOS</strong> and <strong>Android</strong> platforms.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12" style={{fontFamily: 'Saira'}}>
                                    <div className="mt-4">
                                        <p className="mx-3">
                                            The app is simple to use and allows up to six (6) payment methods including.
                                        </p>
                                        <div className="card" style={{border: 0, boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                                            <div className="card-body">
                                                <table className="table table-borderless">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <img src={master} alt="master card" height="40" />
                                                            </td>
                                                            <td className="pt-3">Master card</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={visa} alt="visa" height="40" />
                                                            </td>
                                                            <td className="pt-3">Visa card</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={applePay} alt="apple pay" height="40" />
                                                            </td>
                                                            <td className="pt-3">Apple pay card</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={googlePay} alt="google pay" height="40" />
                                                            </td>
                                                            <td className="pt-3">Google pay</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={paypal} alt="paypal" height="40" />
                                                            </td>
                                                            <td className="pt-3">Paypal</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <img src={cod} alt="COD" height="40" />
                                                            </td>
                                                            <td className="pt-3">Cash on Delivery</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div style={{paddingTop: '48px'}}></div>
                                        <div style={{borderLeft: '4px solid #17b978'}}>
                                            <div className="mx-3">
                                                <h4 style={{fontWeight: 'bold'}}>NOTE</h4>
                                                <p>
                                                    All prices include a 5% VAT as per the Dubai government tax laws. All payments done using cash on
                                                    delivery method incur an extra 5AED.
                                                </p>
                                            </div>
                                        </div>
                                        <div style={{paddingTop: '48px'}}></div>
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

export default MainInterface;
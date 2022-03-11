import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="container-fluid" style={{backgroundColor: '#17b978', color: '#fff', fontFamily: 'Saira'}}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="text-center mt-4">
                            <h4>For any inquiry send an email to <strong>support@vegy.store</strong></h4>
                            <div style={{paddingTop: '40px'}}></div>
                            <div style={{fontSize: '14px'}}>
                                <p>This mobile application is a product of Futurenow L.L.C developed by team_254.</p>
                                <p>Terms and conditions appply | Privacy Policy | Download App</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <p style={{fontSize: '12px'}}>
                            &copy; 2022
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
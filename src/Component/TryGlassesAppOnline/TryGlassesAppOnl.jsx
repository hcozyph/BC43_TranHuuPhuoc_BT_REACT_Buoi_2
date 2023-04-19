import React, { Component } from "react";
import "../../assets/data.js/dataGlasses.json"

const dateGlasses = []



export default class TryGlassesAppOnl extends Component {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    render() {
        return (
            <div id="page-cover">
                <h5
                    id="page-title"
                    className="text-center py-3 text-light mb-0 "
                >
                    TRY GLASSES APP ONLINE
                </h5>
                <div className="container">
                    <div className=" mx-5 pt-4">
                        <div className="before-and-after gap-4">
                            <div className="glasses-model">
                                <div className="glasses-info">
                                    <h4>FENDI</h4>
                                    <p className="mb-0 pb-0">Lorem ipsum dolor sit amet.</p>
                                </div>
                                <img src="./img/glassesImage/v1.png" alt="" id="glasses-selected" width={"140px"} />
                            </div>
                            <div className="glasses-model">
                            </div>
                        </div>
                    </div>
                    <div
                        className="row mx-5 alert alert-light rounded-4 mt-4 mb-0  "
                        id="glasses-list"
                    >
                        {/* 1 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v1.png" alt="" />
                        </btn>
                        {/* 2 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v2.png" alt="" />
                        </btn>
                        {/* 3 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v3.png" alt="" />
                        </btn>
                        {/* 4 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v4.png" alt="" />
                        </btn>
                        {/* 5 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v5.png" alt="" />
                        </btn>
                        {/* 6 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v6.png" alt="" />
                        </btn>
                        {/* 7 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v7.png" alt="" />
                        </btn>
                        {/* 8 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option">
                            <img src="./img/glassesImage/v8.png" alt="" />
                        </btn>
                        {/* 9 */}
                        <btn className="btn col-lg-2 col-md-4 col-sm-6 col-xs-4 option">
                            <img src="./img/glassesImage/v9.png" alt="" />
                        </btn>
                    </div>
                    <div
                        className="py-lg-4 py-md-3 py-sm-5
                    "
                    ></div>
                </div>
            </div>
        );
    }
}

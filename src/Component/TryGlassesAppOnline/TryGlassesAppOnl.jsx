import React, { Component } from "react";
import { dataGlasses } from "../../assets/data/data";
import Cart from "../Cart";
console.log(dataGlasses);
export default class TryGlassesAppOnl extends Component {
    state = {
        glassesDemo: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./glassesImage/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
        },
        arrGioHang: [
            {
                id: 1,
                price: 30,
                name: "GUCCI G8850U",
                url: "./glassesImage/v1.png",
                desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
                quantity: 1,
            },
        ],
    };

    //addToCart
    addToCart = (itemClick) => {
        console.log(itemClick);
    };
    //End-addToCart

    //renderDataGlasses
    renderDataGlasses = () => {
        return dataGlasses.map((glasses, index) => {
            return (
                <btn
                    key={index}
                    onClick={() => {
                        this.changeGlasses(glasses);
                    }}
                    className="btn col-lg-2 col-md-4 col-sm-6 col-xs-6 option"
                >
                    <img src={glasses.url} alt="" />
                </btn>
            );
        });
    };
    //End-renderDataGlasses

    //changeGlasses
    changeGlasses = (newChange) => {
        this.setState({
            glassesDemo: newChange,
        });
    };
    //End-changeGlasses

    //------FIRSTLY-----//
    render() {
        let { price, name, url, desc } = this.state.glassesDemo;
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
                                    <div className="d-flex">
                                        <h4>{name} - </h4>
                                        <h4 className="mx-2">{price}$</h4>
                                    </div>
                                    <p className="mb-0 pb-0">{desc}</p>
                                </div>
                                <img
                                    src={url}
                                    alt=""
                                    id="glasses-selected"
                                    width={"140px"}
                                />
                                {/* <button
                                    className="btn btn-dark text-warning fw-bold border-warning addToCart"
                                    onClick={this.addToCart()}
                                >
                                    ADD TO CART
                                </button> */}
                            </div>
                            <div className="glasses-model"></div>
                        </div>
                    </div>
                    <div
                        className="row mx-5 alert alert-light rounded-4 mt-4 mb-0"
                        id="glasses-list"
                    >
                        {this.renderDataGlasses()}
                    </div>
                    <Cart arrGioHang={this.state.arrGioHang}></Cart>
                </div>
            </div>
        );
    }
}

import React, { Component } from "react";

export default class Cart extends Component {
    renderCart = () => {
        let { arrGioHang } = this.props;
        return arrGioHang.map((sp) => {
            return (
                <tr key={sp.id}>
                    <td>{sp.id}</td>
                    <td>{sp.name}</td>
                    <td>
                        <img src={sp.url} alt="" width={50} height={25} />
                    </td>
                    <td>{sp.price}$</td>
                    <td>
                        <button className="mx-2 btn btn-primary fw-bold">
                            -
                        </button>
                        {sp.quantity}
                        <button className="mx-2 btn btn-primary fw-bold">
                            +
                        </button>
                    </td>
                    <td>{sp.price * sp.quantity}$</td>
                    <td>
                        <button className="mx-2 btn btn-danger fw-bold">
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };
    render() {
        // let { arrGioHang } = this.props;

        return (
            <div>
                {/* Cart */}
                <div className="py-lg-4 py-md-3 py-sm-5">
                    <h2 className="alert text-warning bg-dark text-center w-75 fs-3 mx-auto">
                        CART
                    </h2>
                    <table className="table bg-light mb-5 text-center">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>{this.renderCart()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

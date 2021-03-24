import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';

class DishDetail extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                   {this.props.passedSelectedDish}
                </div>
                <div className="col-12 col-md-5 m-1">
                   {this.props.passedComments}
                </div>
            </div>
        );
    }
}

export default DishDetail;
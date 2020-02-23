import React from 'react';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

    function RenderComments({comments}) {
        if(comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <div className="list-unstyled">
                    {comments.comments.map(comment => {
                        return (<div>
                                    <p>{comment.comment}</p>
                                    <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                                </div>
                        );
                    })}
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
                );
            }
    }

    function RenderDish({dish}) {
        if(dish != null) {
            return (
                    <Card>
                        <CardImg width="100%" object src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>
                                {dish.name}
                            </CardTitle>
                            <CardText>
                                {dish.description}
                            </CardText>
                        </CardBody>
                    </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        return (
            <div className="container" >
                <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.dish} />
                        </div>
                </div>
            </div>
        )
    }

export default DishDetail;
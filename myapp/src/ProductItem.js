import React, { Component } from 'react';

class ProductItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            isEdit:false
        };

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);

    }

    onDelete(){
        console.log(this.props.name);
        this.props.onDelete(this.props.name);
    }

    onEdit(){
        this.setState({
            isEdit : true
        });
    }

    onEditSubmit(event){
        event.preventDefault();

        console.log(this.nameInput.value , this.priceInput.value);
        this.props.onEditSubmit(this.nameInput.value , this.priceInput.value , this.props.name);

        this.setState({
            isEdit:false
        });
    }


    render() {
        return (
            <div>
                {
                    this.state.isEdit?
                        <div>
                            <form onSubmit={this.onEditSubmit}>
                                <h3> Edit item </h3>
                                <input  ref = { nameInput => this.nameInput = nameInput} defaultValue={this.props.name} />
                                <input  ref = { priceInput => this.priceInput = priceInput} defaultValue={this.props.price} />
                                <button>Save</button>
                            </form>
                        </div>
                        :

                        <div>
                            <span>{this.props.name}</span>||||
                            <span>{this.props.price}</span>||||
                            <span><button onClick={this.onDelete}>Delete</button></span>||||
                            <span><button onClick={this.onEdit}>Edit</button></span>
                        </div>
                }




            </div>
        );
    }




}

export default ProductItem;

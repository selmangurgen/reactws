import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddItem from './AddItem';

const products = [
    {
        name:"iPad",
        price: 200
    },
    {
        name:"iPhone",
        price: 650
    }
];

localStorage.setItem('products', JSON.stringify(products));

class CrudApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            products : [],
            error: null,
            isLoaded: false,
        };


        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    componentWillMount(){
        const products2 = JSON.parse(localStorage.getItem('products'));
        let prod = [];
        this.setState({ products:products2 });

        fetch("https://httpbin.org/get?name=msi&price=2500111111111111111111111111")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.args);
                    this.onAdd(result.args.name,result.args.price)
                    this.setState({
                        isLoaded: true
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )

    }

    onDelete(name){
        let products2 = this.state.products;
        console.log("selman");

        const filteredProducts = products2.filter(product => {
            return product.name !== name;
        });

        this.setState({
            products: filteredProducts
        });

    }

    onAdd(name,price){
        console.log("Name=> " + name + " Price=> "+ price);
        let products = this.state.products;

        products.push({name,price});

        this.setState({
            products: products
        });
    }

    onEditSubmit(name,price,oldName){
        console.log("SELMAN");
        console.log("Edit Name=> " + name + " Edit Price=> "+ price);

        let products2 = this.state.products;

        products2.map(product => {
            if(product.name === oldName) {
                product.name = name;
                product.price = price;
            }
        });

        this.setState({
            products: products2
        });

    }


    render() {

        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        } else {

            return (
                <div>
                    <AddItem
                        onAdd={this.onAdd}
                    />
                    <h1>Products</h1>
                    {
                        this.state.products.map(product => {
                            return (

                                <ProductItem onDelete={this.onDelete}
                                             onEditSubmit={this.onEditSubmit}
                                             key={product.name} {...product} />

                            )
                        })
                    }

                </div>
            );
        }

    }




}

export default CrudApp;

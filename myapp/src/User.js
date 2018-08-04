import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    name : PropTypes.string.isRequired,
    age : PropTypes.any.isRequired
};

const defaultProps = {
    age: 22
}

class User extends Component {

    constructor(props){
        super(props);

        this.state = {
            maas:2000,
            isHidden: false
        };

        this.updateMaas =this.updateMaas.bind(this);
        this.onClick =this.onClick.bind(this);

        //list: ['Alim','Saliha'] ;
    }

    componentWillMount(){ //ajax requestleri için kullanılabilir
        console.log("Will Mount");

    }

    componentDidMount(){
        console.log("Did Mount");

    }

    componentWillUpdate(nextProps,nextState){
        console.log(this.props,this.state,nextProps,nextState);

    }

    componentDidUpdate(prevProps,prevState){
        console.log(this.props,this.state,prevProps,prevState);

    }


    onClick(){
        console.log("tuşa basıldıııııııııııııı");

        this.setState({ isHidden: !this.state.isHidden });
    }

    updateMaas(event){
        this.setState({ maas: event.target.value });
    }


    render() {
        return (
            <div>
                <h1>Name:{this.props.name}</h1>
                <h2>Age:{this.props.age}</h2>
                <h2>Height:{this.props.height}</h2>
                {
                    this.state.isHidden?
                        <div>

                            <input onChange = {this.updateMaas}
                                   value = {this.state.maas} />
                            <button onClick={this.onClick}>Hide</button>
                        </div>:
                        <div><button onClick={this.onClick}>Show</button></div>
                }
                <div onClick={this.props.onClick}> Click </div>



            </div>
        );
    }
}

User.propTypes = propTypes;
User.defaultProps = defaultProps;

export default User;
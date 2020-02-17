import React from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product1InCart: false,
      productCount: 0
    }
  }

  componentDidMount() {
    console.log("successfully mount");
  }

  product1Clicked = () => {
    if(this.state.product1InCart){
      let newCount = this.state.productCount - 1;
      this.setState({
        product1InCart: false,
        productCount: newCount
      });
    }
    else{
      let newCount = this.state.productCount + 1;
      this.setState({
        product1InCart: true,
        productCount: newCount
      });
    }
  }

  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-light bg-dark">
          <a className="navbar-brand " href="#"><img src="./images/logo.png" height="100" width="100" alt="logo" /></a>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            {"Cart (" + this.state.productCount+ ")"}
          </button>
        </nav>
        <br />
        <br />
        <h5>PRODUCTS</h5>
        <br />
        <br />
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: 300, margin: 20 }}>
              <div className="row">
                <img src="./images/shoe.jpeg" height="100" width="100" style={{ margin: 20 }} alt="shoe" />
                <h5> Men's Footwear </h5>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-success" onClick={this.product1Clicked}>
                  {this.state.product1InCart ? "Remove" : "Add To Cart"}
                </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: 300, margin: 20 }}>
              <div className="row">
                <img src="./images/mat.jpeg" height="100" width="100" style={{ margin: 20 }} alt="mat" />
                <h5>Home Furnishings </h5>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-success">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: 300, margin: 20 }}>
              <div className="row">
                <img src="./images/jewellery.jpeg" height="100" width="100" style={{ margin: 20 }} alt="jewellery" />
                <h5>Jewellery Sets</h5>
              </div>
              <div className="card-body">
                <button type="button" class="btn btn-outline-success">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: 300, margin: 20 }}>
              <div className="row">
                <img src="./images/dress.jpeg" height="100" width="100" style={{ margin: 20 }} alt="dress" />
                <h5>Women's Clothing </h5>
              </div>
              <div className="card-body">
                <button type="button" className="btn btn-outline-success">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <button className="btn btn-outline-success my-2 my-sm-0" id="checkout-btn" type="submit" style={{ float: "right" }}>CHECK OUT</button>
        </div>
      </div>

    );
  }
}

export default App;

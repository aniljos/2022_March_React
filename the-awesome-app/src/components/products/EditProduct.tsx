import React, { ChangeEvent, Component } from "react";
import { Product } from "../../models/Product";

interface EditProductProps {
  product: Product;
  onCancel: (message: string) => void;
  onSave: (product: Product) => void;
}

interface EditProductState {
  currentProduct: Product | null;
}

class EditProduct extends Component<EditProductProps, EditProductState> {
  state: EditProductState = {
    currentProduct: null,
  };

  constructor(props: EditProductProps) {
    super(props);
    this.state.currentProduct = props.product;
    console.log("[EditProduct] constructor");
  }

  // static getDerivedStateFromProps(nextProps: EditProductProps, currentState: EditProductState){

  //     //if there is a state change then return the new state
  //     if(nextProps.product.id !== currentState.currentProduct?.id){
  //         return {
  //             currentProduct: nextProps.product
  //         }
  //     };

  //     //if there is no state change return null
  //     return null;
  // }

  save = () => {

    if(this.state.currentProduct){
        this.props.onSave(this.state.currentProduct);
    }
    

  };
  cancel = () => {
    this.props.onCancel("Operation cancelled");
  };

  componentWillUnmount() {
    console.log("EditProduct componentWillUnmount");
  }

  handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.value;
    if (this.state.currentProduct) {

      const copy_of_product = { ...this.state.currentProduct };
      copy_of_product.name = name;
      this.setState({
        currentProduct: copy_of_product,
      }); 
    }
  };
  handleDescChange = (e: ChangeEvent<HTMLInputElement>) => {
    const desc = e.target.value;
    if (this.state.currentProduct) {

      const copy_of_product = { ...this.state.currentProduct };
      copy_of_product.description = desc;
      this.setState({
        currentProduct: copy_of_product,
      }); 
    }
  };

  handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const price = e.target.value;
    if (this.state.currentProduct) {

      const copy_of_product = { ...this.state.currentProduct };
      copy_of_product.price = parseFloat(price);
      this.setState({
        currentProduct: copy_of_product,
      }); 
    }
  };

  invoke(){
    alert("Updating product: " + this.state.currentProduct?.name);
  }

  render(): React.ReactNode {
    //destucturing
    const { currentProduct } = this.state;

    return (
      <div>
        <h3>EditProduct : {currentProduct?.id}</h3>

        <div>
          <label htmlFor="name">Name</label>
          <input id="name" value={currentProduct?.name} onChange={this.handleNameChange}/>
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input id="price" type="number" value={currentProduct?.price} onChange={this.handlePriceChange}/>
        </div>

        <div>
          <label htmlFor="desc">Description</label>
          <input id="desc" value={currentProduct?.description} onChange={this.handleDescChange}/>
        </div>
        <div>
          <button onClick={this.save}>Save</button>&nbsp;
          <button onClick={this.cancel}>Cancel</button>
        </div>
      </div>
    );
  }
}
export default EditProduct;

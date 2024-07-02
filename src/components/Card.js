import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './contextProvider';
import { useContext } from 'react';

export const Card = () => {

const{product,quantity,increaseqty,decreaseqty,setQuantity,setCartItems} = useContext(CartContext);

// const discountPrice = Math.round(
//     e.price * (e.discountPercentage / 100)
//   ); 

// const TotalAmount = 
// [e.price-discountPrice]*quantity;

    return (
        <div className='container'>
            {product.map((e,id)=>{

                // Calculate discount price
        const discountPrice = Math.round(e.price * (e.discountPercentage / 100));
        // Calculate final price per item after discount
        const finalPrice = e.price - discountPrice;
        // Calculate total amount for the quantity of the product
        const totalAmount = finalPrice * quantity;
        const removeItemFromCart = (productId) => {
            setCartItems((prevItems) =>
              prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: 0, price: 0 } : item
              )
            );
            setQuantity(0);
          }



        return(
            <div
                key={id}
                className="card mb-5 bg-light text-dark"
                style={{ minWidth: "100%", maxWidth: "300px" }}
            >
                <div className="row g-0">
                    
                    <div className="col-md-3">
                        <img
                            src={e.image}
                            className="img-fluid p-4 cardImage"
                            alt="..."
                        />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body px-3">
                            <div className="top">
                                <div className="top-header d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{e.title}</h5>
                                    <h4 className="card-title">${e.price}</h4>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="card-text">
                                        <b>Brand : </b>
                                        {e.brand}
                                    </p>
                                    <p className="card-text text-success">
                                        Discount Offer : <b>{e.discountPercentage}%</b>
                                    </p>

                                </div>
                                <p className="card-text">{e.description}</p>
                                <p className="card-text text-success">
                                    In Stock : {e.stock}
                                </p>
                                <p className="card-text">
                                    <b>Rating:</b> {e.rating}
                                </p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="card-text">
                                    <small className="text text-muted">Sale</small>
                                </p>

                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary"
                                        style={{ marginRight: "20px" }} 
                                        onClick={()=>(
                                        removeItemFromCart()
                                        )
                                        }
                                    >
                                        Remove
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        style={{ marginRight: "8px" }}
                                        onClick={()=>(
                                            decreaseqty()
                                        )}
                                    >
                                        {" "}
                                        -{" "}
                                    </button>
                                    <div className="py-1 quantityText">{quantity}</div>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success"
                                        style={{ marginLeft: "8px" }}
                                        onClick={()=>(
                                            increaseqty()
                                        )}
                                    >
                                        {" "}
                                        +{" "}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div>
                        <div className="d-flex justify-content-between align-items-center">
                      Original Price (1 item) :{" "}
                      <p className="card-text">${e.price} </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Discount Amount :{" "}
                      <p className="card-text text-success">
                        {" "}
                        - ${discountPrice}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Final Price :{" "}
                      <p className="card-text">${finalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Total Amount :{" "}
                      <h5 className="card-text">${totalAmount}</h5>
                    </div>
                  </div>
                         </div>
                       
                    </div>
                </div>
        )
                
           
})}
        </div>

    )
}

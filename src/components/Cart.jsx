// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, increaseQuantity, decreaseQuantity, setCartItems } from '../redux/cartSlice';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../Header';
// import Head from '../Head';
// import Subscribe from '../Subscribe';
// import Footer from '../Footer';
// import Payment from '/icons/Payment.jpg';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const quantities = useSelector((state) => state.cart.quantities);
//   const dispatch = useDispatch();
//   const [isInitialLoad, setIsInitialLoad] = useState(true); // Track initial load

//   // Fetch cart from DB on component mount
//   useEffect(() => {
//     const loadCart = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/cart');
//         const data = response.data;
//         const cartItems = Array.isArray(data) ? data : data.cart || [];
        
//         if (cartItems) {
//           // Initialize quantities with correct values from the DB
//           const newQuantities = {};
//           cartItems.forEach((item) => {
//             newQuantities[item.id] = item.quantities || 1; // Default quantity to 1 if not available
//           });
//           dispatch(setCartItems({ items: cartItems, quantities: newQuantities }));
//         } else {
//           console.error('Cart data is undefined or not in expected format:', data);
//         }
//       } catch (error) {
//         console.error('Failed to fetch cart items:', error);
//       }
//     };

//     loadCart();
//   }, [dispatch]);

//   // Update database when quantities change
//   useEffect(() => {
//     if (!isInitialLoad) {
//       // Loop through cart items and update the database
//       cartItems.forEach((item) => {
//         updateCartInDB(item.id, quantities[item.id]);
//       });
//     } else {
//       setIsInitialLoad(false); // Skip the first run (initial load)
//     }
//   }, [quantities, cartItems, isInitialLoad]);

//   const updateCartInDB = async (id, quantity) => {
//     try {
//       const updatedItem = {
//         quantities: quantity,
//       };

//       // Send the updated item data to the backend using Axios
//       const response = await axios.patch(`http://localhost:3000/cart/${id}`, updatedItem, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Cart updated successfully:', response.data);
//     } catch (error) {
//       console.error('Error updating cart in DB:', error);
//     }
//   };

//   const removeItemFromDB = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/cart/${id}`);
//       console.log('Item removed from database:', response.data);
//     } catch (error) {
//       console.error('Error removing item from DB:', error);
//     }
//   };

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeItem(item.id)); // Dispatch removeItem action to update Redux store
//     removeItemFromDB(item.id); // Remove item from the database
//   };

//   const handleIncreaseQuantity = (item) => {
//     dispatch(increaseQuantity(item.id)); // Dispatch increaseQuantity action
//   };

//   const handleDecreaseQuantity = (item) => {
//     dispatch(decreaseQuantity(item.id)); // Dispatch decreaseQuantity action
//   };

//   const totalPrice = cartItems?.reduce((total, item) => {
//     return total + item.price * quantities[item.id];
//   }, 0).toFixed(2);

//   return (
//     <>
//       <div>
//         <Header />
//         <Head />
//         <div>
//           <div className="py-12 w-full px-80">
//             {cartItems.length === 0 ? (
//               <div className="text-center">
//                 <p className="flex text-3xl font-bold justify-center items-center mb-12">Your Cart is Empty</p>
//                 <Link
//                   className="font-bold rounded-full px-7 py-5 text-center text-white bg-[#586A4D]" to="/collections/sofas">CONTINUE SHOPPING
//                 </Link>
//                 <p className="flex text-xl font-bold justify-center items-center mt-16">Have an account?</p>
//                 <p className="flex text-lg justify-center items-center mt-4">
//                   <a href="/login" target="_blank" className="underline">Log in</a>
//                   &nbsp;to checkout Faster.
//                 </p>
//               </div>
//             ) : (
//               <div>
//                 <div><p className="text-3xl font-bold pb-8">Your Cart ({cartItems.length})</p></div>
//                 <div className="grid grid-cols-2">
//                   <div>
//                     {cartItems.map((item) => (
//                       <div key={item.id} className="grid">
//                         <div className="grid grid-cols-3 grid-rows-2">
//                           <div className="w-40">
//                             <img src={item.image} alt={item.title} />
//                           </div>
//                           <div>
//                             <p className="font-bold">{item.title}</p>
//                             <p>Size: {item.size}</p>
//                             <p>Price: ${item.price} </p>
//                             <p>Color: {item.color}</p>
//                           </div>
//                           <div className="font-semibold text-lg text-right">
//                             ${(item.price * quantities[item.id]).toFixed(2)}
//                           </div>

//                           <div></div>
//                           <div className="bg-zinc-100 flex justify-between rounded-lg items-center h-10 w-36 px-3">
//                             <button onClick={() => handleDecreaseQuantity(item)} className="font-bold text-xl">-</button>
//                             <p>{quantities[item.id]}</p>
//                             <button onClick={() => handleIncreaseQuantity(item)} className="font-bold text-xl">+</button>
//                           </div>
//                           <div onClick={() => handleRemoveFromCart(item)} className="h-10 cursor-pointer flex items-center justify-end">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="w-7 h-7">
//                               <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="currentColor"></path>
//                             </svg>
//                           </div>

//                         </div>  
//                         <div className="w-full text-gray-400 mb-5"><hr /></div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="ps-12">
//                     <div className="bg-zinc-100 p-8 ms-36 space-y-5 rounded-lg">
//                       <p className="text-2xl font-bold">Order Summary</p>
//                       <div className="flex justify-between">
//                         <p className="text-xl">Total</p>
//                         <p className="text-xl font-semibold">{totalPrice} AUD</p>
//                       </div>
//                       <button className="bg-[#586A4D] w-full py-3 rounded-full mt-1 font-bold text-white cursor-pointer">SECURE CHECKOUT</button>
//                       <div className="flex justify-center">
//                         <img src={Payment} alt="Payment" width="auto" height="auto" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <Subscribe />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;


//  Trying to make responsive

// import { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeItem, increaseQuantity, decreaseQuantity, setCartItems } from '../redux/cartSlice';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Header from '../Header';
// import Head from '../Head';
// import Subscribe from '../Subscribe';
// import Footer from '../Footer';
// import Payment from '/icons/Payment.jpg';

// const Cart = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const quantities = useSelector((state) => state.cart.quantities);
//   const dispatch = useDispatch();
//   const [isInitialLoad, setIsInitialLoad] = useState(true); // Track initial load

//   // Fetch cart from DB on component mount
//   useEffect(() => {
//     const loadCart = async () => {
//       try {
//         const response = await axios.get('http://localhost:3000/cart');
//         const data = response.data;
//         const cartItems = Array.isArray(data) ? data : data.cart || [];
        
//         if (cartItems) {
//           // Initialize quantities with correct values from the DB
//           const newQuantities = {};
//           cartItems.forEach((item) => {
//             newQuantities[item.id] = item.quantities || 1; // Default quantity to 1 if not available
//           });
//           dispatch(setCartItems({ items: cartItems, quantities: newQuantities }));
//         } else {
//           console.error('Cart data is undefined or not in expected format:', data);
//         }
//       } catch (error) {
//         console.error('Failed to fetch cart items:', error);
//       }
//     };

//     loadCart();
//   }, [dispatch]);

//   // Update database when quantities change
//   useEffect(() => {
//     if (!isInitialLoad) {
//       // Loop through cart items and update the database
//       cartItems.forEach((item) => {
//         updateCartInDB(item.id, quantities[item.id]);
//       });
//     } else {
//       setIsInitialLoad(false); // Skip the first run (initial load)
//     }
//   }, [quantities, cartItems, isInitialLoad]);

//   const updateCartInDB = async (id, quantity) => {
//     try {
//       const updatedItem = {
//         quantities: quantity,
//       };

//       // Send the updated item data to the backend using Axios
//       const response = await axios.patch(`http://localhost:3000/cart/${id}`, updatedItem, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       console.log('Cart updated successfully:', response.data);
//     } catch (error) {
//       console.error('Error updating cart in DB:', error);
//     }
//   };

//   const removeItemFromDB = async (id) => {
//     try {
//       const response = await axios.delete(`http://localhost:3000/cart/${id}`);
//       console.log('Item removed from database:', response.data);
//     } catch (error) {
//       console.error('Error removing item from DB:', error);
//     }
//   };

//   const handleRemoveFromCart = (item) => {
//     dispatch(removeItem(item.id)); // Dispatch removeItem action to update Redux store
//     removeItemFromDB(item.id); // Remove item from the database
//   };

//   const handleIncreaseQuantity = (item) => {
//     dispatch(increaseQuantity(item.id)); // Dispatch increaseQuantity action
//   };

//   const handleDecreaseQuantity = (item) => {
//     dispatch(decreaseQuantity(item.id)); // Dispatch decreaseQuantity action
//   };

//   const totalPrice = cartItems?.reduce((total, item) => {
//     return total + item.price * quantities[item.id];
//   }, 0).toFixed(2);

//   return (
//     <>
//       <div className="scroll-smooth max-w-screen overflow-x-hidden">
//         <Header />
//         <Head />
//         <div>
//           <div className="py-6 md:py-12 w-full px-4 md:px-80">
//             {cartItems.length === 0 ? (
//               <div className="text-center">
//                 <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-12">Your Cart is Empty</p>
//                 <Link
//                   className="font-bold rounded-full px-5 py-3 md:px-7 md:py-5 text-white bg-[#586A4D] inline-block" to="/collections/sofas">CONTINUE SHOPPING
//                 </Link>
//                 <p className="text-lg md:text-xl font-bold mt-8 md:mt-16">Have an account?</p>
//                 <p className="text-base md:text-lg mt-2 md:mt-4">
//                   <a href="/login" target="_blank" className="underline">Log in</a>
//                   &nbsp;to checkout Faster.
//                 </p>
//               </div>
//             ) : (
//               <div>
//                 <div>
//                   <p className="text-2xl md:text-3xl font-bold pb-4 md:pb-8">Your Cart ({cartItems.length})</p></div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
//                   <div className="space-y-4 overflow-x-hidden">
//                     {cartItems.map((item) => (
//                       <div key={item.id} className="min-w-[400px]">
//                         <div className="grid grid-cols-3 grid-rows-2 gap-4">
//                           <div className="w-40">
//                             <img src={item.image} alt={item.title} className="md:w-full w-3/4" />
//                           </div>
//                           <div>
//                             <p className="font-bold">{item.title}</p>
//                             <p>Size: {item.size}</p>
//                             <p>Price: ${item.price} </p>
//                             <p>Color: {item.color}</p>
//                           </div>
//                           <div className="font-semibold text-lg md:text-right text-center">
//                             ${(item.price * quantities[item.id]).toFixed(2)}
//                           </div>

//                           <div></div>
//                           <div  className="flex bg-zinc-100 flex justify-between rounded-lg items-center h-10 w-36 px-3">
//                             <button onClick={() => handleDecreaseQuantity(item)} className="font-bold text-xl">-</button>
//                             <p>{quantities[item.id]}</p>
//                             <button onClick={() => handleIncreaseQuantity(item)} className="font-bold text-xl">+</button>
//                           </div>
//                           <div onClick={() => handleRemoveFromCart(item)} className="flex md:justify-end justify-center">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="w-7 h-7">
//                               <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="currentColor"></path>
//                             </svg>
//                           </div>

//                         </div>  
//                         <div className="w-full text-gray-400 mb-5"><hr /></div>
//                       </div>
//                     ))}
//                   </div>

//                   <div className="md:ps-12">
//                     <div className="bg-zinc-100 p-6 md:p-8 md:ms-36 space-y-4 md:space-y-5 rounded-lg">
//                       <p className="text-xl md:text-2xl font-bold">Order Summary</p>
//                       <div className="flex justify-between">
//                         <p className="text-lg md:text-xl">Total</p>
//                         <p className="text-lg md:text-xl font-semibold">{totalPrice} AUD</p>
//                       </div>
//                       <button className="bg-[#586A4D] w-full py-2 md:py-3 rounded-full font-bold text-white cursor-pointer">SECURE CHECKOUT</button>
//                       <div className="flex justify-center">
//                         <img src={Payment} alt="Payment" width="auto" height="auto" className="w-full max-w-xs" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//         <Subscribe />
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Cart;

//trying to solve issue of fluctuation

import { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increaseQuantity, decreaseQuantity, setCartItems } from '../redux/cartSlice';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import Payment from '/icons/Payment.jpg';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const quantities = useSelector((state) => state.cart.quantities);
  const dispatch = useDispatch();

  // Fetch cart from DB on component mount
  useEffect(() => {
    const loadCart = async () => {
      try {
        const response = await axios.get('http://localhost:3000/cart');
        const data = response.data;
        const cartItems = Array.isArray(data) ? data : data.cart || [];
        
        if (cartItems) {
          // Initialize quantities with correct values from the DB
          const newQuantities = {};
          cartItems.forEach((item) => {
            newQuantities[item.id] = item.quantities || 1; // Default quantity to 1 if not available
          });
          dispatch(setCartItems({ items: cartItems, quantities: newQuantities }));
        } else {
          console.error('Cart data is undefined or not in expected format:', data);
        }
      } catch (error) {
        console.error('Failed to fetch cart items:', error);
      }
    };

    loadCart();
  }, [dispatch]);

  // Update database when quantities change
  // useEffect(() => {
  //   if (!isInitialLoad) {
  //     // Loop through cart items and update the database
  //     cartItems.forEach((item) => {
  //       updateCartInDB(item.id, quantities[item.id]);
  //     });
  //   } else {
  //     setIsInitialLoad(false); // Skip the first run (initial load)
  //   }
  // }, [quantities, cartItems, isInitialLoad]);

  const updateCartInDB = async (id, quantity) => {
    try {
      const updatedItem = {
        quantities: quantity,
      };

      // Send the updated item data to the backend using Axios
      const response = await axios.patch(`http://localhost:3000/cart/${id}`, updatedItem, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Cart updated successfully:', response.data);
    } catch (error) {
      console.error('Error updating cart in DB:', error);
    }
  };

  const removeItemFromDB = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/cart/${id}`);
      console.log('Item removed from database:', response.data);
    } catch (error) {
      console.error('Error removing item from DB:', error);
    }
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item.id)); // Dispatch removeItem action to update Redux store
    removeItemFromDB(item.id); // Remove item from the database
  };

  const handleIncreaseQuantity = (item) => {
    dispatch(increaseQuantity(item.id)); // Dispatch increaseQuantity action
    updateCartInDB(item.id, quantities[item.id] + 1);
  };

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseQuantity(item.id)); // Dispatch decreaseQuantity action
    updateCartInDB(item.id, quantities[item.id] - 1);
  };

  const totalPrice = cartItems?.reduce((total, item) => {
    return total + item.price * quantities[item.id];
  }, 0).toFixed(2);

  return (
    <>
      <div className="scroll-smooth max-w-screen overflow-x-hidden">
        <Header />
        <Head />
        <div>
          <div className="py-6 md:py-12 w-full px-4 md:px-80">
            {cartItems.length === 0 ? (
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold mb-6 md:mb-12">Your Cart is Empty</p>
                <Link
                  className="font-bold rounded-full px-5 py-3 md:px-7 md:py-5 text-white bg-[#586A4D] inline-block" to="/collections/sofas">CONTINUE SHOPPING
                </Link>
                <p className="text-lg md:text-xl font-bold mt-8 md:mt-16">Have an account?</p>
                <p className="text-base md:text-lg mt-2 md:mt-4">
                  <a href="/login" target="_blank" className="underline">Log in</a>
                  &nbsp;to checkout Faster.
                </p>
              </div>
            ) : (
              <div>
                <div>
                  <p className="text-2xl md:text-3xl font-bold pb-4 md:pb-8">Your Cart ({cartItems.length})</p></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                  <div className="space-y-4 overflow-x-hidden">
                    {cartItems.map((item) => (
                      <div key={item.id} className="min-w-[400px]">
                        <div className="grid grid-cols-3 grid-rows-2 gap-4">
                          <div className="w-40">
                            <img src={item.image} alt={item.title} className="md:w-full w-3/4" />
                          </div>
                          <div>
                            <p className="font-bold">{item.title}</p>
                            <p>Size: {item.size}</p>
                            <p>Price: ${item.price} </p>
                            <p>Color: {item.color}</p>
                          </div>
                          <div className="font-semibold text-lg md:text-right text-center">
                            ${(item.price * quantities[item.id]).toFixed(2)}
                          </div>

                          <div></div>
                          <div  className="flex bg-zinc-100 justify-between rounded-lg items-center h-10 w-36 px-3">
                            <button onClick={() => handleDecreaseQuantity(item)} className="font-bold text-xl">-</button>
                            <p>{quantities[item.id]}</p>
                            <button onClick={() => handleIncreaseQuantity(item)} className="font-bold text-xl">+</button>
                          </div>
                          <div onClick={() => handleRemoveFromCart(item)} className="flex md:justify-end justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className="w-7 h-7">
                              <path d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z" fill="currentColor"></path>
                            </svg>
                          </div>

                        </div>  
                        <div className="w-full text-gray-400 mb-5"><hr /></div>
                      </div>
                    ))}
                  </div>

                  <div className="md:ps-12">
                    <div className="bg-zinc-100 p-6 md:p-8 md:ms-36 space-y-4 md:space-y-5 rounded-lg">
                      <p className="text-xl md:text-2xl font-bold">Order Summary</p>
                      <div className="flex justify-between">
                        <p className="text-lg md:text-xl">Total</p>
                        <p className="text-lg md:text-xl font-semibold">{totalPrice} AUD</p>
                      </div>
                      <button className="bg-[#586A4D] w-full py-2 md:py-3 rounded-full font-bold text-white cursor-pointer">SECURE CHECKOUT</button>
                      <div className="flex justify-center">
                        <img src={Payment} alt="Payment" width="auto" height="auto" className="w-full max-w-xs" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Cart;

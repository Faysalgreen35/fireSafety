
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import product1 from '../../assets/1pc-300x300.png';
import product2 from '../../assets/2pc-300x300.png'; 
import { FaLock } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
const FormData = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);
    const [selectedProduct, setSelectedProduct] = useState({
        id: 1, name: 'Fire Stop - 500 ml (1x)', price: 830
    });
    const [quantity, setQuantity] = useState(1);
    const [shippingCost, setShippingCost] = useState(50); // Default shipping cost

    const products = [
        { id: 1, name: '  Fire Stop - 500 ml (1x)', price: 830, image: product1 },
        { id: 2, name: 'Fire Stop - 500 ml 2pcs -   (Most Popular 🔥)', price: 1560, image: product2 }
    ];

    const handleSelectProduct = (product) => {
        setSelectedProduct(product);
        setQuantity(product.id === 1 ? 1 : 2); // Automatically adjust quantity based on product selection
    };

    const calculateTotal = () => {
        return selectedProduct.price + shippingCost;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        Swal.fire('Success', 'Order placed successfully', 'success');
        // Additional form submission logic here
    };
 
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    return (
        <div className="w-full lg:max-w-7xl ml-1 lg:mt-1 py-8 mx-auto font-hind">
            <div className="mx-auto px-4 lg:px-20">
                <div className="flex flex-wrap -mx-4 "
                data-aos="fade-up"
                >
                    {/* Left Section: Billing Details */}
                    <div className="w-full lg:w-1/2 px-4 mb-1 lg:mb-0">
                        <h1 className="font-bold text-2xl py-4 mb-3">Billing details</h1>
                        <form onSubmit={handleSubmit}>
                       
                       <div className="mb-6">
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">নাম*</label>
                           <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValues.subject}
                                    onChange={handleChange}

                                    required
                                    className="  w-[80%] lg:w-full mt-2  
                   border  px-1 lg:px-1 lg:h-12   rounded-lg 
                   focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">ইমেইল (optional)</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValues.subject}
                                    onChange={handleChange}

                                    required
                                    className="  w-[80%] lg:w-full mt-2  
                   border  px-1 lg:px-1 lg:h-12   rounded-lg 
                   focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">ফোন নাম্বার*</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValues.subject}
                                    onChange={handleChange}

                                    required
                                    className="  w-[80%] lg:w-full mt-2  
                   border  px-1 lg:px-1 lg:h-12   rounded-lg 
                   focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">জেলা*</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValues.subject}
                                    onChange={handleChange}

                                    required
                                    className="  w-[80%] lg:w-full mt-2  
                   border  px-1 lg:px-1 lg:h-12   rounded-lg 
                   focus:outline-none focus:ring-2 "
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">সম্পূর্ণ ঠিকানা*</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formValues.subject}
                                    onChange={handleChange}

                                    required
                                    className="  w-[80%] lg:w-full mt-2  
                   border  px-1 lg:px-1 lg:h-12   rounded-lg 
                   focus:outline-none focus:ring-2 "
                                />
                            </div>
                            {/* Add other fields like email, phone, etc. */}
                       
                            </form>
                    </div>

                    {/* Right Section: Product Selection */}
                    <div className="w-full lg:w-1/2 px-4 flex flex-col items-center justify-start"> 
                        <h2 className="font-bold text-xl py-4 mb-2 -translate-x-[70px] md:-translate-x-32">Your Products</h2>
                        {/* Product Cards */}
                        <div className="grid grid-cols-1  text-left gap-4 mb-6">
                            {products.map(product => (
                                <label key={product.id} className="flex items-center  text-left ml-4 rounded-lg px-10 py-8 cursor-pointer  border border-black" onClick={() => handleSelectProduct(product)}>
                                    <input
                                        type="checkbox"
                                        checked={selectedProduct?.id === product.id}
                                        onChange={() => handleSelectProduct(product)}
                                        className="mr-4 w-6 h-6 rounded-full text-green-500 border-gray-300 focus:ring-green-500 cursor-pointer"
                                    />
                                    <img src={product.image} alt={product.name} className="w-12 h-12 mr-4" />
                                    <div className="text-right">
                                        <h2 className="text-lg font-semibold">{product.name}</h2>
                                        <p>Price: ৳{product.price}</p>
                                    </div>
                                </label>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <h2 className="font-bold text-xl py-4 mb-2 -translate-x-[70px] md:-translate-x-32">Your Order</h2>
                        <div className='w-full border border-gray-300'></div>
                        <div className="w-full  p-4 rounded-lg ">
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <span className='font-bold'>Product</span>
                                <span  className="text-right font-bold">Subtotal</span>
                            </div>
                        <div className='w-full border border-dashed border-gray-300 my-2'></div>

                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <span>{selectedProduct.name} x{quantity}</span>
                                <span className="text-right">৳{selectedProduct.price}</span>
                            </div>
                        <div className='w-full border border-dashed border-gray-300 my-2'></div>

                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <span>Subtotal</span>
                                <span className="text-right">৳{selectedProduct.price}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-2">
                                <span>Shipping Cost</span>
                                <span className="text-right"> Home Delivery: <br />৳{shippingCost}</span>
                            </div>
                        <div className='w-full border border-dashed border-gray-300 my-2'></div>

                            <div className="grid grid-cols-2 gap-2 font-bold">
                                <span>Total</span>
                                <span className="text-right">৳{calculateTotal()}</span>
                            </div>
                        </div>

                        {/* Place Order Button */}
                        <button
                            type="submit"
                            className="w-full text-xl ml-2 py-3 lg:py-6 mt-12 relative
                             bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                            onClick={handleSubmit}
                        >
                            <div className='absolute left-1/2  '>
                            <FaLock className='text-3xl text-white text-center font-bold  ' /> 
                            </div>
                          <br /><br />
                            Place Order <span className='ml-3'>{calculateTotal()}  ৳ </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormData;


// import { useState } from 'react';
// import Swal from 'sweetalert2';

// import product1 from '../../assets/1pc-300x300.png'
// import product2 from '../../assets/2pc-300x300.png'

// const FormData = () => {
//     const [formValues, setFormValues] = useState({
//         name: '',
//         email: '',
//         subject: '',
//         message: '',
//     });

//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [quantity, setQuantity] = useState(1);
//     const [shippingCost, setShippingCost] = useState(50); // Default shipping cost
//     const products = [
//         { id: 1,   name: "Product 1", price: 100 },
//         { id: 2, name: "Product 2", price: 150 }
//     ];

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         Swal.fire('Success', 'Order placed successfully', 'success');
//         // Reset the form after successful submission
//         setFormValues({
//             name: '',
//             email: '',
//             subject: '',
//             message: '',
//         });
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({
//             ...formValues,
//             [name]: value,
//         });
//     };

//     const handleSelectProduct = (product) => {
//         setSelectedProduct(product);
//     };

//     const handleQuantityChange = (e) => {
//         setQuantity(Number(e.target.value));
//     };

//     const calculateSubtotal = () => {
//         if (!selectedProduct) return 0;
//         return selectedProduct.price * quantity;
//     };

//     const calculateTotal = () => {
//         return calculateSubtotal() + shippingCost;
//     };

//     return (
//         <div className="w-full lg:max-w-7xl ml-1 lg:mt-10 py-8 mx-auto font-hind">
//             <div className="mx-auto px-4 lg:px-20">
//                 <div className="flex flex-wrap -mx-4">
//                     <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
//                         <form onSubmit={handleSubmit}>
//                             <h1 className='font-bold text-2xl py-4 mb-3'>
//                                 Billing details
//                             </h1>
//                             <div className="mb-6">
//                                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">নাম*</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formValues.subject}
//                                     onChange={handleChange}

//                                     required
//                                     className="  w-[80%] lg:w-full mt-2  
//                    border  px-1 lg:px-1 lg:h-12   rounded-lg 
//                    focus:outline-none focus:ring-2 "
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">ইমেইল (optional)</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formValues.subject}
//                                     onChange={handleChange}

//                                     required
//                                     className="  w-[80%] lg:w-full mt-2  
//                    border  px-1 lg:px-1 lg:h-12   rounded-lg 
//                    focus:outline-none focus:ring-2 "
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">ফোন নাম্বার*</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formValues.subject}
//                                     onChange={handleChange}

//                                     required
//                                     className="  w-[80%] lg:w-full mt-2  
//                    border  px-1 lg:px-1 lg:h-12   rounded-lg 
//                    focus:outline-none focus:ring-2 "
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">জেলা*</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formValues.subject}
//                                     onChange={handleChange}

//                                     required
//                                     className="  w-[80%] lg:w-full mt-2  
//                    border  px-1 lg:px-1 lg:h-12   rounded-lg 
//                    focus:outline-none focus:ring-2 "
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">সম্পূর্ণ ঠিকানা*</label>
//                                 <input
//                                     type="text"
//                                     id="subject"
//                                     name="subject"
//                                     value={formValues.subject}
//                                     onChange={handleChange}

//                                     required
//                                     className="  w-[80%] lg:w-full mt-2  
//                    border  px-1 lg:px-1 lg:h-12   rounded-lg 
//                    focus:outline-none focus:ring-2 "
//                                 />
//                             </div>
//                             {/* Add other fields like email, phone, etc. */}
//                         </form>
//                     </div>

//                     <div className="w-[100%] lg:w-1/2 px-4 flex flex-col items-center justify-start">
//                         <h1 className='font-bold text-2xl py-4 mb-3 text-left'>
//                             Your Products
//                         </h1>

//                         {/* Product Cards */}
//                         <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mb-6">
//                             {products.map(product => (
//                                 <div key={product.id} className="border rounded-lg p-4 cursor-pointer" onClick={() => handleSelectProduct(product)}>
//                                     <h2 className="text-lg font-semibold">{product.name}</h2>
//                                     <p>Price: ৳{product.price}</p>
//                                     <button className={`mt-2 py-2 px-4 rounded-lg ${selectedProduct?.id === product.id ? 'bg-green-500 text-white' : 'bg-gray-200'}`}>
//                                         {selectedProduct?.id === product.id ? 'Selected' : 'Select'}
//                                     </button>
//                                 </div>
//                             ))}
//                         </div>

                      
//                         {selectedProduct && (
//                             <div className="w-full lg:w-[80%]">
//                                 <h2 className="text-xl font-semibold mb-4">Your Order</h2>
//                                 <div className="grid grid-cols-2 gap-4">
//                                     <div>Product</div>
//                                     <div>Subtotal</div>
//                                     <div className="border-t"></div>
//                                     <div className="border-t"></div>

//                                     <div>{selectedProduct.name} (x{quantity})</div>
//                                     <div>৳{calculateSubtotal()}</div>

//                                     <div>Shipping Cost</div>
//                                     <div>৳{shippingCost}</div>

//                                     <div>Total</div>
//                                     <div>৳{calculateTotal()}</div>
//                                 </div>

//                                 {/* Quantity Selector */}
//                                 <div className="mt-4">
//                                     <label className="block text-sm font-semibold">Quantity</label>
//                                     <input
//                                         type="number"
//                                         min="1"
//                                         value={quantity}
//                                         onChange={handleQuantityChange}
//                                         className="mt-2 border px-2 py-1 w-[80%] lg:w-full rounded-lg"
//                                     />
//                                 </div>
//                             </div>
//                         )}

//                         {/* Order Button */}
//                         <button
//                             onClick={handleSubmit}
//                             className="w-full lg:py-6 mt-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
//                         >
//                             Place Order ৳{calculateTotal()}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FormData;

import { useState } from 'react';
import Swal from 'sweetalert2';



const FormData = () => {

    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    // const API_BASE_URL = 'http://dev.mydomain.com:3001'; // Replace port as needed

    const handleSubmit = async (e) => {
        e.preventDefault();

        Swal.fire('Success', 'Email sent successfully', 'success');
        // Reset the form after successful submission
        setFormValues({
            name: '',
            email: '',
            subject: '',
            message: '',
        });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    return (
        <div className=" w-full lg:max-w-7xl  ml-1 lg:mt-10 py-8 mx-auto font-hind">
            <div className=" mx-auto px-4 lg:px-20">

                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <form className=" " onSubmit={handleSubmit}>
                            <h1 className='font-bold text-2xl py-4 mb-3'>
                                Billing details
                            </h1>
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

                           
                        </form>
                    </div>
                    <div className="w-[100%] lg:w-1/2 px-4 flex flex-col items-center  justify-start">

                    <h1 className='font-bold text-2xl py-4 mb-3  text-left'>
                    Your Products
                            </h1>
                        <img
                            src="/images/FAYSAL1.jpg"
                            alt="Contact"
                            className="w-80 h-64 mb-8 rounded-lg shadow-lg object-cover"
                        />
                        <button
                                type="submit"
                                className="w-full lg:py-6 mt-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300"
                            >
                                Send Message
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormData;
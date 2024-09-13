// import logo from '../../assets/FSB-Colored.png'
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer footer-center bg-gray-900 text-primary-content p-10">
  <aside>
 <div className="bg-blue-700 rounded-full p-4">
 <FaFacebook className='text-3xl' />
 {/* <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
</a> */}
 </div>
    <p className="font-bold font-hind text-2xl mt-4">
    অর্ডার করতে সমস্যা হলে অনুগ্রহ করে আমাদের পেইজে মেসেজ করবেন
      <br />
       <div className='flex justify-center items-center py-12'>
       <img className='w-24 h-24  '  src= 'https://firesafety.trustable.shop/wp-content/uploads/2024/01/Usabel-PNG-Preset-957x1024.png' alt="" />
       </div>
    </p>
    <p className='text-xs md:text-xl'><span className='text-orange-500'>Fire Safety Bangladesh </span>বাংলাদেশে আগুন নিরাপত্তা বিষয়ে কাজ করে যাচ্ছে। আমাদের লক্ষ্য দেশের সর্বত্র <br /> আগুন
         নিরাপত্তা সম্পর্কে সচেতনতা তৈরি করা এবং প্রয়োজনমাফিক আগুন নিরাপত্তা সরঞ্জাম 
        সরবরাহ করা। আর <br /> একটিও পরিবারও যেন আগুন দূর্ঘটনার শিকার না হয়, এটিই আমাদের চাওয়া....</p>

    <p className='text-xl mt-2'>Privacy Policy
   <span className=' ml-12 '> Refund and Returns Policy</span></p>

  </aside>
  
</footer>
    );
};

export default Footer;

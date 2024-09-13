import { Helmet } from "react-helmet-async";

import logo from '../../assets/FSB-Colored.png'
import second from '../../assets/hero-image2.png'
import third from '../../assets/data.png'
import four from '../../assets/car.png'
import five from '../../assets/Feature-Photo-3-1.png'
import six from '../../assets/Feature-Photo-4.png'
import eight from '../../assets/Product-ImageFSV2.png'
import ten from '../../assets/Nagad-Payment-CB-1.png'
import Slider from "../Slider/Slider";
import FormData from "../FormData/FormData";

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS CSS file
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
    }, []);
    return (
        <div>
            <Helmet>
                <title>Fire Safety</title>

            </Helmet>
            {/* section header  */}
            <section>
                <div className="text-center flex justify-center items-center py-12 bg-white border-b-2 border-black">
                    <img className="w-16 h-16 " src={logo} alt="" />
                </div>
            </section>
            {/* second section  */}
            <section>
                <div className="bg-red-100 grid grid-cols-1 md:grid-cols-2 px-2 justify-center mx-auto md:px-12">
                    <div className=" py-6 md:py-32 font-hind">
                        <h1 className="text-2xl text-center md:text-5xl mt-1 ml-0 md:ml-4 font-bold text-black"
                        data-aos="fade-down"
                        >
                            আগুন থেকে পরিবারকে রাখুন <br />  নিরাপদ !
                        </h1>
                        <h4 className="text-sm md:text-3xl text-center font-semibold ml-0 md:ml-4 w-full mt-4 ">
                            বিবিসি এর তথ্যমতে, বাংলাদেশে প্রতিবছর <br /> আনুমানিক ৬ লাখ মানুষ অগ্নি দূর্ঘটনার শিকার <br /> হন।
                            এই আগুনের পুড়ে যাওয়া রোগীদের<span className="text-orange-500"> ৭০ ভাগই </span><br /><span className="text-orange-500"> নারী এবং শিশু
                            </span> </h4>

                    </div>
                    <div className="mr-0 md:mr-12 mt-2 md:mt-12 mb-12 md:mb-0"
                    data-aos="fade-up"
                    >
                        <img className="  " src={second} alt="" />
                    </div>
                </div>
            </section>


            {/* third section  */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[rgb(207,97,46)] py-2 md:py-24 px-0   md:px-12  ">
                    <div className="   flex justify-center items-center mt-2 md:mt-12 ml-0 md:ml-12"
                      data-aos="fade-up"
                    >
                        <img className=" w-[400px] md:w-[500px]  " src={third} alt="" />
                    </div>
                    <div className="py-12 mr-0 md:mr-14 mt-2 font-hind">
                        <h1 className="hidden md:block text-2xl text-center md:text-5xl  font-bold text-white">
                            আমাদের অধিকাংশই অগ্নি- <br /> দূর্ঘটনা প্রতিরোধের ব্যাপারে  <br /> অসচেতন
                        </h1>
                        <h1 className="md:hidden text-2xl text-center md:text-5xl  font-bold text-white">
                            আমাদের অধিকাংশই অগ্নি- <br />দূর্ঘটনা প্রতিরোধের ব্যাপারে অসচেতন
                        </h1>
                        <h4 className=  " hidden md:block text-m text-white text-center font-bold flex-wrap  mt-4"
                          data-aos="fade-down-left"
                        
                        >
                            এজন্য প্রায়ই আমাদের দেশে অসংখ্য অনাকাঙ্খিত আগুনের ঘটনা ঘটছে। ঝরে <br />
                             যাচ্ছে অসংখ্য প্রাণ এবং ক্ষতি হচ্ছে সম্পদের। অথচ পর্যাপ্ত প্রস্তুতি থাকলে এসকল <br /> দুর্ঘটনা অনেকাংশেই কমে যেত
                             </h4>
                        <h4 className="md:hidden text-sm mx-4 text-white text-center font-bold flex-wrap  mt-4"
                          data-aos="fade-down-right"
                        >
                            এজন্য প্রায়ই আমাদের দেশে অসংখ্য অনাকাঙ্খিত আগুনের ঘটনা ঘটছে। ঝরে  
                             যাচ্ছে অসংখ্য প্রাণ এবং ক্ষতি হচ্ছে সম্পদের। অথচ পর্যাপ্ত প্রস্তুতি থাকলে এসকল   দুর্ঘটনা অনেকাংশেই কমে যেত
                             </h4>

                    </div>

                </div>
            </section>
            {/* fourth section  */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-red-100 py-2 md:py-12  ">
                    <div className="py-12  mt-20 font-semibold px-4 md:px-12 ml-1 font-hind">
                        <h1 className="text-xl md:text-3xl ml-2   text-black"
                          data-aos="fade-left"
                        >
                            এদিকে, International Association of Fire and Rescue Services (CTIF) এর রিপোর্ট বলছে, সারাবিশ্বে প্রতিবছর লক্ষাধিক গাড়িতে অগ্নি-দূর্ঘটনা ঘটে থাকে।<span className="text-orange-500"> শুধুমাত্র আমেরিকাতেই প্রতিবছর প্রাণ হারাণ ৫৬০ জন।</span>
                        </h1>


                    </div>
                    <div className="mt-2 ">
                        <img className=" w-[500px]  " src={four} alt="" />
                    </div>
                </div>
            </section>

            {/* fifth section  */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 bg-[rgb(207,97,46)] py-4 md:py-24 px-4 md:px-12  ">
                    <div className="mt-4 md:mt-12 ml-0 md:ml-12"
                      data-aos="fade-down-right"
                    >
                        <img className=" w-[500px]  " src={five} alt="" />
                    </div>
                    <div className="py-12 mr-0 md:mr-14 mt-4 md:mt-12 font-hind">
                        <h1 className="text-2xl md:text-5xl mt-1 text-center  font-bold text-white">
                            আগুন প্রতিরোধের উপায় কি?
                        </h1>
                        <h4 className="hidden md:block text-l py-2  text-white text-center font-bold   mt-4 mr-6"
                         data-aos="fade-left"
                        >
                            যেকোন কারণেই আকস্মিকভাবে আগুন লেগে যেতে পারে, তবে সেই আগুনকে <br />  <span>ছোট</span> অবস্থায়ই নিভিয়ে ফেলতে হবে। এজন্য আগুন নিভানোর প্রয়োজনীয় সরঞ্জাম <br /> হাতের নাগালে রাখা অত্যন্ত গুরুত্বপূর্ণ

                        </h4>
                        <h4 className="md:hidden text-l py-2  text-white text-center font-bold   mt-4 mr-6"
                         data-aos="fade-left"
                        >
                            যেকোন কারণেই আকস্মিকভাবে আগুন লেগে যেতে পারে, তবে সেই আগুনকে  
                            ছোট অবস্থায়ই নিভিয়ে ফেলতে হবে। এজন্য আগুন নিভানোর প্রয়োজনীয় সরঞ্জাম  হাতের নাগালে রাখা অত্যন্ত গুরুত্বপূর্ণ

                        </h4>

                    </div>

                </div>
            </section>

            {/* sixth section  */}
            <section className="py-7 bg-red-100">

                <div >
                    <h2 className="text-3xl md:text-5xl font-bold my-2 text-center font-hind">আগুন নেভাতে Fire Stop অত্যন্ত কার্যকরী একটি সমাধান 🛡️</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 px-12  ">

                    <div className="mt-12 ml-4"
                     data-aos="fade-right"
                    >
                        <img className=" w-[560px]  " src={six} alt="" />
                    </div>
                    <div className="py-12 mr-14 mt-0 font-hind">
                        <h1 className="text-xl  text-black">
                            আগুনকে "ছোট অবস্থাতেই" নিভিয়ে ফেলতে বিশ্বজুড়ে এই স্প্রে ব্যাপকভাবে ব্যবহৃত হয়ে আসছে। এতে রয়েছে অগ্নি-নির্বাপক ফোম এজেন্ট যা A & B Grade এর আগুনকে নিভিয়ে ফেলতে সক্ষম"।
                            <br />
                            ফায়ার স্টপ স্প্রেটির সুবিধাঃ
                            <br />
                            <br />

                            ✅ স্প্রে করার সাথে সাথে আগুন নিভিয়ে দেয় <br />
                            ✅ হালকা এবং সহজে বহনযোগ্য<br />
                            ✅ সহজে ব্যবহার করা যায়<br />
                            ✅ অগ্নি নির্বাপক ফোম সহজেই ছোট আগুন নিভিয়ে ফেলতে সক্ষম<br />
                            ✅ এই স্প্রে তে নন-টক্সিক ফোম ব্যবহার করা হয়েছে । এই ফোম হাতে ধরলে সমস্যা হবেনা<br />
                            ✅ গাড়ির নিরাপত্তার জন্য এটি অত্যন্ত গুরুত্বপূর্ণ অগ্নি-নির্বাপন ব্যবস্থা
                        </h1>


                    </div>

                </div>
            </section>

            {/* seventh section  */}
            <section className="pt-5 md:pt-24  bg-red-100">
                <div>
                    <h2 className="text-3xl font-bold my-2 text-center font-hind"
                      data-aos="fade-right"
                    >
                        যেভাবে <span className="text-orange-500">Fire Stop</span> দ্বারা আগুন নিষ্ক্রিয় করবেন
                    </h2>
                    <h4 className="text-xl my-2 md:my-6 text-center font-hind">
                        ভিডিওতে দেখানো উপায়ে স্প্রে টি ব্যবহার করতে হবে 👇
                    </h4>
                </div>

                {/* Video here */}
                <div className="flex justify-center w-[90%] md:w-full mx-auto">
                    <iframe
                        title="vimeo-player"
                        src="https://player.vimeo.com/video/909886194?h=9ecda0c79b"
                        width="1040"
                        height="560"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </section>
            {/* eigth section  */}
            <section className="pt-10 bg-red-100 py-4">
                <div>
                    <h2 className="text-3xl font-bold my-2 text-center font-hind"
                      data-aos="fade-right"
                    >

                        আমাদের প্রডাক্টের অরিজিনাল মেয়াদ রয়েছে <span className="text-orange-500"> ২০৩০ </span>সাল পর্যন্ত
                    </h2>
                    <h4 className="text-xl my-6 text-orange-500 text-center font-hind">
                        ⚠️ কিছু অসাধু ব্যবসায়ী নকল এবং মেয়াদোত্তীর্ণ Fire Stop বিক্রয়ের চেষ্টা করছে। এগুলো থেকে সতর্ক থাকার পরামর্শ রইল
                    </h4>
                </div>
                <div className="mt-12 flex justify-center  text-center"
                  data-aos="fade-up"
                >
                    <img className=" w-[360px]  " src={eight} alt="" />

                </div>
                <div>
                    <h2 className="text-xl font-bold my-2 text-center font-hind">
                        ⚙️ উৎপাদন সালঃ ২০২৪ <br />
                        ⚙️ মেয়াদোত্তীর্ণ সালঃ ২০৩০
                    </h2>
                </div>

            </section>

            {/* nine section  */}
            <section className="py-7 bg-red-100">
                <div>
                    <h2 className="text-3xl font-bold my-2 text-center font-hind">

                        এমন অসংখ্য দায়িত্বশীল মানুষ <span className="text-orange-500">Fire Stop</span> সংগ্রহ করে অগ্নি-দূর্ঘটনা মোকাবেলায় নিজেদেরকে
                        <br /> প্রস্তুত করে নিয়েছেন
                    </h2>
                </div>
                <Slider></Slider>
            </section>
            {/* ten section  */}
            <section className="py-7 bg-red-100">
                <div className="mt-12 flex justify-center  text-center">
                    <img className=" w-[360px]  " src={ten} alt="" />

                </div>

                <div>
                    <h2 className="text-3xl font-semibold  my-4 text-center font-hind">

                        
                        অর্ডার করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে পূরণ করুন ⬇️
                    </h2>
                </div>
                <div className=" w-[80%] mx-auto border-2 border-black border-dashed px-2">
                    <FormData/>
                </div>
            </section>

            <section>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="fire-safety-accordion" defaultChecked />
  <div className="collapse-title text-xl font-medium">
    অগ্নি নিরাপত্তা কি?
  </div>
  <div className="collapse-content">
    <p>
      অগ্নি নিরাপত্তা হলো এমন ব্যবস্থাগুলো যেগুলোর মাধ্যমে অগ্নিকাণ্ডের ঝুঁকি কমানো এবং অগ্নিকাণ্ডের সময় ক্ষতি নিয়ন্ত্রণ করা যায়।
    </p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="fire-safety-accordion" />
  <div className="collapse-title text-xl font-medium">
    অগ্নিকাণ্ডের সময় কি করতে হবে?
  </div>
  <div className="collapse-content">
    <p>
      অগ্নিকাণ্ডের সময় শান্ত থাকুন, দাহ্য পদার্থ থেকে দূরে যান, নিরাপদ স্থানে আশ্রয় নিন এবং জরুরি সেবায় কল করুন।
    </p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="fire-safety-accordion" />
  <div className="collapse-title text-xl font-medium">
    অগ্নি নির্বাপক যন্ত্র কিভাবে ব্যবহার করবেন?
  </div>
  <div className="collapse-content">
    <p>
      অগ্নি নির্বাপক যন্ত্র ব্যবহার করতে হলে প্রথমে পিন খুলুন, নোজলটি আগুনের উৎসের দিকে তাক করুন এবং লিভার চাপুন।
    </p>
  </div>
</div>

<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="fire-safety-accordion" />
  <div className="collapse-title text-xl font-medium">
    ঘরে অগ্নি নিরাপত্তা বজায় রাখার উপায় কী?
  </div>
  <div className="collapse-content">
    <p>
      ঘরে অগ্নি নিরাপত্তা বজায় রাখতে দাহ্য পদার্থ সংরক্ষণে সাবধান হন, বৈদ্যুতিক সরঞ্জাম নিরাপদে ব্যবহার করুন এবং ধূমপানের সময় সতর্ক থাকুন।
    </p>
  </div>
</div>

            </section>
        </div>
    );
};

export default Home;


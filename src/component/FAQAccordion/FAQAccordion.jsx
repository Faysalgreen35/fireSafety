import { Accordion } from 'flowbite-react';
import AOS from 'aos';
import { useEffect } from "react";

import 'aos/dist/aos.css'; // Import the AOS CSS file
function FAQAccordion() {

  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with animation duration
}, []);
  return (

    <div className="flex flex-col bg-red-100 md:flex-row items-start md:items-center justify-between mx-auto p-5 gap-10">
    
   
      {/* Accordion Section */}
      <div className="md:w-1/2 w-full">
      <Accordion collapseAll={false}>
      <Accordion.Panel isOpen>
            <Accordion.Title>আগুন নেভানোর যন্ত্র কী?</Accordion.Title>
            <Accordion.Content>
              <p>
                আগুন নেভানোর যন্ত্র একটি পোর্টেবল যন্ত্র যা অগ্নি নির্বাপনের জন্য ব্যবহৃত হয়। এটি আগুনের প্রাথমিক পর্যায়ে নিয়ন্ত্রণে সহায়ক।
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>ফায়ার অ্যালার্ম কিভাবে কাজ করে?</Accordion.Title>
            <Accordion.Content>
              <p>
                ফায়ার অ্যালার্ম একটি সেন্সর ব্যবহার করে ধোঁয়া বা তাপ সনাক্ত করে এবং সতর্ক সংকেত পাঠায় যা মানুষকে সতর্ক করে দেয়।
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>ফায়ার ড্রিল কেন গুরুত্বপূর্ণ?</Accordion.Title>
            <Accordion.Content>
              <p>
                ফায়ার ড্রিল জরুরি পরিস্থিতিতে দ্রুত ও নিরাপদে স্থাপন ত্যাগ করার অনুশীলন। এটি কর্মীদের প্রস্তুত করতে সহায়ক।
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>আগুন লাগলে কী করতে হবে?</Accordion.Title>
            <Accordion.Content>
              <p>
                আগুন লাগলে প্রথমে ফায়ার অ্যালার্ম চালু করুন এবং নিকটবর্তী নিরাপদ স্থানে যান।  
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>আগুনের ঝুঁকি কিভাবে কমানো যায়?</Accordion.Title>
            <Accordion.Content>
              <p>
                আগুনের ঝুঁকি কমাতে সব সময় বৈদ্যুতিক সরঞ্জাম সতর্কভাবে ব্যবহার করুন, আগুনের আশেপাশে দাহ্য পদার্থ রাখবেন না,
                 
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>ফায়ার সেফটি প্ল্যান কেন প্রয়োজনীয়?</Accordion.Title>
            <Accordion.Content>
              <p>
                ফায়ার সেফটি প্ল্যান জরুরি অবস্থায় দ্রুত প্রতিক্রিয়া এবং নিরাপত্তার জন্য প্রয়োজন। এটি কর্মচারীদের জন্য একটি নির্দেশিকা হিসেবে কাজ করে।
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full"
      
      data-aos="fade-down">
        <img
          src="https://www.staffordshirefire.gov.uk/media/efsn3h5o/fire-safety-home-bengali.png?crop=0.0008880994671401852,0.00088809946714026923,0,0&cropmode=percentage&width=600&height=800&rnd=132890547046070000"
          alt="Fire Safety"
          className="rounded-lg shadow-md w-full h-[500px]"
        />
      </div>
    </div>
  );
}

export default FAQAccordion;

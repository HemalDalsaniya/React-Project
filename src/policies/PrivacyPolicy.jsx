import Head from "../Head"
import Header from "../Header"
import Subscribe from "../Subscribe"
import Footer from "../Footer"
import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const PrivacyPolicy = () => {

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  return (
    <>
    <div>
    <Header/>
    <Head/>

    <div>
       <div className="mx-[550px] my-18 space-y-4 text-justify">
         <h1 className="text-4xl font-bold ">Privacy Policy</h1>
         <p className="text-lg">Welcome to a good night’s sleep.</p>
         <p className="text-lg">We are Koala Sleep Pty Ltd (ABN 18 605 237 090), but you can call us Koala. 
            In our Privacy Policy, we also call ourselves “we”, “us” and “our” and we refer to you as… you guessed it, “you” or “your”.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Does this Privacy Policy apply to you?</h1> 
        <p className="text-lg">This Privacy Policy applies to our handling of your personal information if you access our website from Australia or purchase our products in Australia, 
            or if you are a prospective employee or a supplier or business partner in Australia.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">What does our Privacy Policy cover?</h1>   
        <p className="text-lg">Our Privacy Policy sets out the basis on which we use, store and process your personal information when you access our websites or contact us. It explains how:</p>
         <li>we store and use your personal information; </li>
         <li>you may access and correct your personal information;</li>
         <li>you can lodge a complaint regarding the handling of your personal information; and</li>
         <li>we will handle any complaint. </li>

         <h1 className="text-lg font-bold">Availability</h1>
         <p className="text-lg">At Koala, we value your trust when sharing your personal data with us and recognize that you may be concerned about the information provided to us and about how we handle that information. 
            We are committed to protecting it in accordance with the Australian Privacy Principles, which are set out in the Privacy Act 1988 (Cth). You can find out more about the Australian Privacy 
            Principles and your rights under the Privacy Act by visiting the Office of the Australian Information Commissioner (OAIC) at <a className="text-[#586A4D]">www.oaic.gov.au.</a> </p>
         <p className="text-lg">If you have any questions, concerns or complaints about our handling of your personal information, please do not hesitate to contact our Privacy Compliance Officer at <a className="text-[#586A4D]">legal@koala.com.</a></p>
       
         <h1 className="text-lg font-bold">Consent</h1>
         <p className="text-lg">By providing personal information to us, you consent to our collection, use and disclosure of that information in accordance with our Privacy Policy. </p>
          <li>You are under no obligation to provide any personal information to us, however, if you restrict us from collecting any of this information, we may not be able to do things such as:</li>
          <li>do business with you, supply our products to you or assist you with any enquiries, complaints, refunds, repairs or replacement products; </li>
          <li>allow you to participate in our promotions, competitions and rewards; or </li>
          <li>if you are a prospective employee, we may not be able to offer you employment.</li>

          <h1 className="text-lg font-bold">Age</h1>
          <p className="text-lg">By using our website or mobile site, you represent that you are at least 16 years of age. </p>
          <p className="text-lg">We do not knowingly advertise to, or collect personal information from, any individual under the age of 16. If we become aware that we have collected personal information from you and 
            you are under the age of 16, we will suspend any services we are providing to you and delete your personal information immediately.</p>
             
          <h1 className="text-lg font-bold">We may change our Privacy Policy from time to time</h1>
          <p className="text-lg">We may change our Privacy Policy from time to time to reflect changes to privacy laws, changes in the way we do business, technology changes and customer feedback. We will let you know about these changes by ensuring the most recent version of our Privacy Policy is on our website <a className="text-[#586A4D] underline" href="/">(au.koala.com)</a>. 
            We encourage you to check our website from time to time to ensure that you are aware of our current Privacy Policy. </p>
       
          <h1 className="text-2xl font-bold text-[#586A4D]">What types of personal information do we collect?</h1>
          <p className="text-lg">Your ‘Personal information’ is any information or opinion that identifies you or from which you might reasonably be identified. The information can be in any form and does not have to be true, it just matters that you can be identified by it. For example, your name, age and email address or photos of you. 
            It may also include sensitive information, such as your health information or information about your political or religious beliefs, where you have shared that with us. </p>
          <p className="text-lg">The types of information we collect that may be personal information include:</p>
          <li>contact details, such as name, role or position, mailing or street address, email address, mobile number or landline number;</li>
          <li>information relating to your age, gender, occupation or date of birth;</li>
          <li>information collected automatically when you interact with our website (including your device ID, device type, geo-location information, computer and connection information, statistics on page views, traffic to and from the sites, ad data, IP address and standard web log information);</li>
          <li>any additional information relating to you that you provide to us directly through our website or indirectly through your use of our website or online presence or through other websites or accounts from which you permit us to collect information, which may include personal preference and activity information, 
            feedback, replies and requests;</li>
          <li>account login information (including information that is required for you to establish a user account, such as user name, password and security questions and answers); </li>
          <li>if you are an employee or prospective employee, information about your qualifications, skills and work experience;</li>
          <li>if you are a supplier or business partner, or prospective supplier or business partner, information about your business skills, services, products and prices; or</li>
          <li>any other personal information that may be required in order to facilitate your dealings with us. </li>
          <p className="text-lg">The above information is only personal information if it identifies you or is information from which you might reasonably be identified. It may be the combination of information that we collect that identifies you rather than a single piece of information on its own.</p>
          
          <h1 className="text-2xl font-bold text-[#586A4D]">How do we collect your personal information?</h1>
          <p className="text-lg">We collect personal information about you when you visit our website, communicate with us through our live chat function, purchase or offer to purchase products from us, participate in one of our promotions, when you contact us by email, telephone or letter or connect with us from other social media applications, 
            services or websites.</p>
          <p className="text-lg">Sometimes you may give us personal information about other people, such as a family member or friend, (such as for delivery purposes). If you provide us with the personal information of another person, we rely on you to provide them with a copy of (or link to) our Privacy Policy and ensure they are happy for you to 
            provide us their personal information on that basis. </p>
          <p className="text-lg">We may also collect personal information about individuals from other sources, including social media platforms, digital platforms and publishers, retailers that sell our products, commercially available sources (such as data aggregators) and public sources and databases. This information may include name, 
            demographic information, interests and publicly-observed data (such as from social media and shopping behaviour). We may combine or supplement personal information using data from different sources.</p>

          <h1 className="text-lg font-bold">Visiting and browsing the Koala website</h1>  
          <p className="text-lg">When you visit our website <a className="text-[#586A4D] underline" href="/">(au.koala.com)</a>, you may choose to submit personal information to us (for example, when you sign up to our promotional communications, purchase products or chat with us via live chat). We will also automatically collect personal information about you when we record your visit to our 
            website in our server logs.</p>
          <p className="text-lg">We collect anonymous information on website activity to track our website’s performance and to improve your user experience. We record your computer's electronic internet protocol address (IP address) in our server logs when you visit our website (along with any other visitors) to analyse website traffic and 
            administer our website, track user movements across our website, detect fraud and gather information about the location of our customers.</p>
          <p className="text-lg">We collect this information for statistical purposes and to improve our products and your experience on our website. We do not identify users or their browsing activities except, in the event of an investigation, where we are required to provide information to a law enforcement agency or regulatory authority, 
            or otherwise by law.</p>

          <h1 className="text-lg font-bold">Cookies</h1> 
          <p className="text-lg">Like many companies, we use ‘cookie’ technology on our website. Cookies are small files that store information on your computer, mobile phone or other device. They enable us to recognise you across different websites, services, devices and/or browsing sessions. </p> 
          <p className="text-lg">While we do not use your browsing information to identify you personally, we may record certain information about your use of our website, such as which pages you visit, the time and date of your visit and the internet protocol address assigned to your computer. This helps us remember your preferences so 
            that next time you visit our site we can make your experience more personal.</p> 
          <p className="text-lg">We may also use cookies to enable us to collect data that could include personal information. For example, where a cookie is linked to your account, it will be considered personal information under the Privacy Act. We will handle any personal information collected by cookies in the same way that we handle 
            all other personal information as described in our Privacy Policy.</p> 
          <p className="text-lg">You can disable cookies or be warned when cookies are being used by adjusting your internet browser settings. However, disabling cookies may mean that you are not able to access parts of our website or to take advantage of the improved user experience that cookies can help provide.</p> 

          <h1 className="text-lg font-bold">Payments</h1>
          <p className="text-lg">Our online store is hosted on a third party online e-commerce platform and when you make a payment you connect directly to a third party payment gateway.</p>
          <p className="text-lg">We do not collect, store or have any access to your credit card or other payment details. </p>
          <p className="text-lg">The gateway that we use collects those details directly from you and encrypts them in compliance with the Payment Card Industry Data Security Standard (PCI-DSS). The payment gateway provider’s terms and conditions and privacy policy govern the collection, use and disclosure of your payment information. 
            Those should be provided to you when you access the gateway. </p>

          <h1 className="text-2xl font-bold text-[#586A4D]">Does Koala use your personal information to send you spam?</h1>  
          <p className="text-lg">No we don’t. We hate receiving unwanted emails and messages just as much as you do. We comply with the Spam Act 2003 (Cth) and the Privacy Act. You always have the option to opt-out of marketing communications you receive from us.</p>

          <h1 className="text-2xl font-bold text-[#586A4D]">How is your personal information stored?</h1>
          <p className="text-lg">We may hold your personal information in either electronic or hard copy form. </p>
          <p className="text-lg">We take reasonable steps to protect your personal information from misuse, interference and loss, as well as unauthorised access, modification or disclosure and we use a number of physical, administrative, personnel and technical measures to protect your personal information. However, we cannot guarantee 
            the security of your personal information.</p>

          <h1 className="text-2xl font-bold text-[#586A4D]">How long do we retain your personal information? </h1>  
          <p className="text-lg">We will only retain your personal information for as long as it is necessary to satisfy the purpose for which it was provided by you or collected by us. This means we may retain your personal information for a reasonable period after your last interaction with us. </p>
          <p className="text-lg">When the personal information that we collect is no longer required in this way, we will endeavour to destroy or delete it in a secure manner. We may, instead of destroying or erasing your personal information, make it anonymous so that it cannot be associated with or 
            tracked back to you. </p>
          <p className="text-lg">In certain cases, we may have legal or regulatory obligations that require us to retain specific records for a set period of time.</p>

          <h1 className="text-2xl font-bold text-[#586A4D]">How we ensure the security of your personal information?</h1>
          <p className="text-lg">e use a variety of physical, technical and administrative security standards, technologies and procedures to help protect your personal information (whether in physical or electronic form) from loss, misuse, alteration, destruction or damage to an appropriate level depending on the sensitivity of the 
            information. </p>
          <p className="text-lg">We take steps to limit access to your personal information to those persons who need to have access to it for one of the purposes listed in our Privacy Policy. We also use reasonable efforts to ensure that any third party processing your personal information also provides for confidentiality and integrity 
            of your data in a secure way.</p>

         <h1 className="text-2xl font-bold text-[#586A4D]">Accessing or correcting your personal information</h1>
         <p className="text-lg">You can access the personal information we hold about you by contacting us using the contact information in the <a className="text-[#586A4D] underline" href="/pages/contact">Contact us</a> section. </p>   
         <p className="text-lg">Sometimes, we may not be able to provide you with access to all of your personal information and, where this is the case, we will tell you why. We may also need to verify your identity when you request your personal information.</p>
         <p className="text-lg">If you think that any personal information we hold about you is inaccurate, please contact us and we will take reasonable steps to ensure that it is corrected.</p>
       
       </div>
    </div>

    <Subscribe/>
    <Footer/>

    </div>

    </>
  )
}

export default PrivacyPolicy
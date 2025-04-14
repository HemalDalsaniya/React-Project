import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Head from "../Head"
import Header from "../Header"
import Subscribe from "../Subscribe"
import Footer from "../Footer"
const PromotionTerms = () => {
  
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
         <h1 className="text-4xl font-bold ">Promotion Terms</h1>
         <p className="text-lg">Welcome to a good night’s sleep</p>
         <p className="text-lg">We love a bargain just as much as you do. That’s why we run competitions (“Competitions”), offer sales and discounts (“Offers”), and 
          provide access to benefits through referral or bonus programs (“Rewards”) from time to time.</p>
          <p className="text-lg">We are Koala Sleep Pty Ltd (ABN 18 605 237 090), but you can call us Koala. In these Promotion Terms, we also call ourselves 
            “we”, “us” and “our” and we refer to you as… you guessed it, “you” or “your”.</p>
          <li>Competitions</li>
          <li>Offers</li>
          <li>Rewards
              <li className="list-inside list-circle pl-5 mt-2" style={{ "list-style-type":"circle"}}>'Refer a Friend' Referral Program </li>
          </li>
          <p className="text-lg">Additional terms may apply to specific Competitions, Offers and Rewards. In case of any inconsistency between such additional terms 
              and the terms on this page, the additional terms will prevail to the extent necessary to resolve the inconsistency. By participating 
              in a Competition, or taking advantage of an Offer or Reward, you are agreeing to these Promotion Terms, our 
              <a className="text-[#586A4D] underline" href="/policies/privacypolicy"> Privacy Policy</a> and any 
              additional terms applicable to that Competition, Offer or Reward. </p>

          <h1 className="text-2xl font-bold text-[#586A4D]">Competitions</h1>
          <p className="text-lg">Details of how to enter our Competitions are available at the point of entry or through the forum(s) on which the Competition is 
            being run (such as our social media platforms). You may not be eligible to enter every Competition that we run.</p>
          <p className="text-lg">The Prize for each winner will be as specified in terms applicable to the Competition, and no cash or other alternatives will be offered. 
            Prizes remain subject to availability and we reserve the right to substitute a prize with another of equivalent value without giving notice. 
            Prizes are not transferable and cannot be substituted or exchanged for any alternative offer. </p>
          <p className="text-lg">If you enter any Competition, you agree that we may treat your entry (or entries) in the same way as we treat “Feedback” – please see our 
            <a className="text-[#586A4D] underline" href="/policies/websiteterms"> Website Terms</a> for further details.</p>
          <p className="text-lg">Our current Competitions are as follows:</p>

          <h1 className="text-2xl font-bold text-[#586A4D]">Offers</h1>
          <p className="text-lg">From time to time, Koala will make offers available for sales or other discounts in connection with the purchase of our products. </p>
          <p className="text-lg">Offers are made available subject to terms specified at the time the offer is made. Unless the terms related to the Offer say otherwise, 
            the Offer will be subject to the following conditions: </p> 
          <li>Any Koala discount codes that apply to purchases made through our website may not be used in conjunction with any other promotions or 
            other offers, and only one discount code may be used per order.</li>
          <li>If you receive a free or bonus product as part of an Offer, then our 120-day trial period will not apply to these products and they 
            cannot be returned for cash or store credit for change of mind (unless stated in the terms specific to the Offer). </li>
          <li>For the return of any product purchased or received under an Offer, you will only be refunded the amount paid for that product and the 
            offer cannot subsequently be used on any subsequent purchase. Your rights under the consumer guarantees will still apply for these Products 
            though.</li>
          <p className="text-lg">Our current offers are as follows:</p>
          <h1 className="text-lg font-bold">Email Welcome Offer</h1>
          <p className="text-lg">This offer commences at 9:00AM AEDT on 16 January 2025, and Koala reserves the right to suspend or end the offer at any time. While this 
            offer is active, if you are a new customer and agree to receive marketing communications by signing up to Koala’s email mailing list, 
            you will receive a code that entitles you to either a discount or dollar saving off your first order placed through the 
            <a className="text-[#586A4D] underline" href="/"> au.koala.com</a> website.</p>
          <p className="text-lg">The discount or dollar saving will be revealed or confirmed in an email that will be sent after you have have signed up to Koala’s mailing list.
            Offer is only available to Australian residents who are new customers to Koala that have not previously made a purchase and have received an email
            with a code for the discount or dollar saving. Excludes bundles, clearance products, delivery charges, assembly services and the purchase of gift 
            cards. If the code you receive is for: (i) a dollar saving, the amount of that saving will be applied to the cart value where the promotion code is
            applied at checkout and the total cart value (excluding the value of products that are excluded from the offer) is $1,000 or greater, or (ii) a 
            percentage discount, that discount will be applied off the RRP for products not excluded from the offer where the promotion code is applied at 
            checkout (with a maximum discount of $3,000). The offer can be redeemed only once per person as part of their first transaction. Not valid in 
            conjunction with any sale or other promotion or offer. Offer is subject to change and may be suspended or withdrawn at any time. All other 
            <a className="text-[#586A4D] underline" href="/policies/websiteterms"> Terms of Service</a> continue to apply.</p>
            <h1 className="text-lg font-bold">SMS Sign-up Offer</h1>
            <p className="text-lg">This offer commences at 9:00 AM AEST on 13 February 2025, and Koala reserves the right to suspend or end the offer at any time. While this offer is 
              active, if you provide your mobile phone number and agree to receive marketing communications to that number via SMS, you will receive a code that 
              entitles you to 10% off one order placed through the <a className="text-[#586A4D] underline" href="/">au.koala.com</a> website.</p>
            <p className="text-lg">Offer is only available to Australian Residents who are customers that have not previously signed up to receive marketing communications from Koala 
              via SMS, and may only be redeemed once per person. Excludes bundles, clearance products, delivery charges, assembly services, and the purchase of 
              gift cards. The 10% discount will be applied off the RRP for products not excluded from the offer where the promotion code is applied at checkout 
              (up to a maximum discount of $3,000). Not valid in conjunction with any sale or other promotion or offer. Offer is subject to change and may be 
              withdrawn at any time. All other <a className="text-[#586A4D] underline" href="/policies/termsofservices">Terms of Service</a> continue to apply.</p>
            <h1 className="text-lg font-bold">Mattress Quiz Offer</h1>
            <p className="text-lg">This offer starts at 8:00am AEST on 24 August 2024, and Koala reserves the right to suspend or end the offer at any time. Valid only for 
              Australian residents who have received an email from Koala with the promotion code for this offer after completing Koala’s mattress quiz. Discount 
              will be applied off the RRP for one unit of the mattress product stated in the email when the promotion code is entered at checkout. Code can be 
              redeemed only once per person during the offer period. Not valid in conjunction with any sale or other promotion or offer. Offer is subject to 
              change and may be withdrawn at any time. All other <a className="text-[#586A4D] underline" href="/policies/termsofservices">Terms of Service</a> continue to apply.</p>
           
           <h1 className="text-2xl font-bold text-[#586A4D]">Rewards</h1>
           <p className="text-lg">Our current Rewards are as follows:</p>
           <h1 className="text-lg font-bold">'Refer a Friend' Referral Program</h1>
           <p className="text-lg">Koala’s Referral Program allows you to refer your friends or family to make a purchase from Koala, and you will receive a discount of $200 off 
            your next Koala purchase over $750 for each new customer you refer who:</p>
           <ul className="list-decimal list-inside space-y-2">
             <li>spends at least $750 with Koala in their first transaction; and</li>
             <li>keeps the Koala products they purchase for more than 14 days.</li>
           </ul>
           <p className="text-lg">Family members and friends you refer to Koala will receive a discount of $200 off their first purchase with Koala where they spend $750 
            (excluding delivery charges, assembly services and the purchase of gift cards). </p>
           <p className="text-lg">The $200 discount codes issued under our Referral Program are redeemable for 12 months after the date the discount code is issued.</p> 
           <h1 className="text-md font-bold ">How to receive the reward</h1>
           <p className="text-lg">When you refer a family member or friend, they will receive an email from Koala inviting them to receive $200 off their first purchase. Your family
             member or friend can take up this offer by providing Koala with their email address and agreeing to receive email communications from Koala.</p>
           <p className="text-lg">If they provide their email address to us, we will send them an email with their unique discount code. </p>
           <p className="text-lg">We will send you an email with your reward - a $200 off discount code - once the family member or friend you refer has made a purchase from Koala of 
            over $750 and has not returned the product(s) within 14 days of purchase.</p>
           <h1 className="text-md font-bold">Limitations</h1>
           <p className="text-lg">Both you and the family member or friend you refer will need to spend $750 for you to receive your reward, and any amounts spent on delivery charges, 
            assembly services or the purchase of gift cards will not count towards that $750 spend. The $200 discount cannot be applied retrospectively to any 
            purchases. </p>
          <p className="text-lg">You can only use one (1) $200 discount towards a single purchase (for example, if you have referred three friends and have received a $200 discount 
            for each referral, then you need to make three separate purchases to use these discounts - as you can’t apply more than one referral discount to any 
            individual purchase). You also cannot combine a $200 discount with any other promotion or offer (including any other discount code). </p>
          <p className="text-lg">Under this Referral Program, you can receive a maximum of 10 referral discounts.</p>
          <p className="text-lg">You are not permitted to refer yourself. Koala has a system in place that will automatically void the reward for any self-referrals. If you believe 
            that a self-referral did not take place, please contact our Customer Service team at <a className="text-[#586A4D]">support@koala.com.</a> </p>
          <p className="text-lg">Koala complies with the Spam Act 2003 (Cth) and we expect you to as well. This means you cannot use our Referral Program to create spam. You must
             not provide us with the email address of any family member or friend unless you have obtained their permission for us to send them an email about 
             our business. Sending emails or SMS to people without permission is considered spam.</p>
          <p className="text-lg">If there is an issue with retrieving your referral code or your personal URL (referral link), please contact our Customer Service team at 
             <a className="text-[#586A4D]"> support@koala.com</a> as they can retrieve this information for you.</p>

       </div>
    </div>

    <Subscribe/>
    <Footer/>

    </div>

    </>
  )
}

export default PromotionTerms
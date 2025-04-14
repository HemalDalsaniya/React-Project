import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Head from "../Head"
import Header from "../Header"
import Subscribe from "../Subscribe"
import Footer from "../Footer"

const TermsOfServices = () => {

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
         <h1 className="text-4xl font-bold ">Terms of Services</h1>
         <p className="text-lg">Welcome to a good night’s sleep</p>
         <p className="text-lg">We are Koala Sleep Pty Ltd (ABN 18 605 237 090), but you can call us Koala. In these Terms of Service, we also call ourselves “we”, “us” 
           and “our” and we refer to you as… you guessed it, “you” or “your”.</p>
         <p className="text-lg">The purchase of products on this website is only for delivery to addresses in Australia, and is subject to these Terms of Service.</p>
         <p className="text-lg">Our Terms of Service apply to anyone who purchases our products or who makes an offer to purchase our products so please read them carefully. 
           You indicate your acknowledgement of these Terms of Service before placing any orders on our website. </p>
         <p className="text-lg">We reserve the right to amend these Terms of Service at any time by updating them on our website. Changes that we make to these 
            Terms of Service will not affect any Orders that we have accepted. The Terms of Service that apply to your purchase are those made available to you at the time of purchase.</p>

         <h1 className="text-2xl font-bold text-[#586A4D]">About the products on our website</h1> 
         <h1 className="text-lg font-bold">Availability</h1> 
         <p className="text-lg">We generally have stock available. However, sometimes we run short and the availability of products on our website may be limited. We will try to include a statement on our 
            website when we are aware that a particular product is out of stock, but we are under no obligation to do so. We reserve the right to discontinue any product at any time.</p>
         <h1 className="text-lg font-bold">Accuracy of product descriptions</h1>
         <p className="text-lg">Occasionally there may be typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing or promotions. We reserve the right to correct any errors without notice. </p>
         <p className="text-lg">We know that colour is important and we make every effort to display the colours and images of our products on our website accurately. However, we cannot guarantee that the display of any colour on your 
           evice screen will be accurate. You may be able to return a product if you feel that the product description on our website does not match the product you receive (refer to the 120 night trial and Warranties 
           sections for further details).</p>
         <h1 className="text-lg font-bold">Modifications</h1>
         <p className="text-lg">Prices, descriptions and specifications of our products are subject to change until your order is confirmed. </p>

         <h1 className="text-2xl font-bold text-[#586A4D]">Ordering from us</h1>
         <h1 className="text-lg font-bold">How do you order from us?</h1>
         <p className="text-lg">You may have heard of ‘offer and acceptance’. That’s legal speak for creating a contract. </p>
         <p className="text-lg">When you visit our website, you can have a squiz at our products and, if you like what you see, you can make us an offer to purchase a product for the price listed on our website (this is your order). 
            We will review your order and, if we accept it, then we have a confirmed order. In legal terms, this means that when the order is confirmed we have a binding contract under which we agree to supply that 
            product to you for a price and you agree to accept the product and pay us that price for the product. </p>
        <p className="text-lg">There are three steps in the process:</p>
        <li>you submit your order to us,</li>
        <li>we confirm that we have received your order (but this is not acceptance of the order), and</li>
        <li>we accept or reject your order.</li>
        <p className="text-lg">Until we have accepted your offer, we are not legally bound to fulfil your order.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Payments </h1>
        <p className="text-lg">The prices of products on our website are displayed in Australian dollars and include GST where applicable. </p>
        <p className="text-lg">The costs associated with delivery of products in your order (including any additional delivery and assembly services you apply to your order) will be indicated to you during the checkout process,
             and will be paid together with the product price prior to dispatch.</p>
        <p className="text-lg">Just in case you are wondering, we don’t haggle over prices, the price on our website is the price you will pay if you submit an order to us. The only discounts we provide are for valid discount 
            codes provided as part of an offer, or if you have won one of our competitions or are eligible for a reward, (refer to our<a className="text-[#586A4D] underline" href="/policies/promotionterms"> Promotion Terms</a> for further details).</p>
        <p className="text-lg">The available payment methods for products you wish to purchase will be displayed at the point of purchase during check out and are subject to change without notice. Payment does not constitute 
            acceptance of your order, and your order is only accepted when we send you an email confirming delivery. If we reject your order, or cancel your order after we have accepted it, any payment already made will be refunded to you.</p>
        <p className="text-lg">All payments must be received in full prior to dispatch. If your payment is not received or is declined by your bank or credit card issuer, your order will be rejected. We cannot and will not hold the product for you, and do not 
            guarantee that the product will be available should you try to order it again.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Delivery</h1>   
        <h1 className="text-lg font-bold">Delivery and costs</h1> 
        <p className="text-lg">Orders placed by you and accepted by us will be delivered to the address you provide at the time of placing the order, as long as that delivery address is compliant with the delivery restrictions outlined on our website from time to time. 
            It is your responsibility to ensure that the address provided to us is correct. The delivery cost will be indicated to you during the checkout process and will have to be paid together with the product price prior to dispatch. </p>
        <p className="text-lg">In purchasing a product, you agree to accept delivery of the product at the address you have nominated. We will email or text you with approximate delivery dates and times once your order is ready for delivery, and may also send you a 
            tracking number. </p>
        <p className="text-lg">If you are not able to accept delivery on the date(s) and at the time(s) that we notify you of, you must advise us before a delivery is attempted. Any and all failed delivery attempts made by a courier will be charged to you at full price.</p> 
        <p className="text-lg">When you go through the checkout to pay for your products, you can choose whether delivery requires you to sign for the product(s) or whether the product(s) can be left at your chosen location without signature (we refer to this as “authority 
            to leave”). If you choose not to sign on delivery and provide us “authority to leave”, then you take the risk of the product(s) being damaged or stolen once we have delivered them to your chosen location.</p>

         <h1 className="text-lg font-bold">Requirements for delivery </h1>
         <p className="text-lg">So that we can deliver the products in your order to the delivery address, we need you to make sure that on the date(s) and at the time(s) for delivery:</p>
         <li>there is clear, unobstructed and safe access to the front door of the property, or the location at the delivery address that you have instructed us to deliver 
            the products;</li>
         <li>there is safe and adequate parking available at the delivery address so that we can complete delivery; and</li>
         <li>any animals are restrained or placed in a different area - this is for the protection of both your animals and our delivery team.</li>
         <p>If the delivery address is an apartment building or block of units, we are able to deliver to the door of the apartment or unit if: </p>
         <li>the building has a lift; or </li>
         <li>the door is up no more than three flights of stairs or 30 steps.</li>
         <p className="text-lg">Where we consider the premises, or environment and circumstances, to be unsafe or unsuitable for our team to deliver the products in your order to the delivery address, we reserve the right to refuse to complete the delivery. If this happens, 
            our Customer Service team will be in touch with you to make alternate arrangements. Additional fees may apply where delivery needs to be rescheduled due to no fault of Koala or our delivery team.</p>
         <h1 className="text-lg font-bold">Title and risk</h1>
         <p className="text-lg">We retain title to and ownership of each product in your order until payment is received in full for the product and it has been delivered to you. </p>
         <p className="text-lg">Risk (including risk of loss or damage) in any product purchased passes to you upon delivery of the product to the address you provide us for delivery of your order. </p>
 
        <h1 className="text-2xl font-bold text-[#586A4D]">Replacement parts</h1>
        <p className="text-lg">Please note that spare parts for Koala products are not typically available for sale. </p>
        <p className="text-lg">If you do require a spare part, please reach out to our Customer Service team at <a className="text-[#586A4D]">support@koala.com</a> who may be able to help find you a solution.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Refunds</h1>
        <p className="text-lg">Once your return has been accepted, or if we cancel your order or if we do not accept your order (and you have already made payment for it), the total you paid for the product(s) will be refunded to you via your original payment method. 
            If you made your purchase via interest-free finance, extra charges may apply from your finance provider.</p>
        <p className="text-lg">If we are unable to refund your payment via the original method of payment used during checkout, we will arrange payment to your designated financial institution account, provided that the financial institution account is in the same 
           name as shown in photo identity documents (we may require that you confirm your identity with a third party ID verification provider or request acceptable identification that includes a photo of you, your full name and a future expiry 
           date – for example, your Australian Driver’s Licence or Passport). If the financial institution account is in a name that is different to your name, you must provide us with a valid Statutory Declaration stating that the financial 
           institution account provided for the refund is yours. This information will be securely recorded and handled in accordance with our<a className="text-[#586A4D] underline"> Privacy Policy</a>. It may be used for fraud protection activities and it may be disclosed to a law 
           enforcement agency or regulatory authority, or otherwise by law.</p>
        <p className="text-lg">Please note, we will require your name, address and ABN if returning products totalling AUD 1,000 or more and requesting a Tax Adjustment Note.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Gift Card Terms</h1>
        <p className="text-lg">Our Gift Card Terms apply to anyone who uses an eGift Card issued by us, so please read these carefully. We reserve the right to update these Gift Card Terms at any time by updating them on our website.</p>
        <p className="text-lg">The use of an eGift Card is also subject to our <a className="text-[#586A4D] underline">Website Terms</a>, <a className="text-[#586A4D] underline">Promotion Terms</a> (as applicable), <a className="text-[#586A4D] underline">Privacy Policy</a> and remaining sections of these Terms of Service.</p>
        <h1 className="text-lg font-bold">Using your eGift Card</h1>
        <p className="text-lg">To redeem your eGift Card, you will need to enter the Gift Card Code at checkout. eGift Cards are redeemable up to the amount of their balance and may only be used towards the purchase of our products on <a className="text-[#586A4D] underline" href="/">au.koala.com.</a> </p>
        <p className="text-lg">Purchase amounts that exceed the value of the tendered eGift Card balance will require an additional payment for the balance due.</p>
        <p className="text-lg">If you have any issues with using your eGift Card, or for details of the current balance, please contact our Customer Service team at <a className="text-[#586A4D]">support@koala.com.</a></p>
        <h1 className="text-lg font-bold">Keeping your eGift Card secure</h1>
        <p className="text-lg">Please treat your eGift Card like cash and keep the details for the eGift Card in a secure location.</p>
        <p className="text-lg">The eGift Card cannot be replaced if lost, stolen, defaced or damaged and the risk of loss and title for the eGift Card passes to the Recipient when our email with the eGift Card details is sent to them.</p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Warranties and liability</h1>
        <h1 className="text-lg font-bold">Warranties</h1>
        <p className="text-lg">We love our products and we manufacture them to meet applicable Australian standards and guarantees under the Australian Consumer Law. Because we design our products with a focus on you - using only high-quality 
            components and materials that align with our values - we also offer specific warranties for the products you purchase from us (we call these our “Koala Warranties”). </p>
        <p className="text-lg">Importantly, our Koala Warranties do not cover the use of our products for any commercial purpose. If you purchase our products for a commercial purpose, you acknowledge that our products are designed and have been 
            tested for personal, household or domestic use only, and that our Koala Warranties will not apply to products purchased for any commercial use.</p>
        <p className="text-lg">To the maximum extent permitted by law (including the Australian Consumer Law), we exclude all other representations, warranties, conditions or terms, whether express or implied by statute, custom or common law. </p>
        <h1 className="text-lg font-bold">Our liability to you</h1>
        <p className="text-lg">We comply with all laws that apply to our business in Australia and our dealings with you (including, if you are in Australia, the Australian Consumer Law and the Privacy Act).</p>
        <p className="text-lg">However, to the maximum extent permitted by law (and without limiting your rights under the Australian Consumer Law): </p>
        <li>we will not be liable under any theory of law (including negligence) for any economic, special or indirect loss, any loss of profit, revenue, savings or goodwill, or any loss of or damage to data, arising in connection with the use of 
            our products or the purchase of or an offer to purchase our products;</li>
        <li>we will not be liable for any delay or non-performance of any of our obligations under these Terms of Service that is caused by circumstances beyond our reasonable control;</li>
        <li>our liability under any theory of law (including negligence) for any direct loss or damage arising in connection with the use of our products or the purchase of or an offer to purchase our products will be limited to the price paid or 
            payable for the applicable products, provided that nothing in these Terms of Service excludes or limits our liability for death, personal injury, or damage to property due to our negligence; and</li>
        <li>our liability to you will be reduced in proportion to any loss or damage caused by your negligence or breach of these Terms of Service.</li>

        <h1 className="text-2xl font-bold text-[#586A4D]">Indemnity</h1>
        <p className="text-lg">If you don’t comply with these Terms of Service, then we expect you to be responsible if someone sues us or we suffer a loss because of this.</p>
        <p className="text-lg">In legal terms, this means that, to the maximum extent permitted by law (including the Australian Consumer Law), you will at all times indemnify, and keep indemnified, us and our directors, officers, employees and agents from and against any loss 
         (including reasonable legal costs and expenses) or liability incurred or suffered by us arising from any claim, demand, suit, action or proceeding by any person against us where such loss or liability arose out of, in connection with or in respect of 
         your breach of these Terms of Service.</p>

         <h1 className="text-2xl font-bold text-[#586A4D]">Miscellaneous</h1>
         <p className="text-lg">These Terms of Service are governed by and construed in accordance with the laws of New South Wales, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of the State of New South Wales, Australia in relation to all matters relating to these Terms of Service.</p>
         <p className="text-lg">These Terms of Service, and our<a className="text-[#586A4D] underline"> Website Terms</a>, <a className="text-[#586A4D] underline">Promotion Terms</a> (where applicable) and <a className="text-[#586A4D] underline">Privacy Policy</a>, constitute the entire agreement between you and Koala with respect to your purchase of products from Koala using our website. </p>
         <p className="text-lg">If we do not exercise or enforce any right or provision under these Terms of Service, it will not constitute a waiver of such right or provision. Any waiver of any provision under these Terms of Service will only be effective if it is in writing from us. </p>
         <p className="text-lg">Any ambiguities in the interpretation of these Terms of Service shall not be construed against us. </p>
         <p className="text-lg">We make no representation or warranty that the content of our website complies with the laws of any country outside of Australia. If you make a purchase from outside of Australia, you do so at your own risk and are responsible for complying with the laws in the place where you access our website.
           To avoid any doubt, Koala will only deliver products to addresses in Australia.</p> 
         <p className="text-lg">We may, at any time and without your consent, assign or subcontract our rights and obligations under any contract we have with you to a third party, including for the purposes of fulfilment of an order.</p>
         <p className="text-lg">If any part of these Terms of Service is determined to be unlawful, void or unenforceable, such part shall be enforceable to the fullest extent permitted by law. Any unenforceable portion shall be deemed severed from these Terms of Service and such determination shall not affect the validity 
           and enforceability of any other remaining parts. </p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Any questions? Please contact us! </h1>
        <p className="text-lg">Please send your questions about these Terms of Service to our Customer Service team at <a className="text-[#586A4D]">support@koala.com</a>.</p>

        </div>
    </div>

    <Subscribe/>
    <Footer/>

    </div>

    </>
  )
}

export default TermsOfServices
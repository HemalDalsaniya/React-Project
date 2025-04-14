import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Head from "../Head"
import Header from "../Header"
import Subscribe from "../Subscribe"
import Footer from "../Footer"

const WebsiteTerms = () => {

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
       <h1 className="text-4xl font-bold">Website Terms</h1>
       <p className="text-lg">Welcome to a good night’s sleep</p>
       <p className="text-lg">Welcome to our home, koala.com. You may have found us by typing our URL into your browser or you may have been redirected here from another 
        website. Whatever route you took to get here, now that you are here, we would love you to stay, have a cuppa, and take a look around. Before 
        you do, there are a few things you need to read because you will be bound by these Website Terms if you continue to use our website. </p>
       <p className="text-lg">We are Koala Sleep Pty Ltd (ABN 18 605 237 090), but you can call us Koala. In these Website Terms, we also call ourselves “we”, “us” and 
        “our” and we refer to you as… you guessed it, “you” or “your”.</p>
       <p className="text-lg">These Website Terms apply to anyone who accesses our website, including our customers, suppliers, advertisers, service providers and anyone 
        else who just wants to check us out online. We reserve the right to update these Website Terms at any time by updating this page. If you are 
        concerned about any of these Website Terms, please do not access our website or provide your personal information to us until you have resolved 
        your concerns.</p>

       <h1 className="text-2xl font-bold text-[#586A4D]">First things first - your privacy</h1>
       <p className="text-lg">We collect personal information about you when you visit our website, communicate with us through our live chat function, purchase or offer to 
        purchase products from us, participate in one of our promotions, when you contact us by email, telephone or letter or connect with us from other 
        social media applications, services or websites.</p>
       <p className="text-lg">The purposes for which we collect this personal information are set out in our <a className="text-[#586A4D]" href="/policies/privacypolicy">Privacy Policy.</a> Our Privacy Policy also explains how:</p>
       <li>we store and use your personal information; </li>
       <li>you may access and correct your personal information;</li>
       <li>you can lodge a complaint regarding the handling of your personal information</li>
       <li>we will handle any complaint. </li>
       <p className="text-lg">If you would like any further information about our privacy practices, please view our <a className="text-[#586A4D] underline" href="/policies/privacypolicy">Privacy Policy.</a></p>
       <p className="text-lg">By providing your personal information to us, you consent to the collection, use, storage and disclosure of that information as described in our <a className="text-[#586A4D] underline" href="/policies/privacypolicy">Privacy Policy. </a></p>
       
      <h1 className="text-2xl font-bold text-[#586A4D]">Our House Rules</h1>
      <p className="text-lg">When you visit our website you are our guest and, like any home, there are a few house rules that apply (also known as our Acceptable Use Policy). 
        These rules are designed to protect you, protect us and protect our other guests.</p>
      <p className="text-lg">It’s pretty simple, don’t break the law, respect our property and the property of others, and respect personal information and other people’s reputation. 
        Also, you will not and will not encourage or facilitate anyone else to: </p>
      <li>do anything illegal through our website or when accessing our website;</li>
      <li>gain unauthorised access to our systems, introduce malicious code or use our website as a platform for causing disruption to our systems or anyone else's 
        systems or property;</li>
      <li>attempt to alter the performance, functionality, information or content of our website;</li>
      <li>use our website to annoy, defame, offend or harm us or anyone else;</li>
      <li>attempt to access any data that you are not authorised to access;</li>
      <li>copy, reuse or otherwise exploit any intellectual property on our website; or</li>
      <li>provide us with inaccurate, incomplete or misleading information.</li>
      <p className="text-lg">If you break our House Rules, you will no longer be welcome at our home. This means your right to access our website will end and we may prevent you from returning. 
        We may also report your activity to the relevant law enforcement or regulatory authorities.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Restricting access</h1>
      <p className="text-lg">Like all homeowners, we are entitled to decide who can visit, for how long and we may ask a visitor to leave if they have overstayed their welcome. This means we 
        reserve the right to restrict, suspend or terminate your access to our website, any content, or any feature of our website at any time without notice and we will not be 
        responsible for any loss, cost, damage or liability that may arise as a result.</p>
      <p className="text-lg">If we believe that any account for using our website has been misused by you or anyone else, we may delete that account (including any order or payment information 
        associated with the account).</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Our website is for personal use only</h1>
      <p className="text-lg">You are welcome to visit our website to check out what we sell and to purchase our products. But you can’t hold your own parties here or try to sell your own products 
        from our front yard. In other words, our website is for your personal use only and you may not access or use our website for any commercial purpose. </p>
      <p className="text-lg">You must not access our website to: </p>
      <li>collect any data about other users or to collect any other data stored or generated by our website or its use (such as website traffic, cookies etc) - we respect the 
        privacy of all our visitors;</li>
      <li>copy or replicate any of our website content; or</li>
      <li>create affiliate links or use our website for any advertising or advertising revenue generation on your own website.</li>
      <p className="text-lg">Unless you have our prior written consent, you must not refer to our website in any information that you publish, including on your website and you must not suggest 
        that there is any commercial relationship between us or that we endorse your organisation, or any of your products, services or opinions.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Linking to our website</h1>
      <p className="text-lg">We would love you to direct people to our website so they can check us out. You may share a link to our home page on your website, provided you do so in a way that 
        is fair and legal and does not damage our reputation or take advantage of it. </p>
      <p className="text-lg">By publishing such a link you must not suggest any form of association between us, or that we approve of or endorse your products, website or organisation. You must 
        not establish a link to our website from any website that is not owned by you. You may not frame our website on your website, nor may you create a link to any part of 
        our website other than the home page. We reserve the right to withdraw this linking permission without notice.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Third party websites and tools</h1>
      <p className="text-lg">Our website may contain links to websites and tools supplied or operated by other people (we refer to each of these people as a “third party”). </p>
      <p className="text-lg">We provide the website links and tools because they may be useful to you, but we don’t endorse the websites, tools or associated products and services and we don’t 
        provide any guarantees or promises in relation to their quality, accuracy or performance. This means that you use the website links and tools at your own risk. 
        We are not liable to you or anyone else for any loss or damage that you suffer as a result of using any third party websites or tools that we make available to you on our website. </p>
      <p className="text-lg">If you use any third party websites and tools, your use will be subject to the third party provider’s standard terms and conditions (including any applicable privacy policy). 
        Please review the third party's terms and conditions, policies and practices carefully and make sure you understand them before you access their website, use their tools or engage in 
        any transaction with the third party. Complaints, claims, concerns, or questions regarding a third party’s websites, tools, products or services should be directed to the third party.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Security</h1>
      <p className="text-lg">Our website is publicly available, and you have access to it via the internet. </p>
      <p className="text-lg">We take steps to secure our website, but as we all know, the internet is not 100% secure and using the internet exposes computer systems to potential interference and damage. 
        You access our website at your own risk and you must take your own precautions to secure your systems by putting in place anti-malware and other security that you think is appropriate. </p>
      <p className="text-lg">In legal terms, this means that to the extent permitted by law (including the Australian Consumer Law), we don’t make any promises that your access to our website will be uninterrupted, 
        error-free or free from viruses, or that our website will be secure. We are not liable to you or anyone else if interference with or damage to any computer systems occurs in connection 
        with the use of our website or a third party website or tool linked on our website. </p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Our liability to you</h1>
      <p className="text-lg">We have created our website so you can check out our products and, if you like what you see, you can make a purchase. We comply with all laws that apply to our business in Australia 
        and our dealings with you (including, if you are in Australia, the Australian Consumer Law and the Privacy Act). </p>
      <p className="text-lg">However, to the maximum extent permitted by law (and without limiting your rights under the Australian Consumer Law), we will not be liable for any loss, damage or expense 
        (whether direct or indirect, and irrespective of how it is incurred) arising from or in connection with your use of our website or the information or materials contained on it 
        (including any third party website links or tools), the inaccessibility of our website or the fact that certain information or materials contained on it are incorrect, incomplete or not up-to-date.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Indemnity</h1>
      <p className="text-lg">If you access our website and don’t comply with these Website Terms, then we expect you to be responsible if someone sues us or we suffer a loss because of this.</p>
      <p className="text-lg">In legal terms, this means that, to the maximum extent permitted by law (including the Australian Consumer Law), you will at all times indemnify, and keep indemnified, us and our directors, officers, 
        employees and agents from and against any loss (including reasonable legal costs and expenses) or liability incurred or suffered by us arising from any claim, demand, suit, action or proceeding by any 
        person against us where such loss or liability arose out of, in connection with or in respect of your breach of these Website Terms.</p>

      <h1 className="text-2xl font-bold text-[#586A4D]">Miscellaneous</h1>
      <p className="text-lg">These Website Terms are governed by and construed in accordance with the laws of New South Wales, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of the State of New South Wales, 
        Australia in relation to all matters relating to these Website Terms. </p>
        <p className="text-lg">These Website Terms, together with our <a className="text-[#586A4D] underline" href="/policies/privacypolicy">Privacy Policy</a> (and, where applicable, our <a className="text-[#586A4D] underline" href="/policies/termsofservices">Terms of Service</a> and 
        <a className="text-[#586A4D] underline" href="/policies/promotionterms"> Promotion Terms</a>), and any other legal notices or statements provided on our website, constitute the 
          entire agreement between you and Koala with respect to your use of our website. </p>
        <p className="text-lg">If we do not exercise or enforce any right or provision under these Website Terms, it will not constitute a waiver of such right or provision. Any waiver of any provision under these Website Terms will 
          only be effective if it is in writing from us.</p>
        <p className="text-lg">Any ambiguities in the interpretation of these Website Terms shall not be construed against us. </p>
        <p className="text-lg">We make no representation or warranty that the content of our website complies with the laws of any country outside of Australia. If you access our website from outside of Australia, you do so at your 
          own risk and are responsible for complying with the laws in the place where you access our website. </p>
        <p className="text-lg">If any part of these Website Terms is determined to be unlawful, void or unenforceable, such part shall be enforceable to the fullest extent permitted by law. Any unenforceable portion shall be deemed 
          severed from these Website Terms and such determination shall not affect the validity and enforceability of any other remaining parts. </p>

        <h1 className="text-2xl font-bold text-[#586A4D]">Any questions? Please contact us! </h1>
        <p className="text-lg">Please send your questions about these Website Terms to our Customer Service team  using the contact information in the <a className="text-[#586A4D] underline" href="/pages/contact">Contact us</a> section.</p>

       </div>
    </div>

     <Subscribe/>
    <Footer/>

    </div>

    </>
  )
}

export default WebsiteTerms    

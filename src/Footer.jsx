import { Link } from 'react-router-dom';
import Footdiv from '/icons/Footdiv.png';
import FootPayment from '/icons/FootPayment.png';

const Footer = () => {
  return (
    <>
      <div className="flex ps-40 bg-[#586A4D]">
       <div className="flex-row pt-12">
    
      <div className="flex flex-col items-start cursor-pointer w-120">

  <svg  viewBox="0 0 76 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" className="w-30 h-20">
  <g clipPath="url(#clip0_1_3504)">
  <path d="M8.86078 15.5408L14.7229 9.68679C14.7854 9.62436 14.828 9.54478 14.8453 9.45814C14.8626 9.37149 14.8537 9.28167 14.82 9.20003C14.7862 9.11839 14.7289 9.04861 14.6555 8.99951C14.582 8.95041 14.4957 8.9242 14.4073 8.9242H10.2031C10.1439 8.9242 10.0852 8.93599 10.0306 8.95888C9.97595 8.98177 9.92641 9.0153 9.88485 9.05752L4.54717 14.4807V0.4583C4.54717 0.399654 4.53562 0.341582 4.51318 0.2874C4.49073 0.233218 4.45784 0.183987 4.41637 0.142518C4.3749 0.101049 4.32567 0.0681539 4.27148 0.0457114C4.2173 0.0232689 4.15923 0.0117182 4.10058 0.0117188H0.497369C0.438722 0.0117182 0.38065 0.0232689 0.326468 0.0457114C0.272285 0.0681539 0.223054 0.101049 0.181585 0.142518C0.140115 0.183987 0.10722 0.233218 0.0847763 0.2874C0.062333 0.341582 0.0507815 0.399654 0.0507813 0.4583V23.1C0.0507808 23.1586 0.0623317 23.2167 0.0847747 23.2709C0.107218 23.3251 0.140113 23.3743 0.181583 23.4158C0.223052 23.4572 0.272284 23.4901 0.326467 23.5126C0.380649 23.535 0.438722 23.5466 0.497369 23.5466H4.10058C4.15923 23.5466 4.2173 23.535 4.27148 23.5126C4.32567 23.4901 4.3749 23.4572 4.41637 23.4158C4.45784 23.3743 4.49073 23.3251 4.51318 23.2709C4.53562 23.2167 4.54717 23.1586 4.54717 23.1V19.6772C4.54717 19.4472 4.61727 19.2227 4.74813 19.0335C4.87898 18.8444 5.06438 18.6997 5.2796 18.6186C5.49482 18.5376 5.72963 18.524 5.95274 18.5798C6.17584 18.6356 6.37664 18.7581 6.52836 18.9309L10.4468 23.3946C10.4887 23.4424 10.5403 23.4806 10.5982 23.5068C10.656 23.533 10.7188 23.5466 10.7824 23.5466H15.2952C15.3822 23.5466 15.4673 23.5212 15.54 23.4735C15.6128 23.4258 15.67 23.3579 15.7047 23.2781C15.7394 23.1984 15.7501 23.1102 15.7354 23.0245C15.7206 22.9387 15.6812 22.8591 15.6219 22.7955L8.86078 15.5408Z" fill="#ffffff"></path>
  <path d="M53.2005 0.0117188H56.7671C56.8856 0.0117188 56.9992 0.0587692 57.0829 0.142519C57.1667 0.22627 57.2137 0.339859 57.2137 0.4583V23.1C57.2137 23.2184 57.1667 23.332 57.0829 23.4158C56.9991 23.4995 56.8856 23.5466 56.7671 23.5466H53.2005C53.0821 23.5466 52.9685 23.4995 52.8847 23.4158C52.801 23.332 52.7539 23.2184 52.7539 23.1V0.4583C52.7539 0.339859 52.801 0.22627 52.8847 0.142519C52.9685 0.0587692 53.082 0.0117188 53.2005 0.0117188Z" fill="#ffffff"></path>
  <path d="M23.9041 8.55859C19.7733 8.55859 16.4102 12.068 16.4102 16.1987C16.4102 20.4027 19.7733 23.9121 23.9041 23.9121C28.0349 23.9121 31.3981 20.4027 31.3981 16.1987C31.3981 12.068 28.0349 8.55859 23.9041 8.55859ZM23.9041 19.964C21.9301 19.964 20.3947 18.2825 20.3947 16.1987C20.3947 14.1516 21.9301 12.5066 23.9041 12.5066C25.8416 12.5066 27.4135 14.1516 27.4135 16.1987C27.4135 18.2825 25.8416 19.964 23.9041 19.964Z" fill="#ffffff"></path>
  <path d="M34.4446 5.54224C35.162 4.82692 35.7034 3.95472 36.0262 2.99442C36.3372 2.06647 36.4383 1.08103 36.322 0.109276C35.3503 -0.00695994 34.3648 0.0940881 33.4369 0.405121C32.4772 0.729222 31.6053 1.27047 30.8891 1.98671C30.1728 2.70296 29.6316 3.57487 29.3075 4.53454C28.9964 5.46248 28.8954 6.44792 29.0116 7.41968C29.9834 7.53592 30.9688 7.43487 31.8968 7.12383C32.8571 6.80107 33.7293 6.25964 34.4446 5.54224V5.54224Z" fill="#ffffff" ></path>
  <path d="M48.2174 8.92415H45.0081C44.8896 8.92416 44.776 8.97121 44.6923 9.05496C44.6085 9.13871 44.5615 9.2523 44.5615 9.37074V10.2809C43.4087 9.20985 41.943 8.55859 40.3495 8.55859C36.6493 8.55859 33.6367 12.0679 33.6367 16.1987C33.6367 20.4027 36.6493 23.9121 40.3495 23.9121C41.6094 23.9055 42.8353 23.5034 43.8544 22.7626C43.921 22.7146 43.9996 22.686 44.0815 22.6798C44.1634 22.6736 44.2454 22.6901 44.3185 22.7275C44.3916 22.765 44.4529 22.8218 44.4958 22.8918C44.5387 22.9619 44.5614 23.0424 44.5615 23.1245V23.3679C44.5615 23.4153 44.5803 23.4607 44.6138 23.4942C44.6473 23.5277 44.6928 23.5465 44.7401 23.5465H48.2174C48.3358 23.5465 48.4494 23.4995 48.5332 23.4157C48.6169 23.332 48.664 23.2184 48.664 23.0999V9.37074C48.664 9.2523 48.6169 9.13871 48.5332 9.05496C48.4494 8.97121 48.3358 8.92416 48.2174 8.92415V8.92415ZM41.3515 19.964C39.3775 19.964 37.8421 18.2825 37.8421 16.1987C37.8421 14.1516 39.3775 12.5066 41.3515 12.5066C43.289 12.5066 44.8609 14.1516 44.8609 16.1987C44.8609 18.2825 43.289 19.964 41.3515 19.964Z" fill="#ffffff"></path>
  <path d="M74.858 8.92415H71.6487C71.5303 8.92415 71.4167 8.97121 71.3329 9.05496C71.2492 9.13871 71.2021 9.2523 71.2021 9.37074V10.2809C70.0493 9.20985 68.5837 8.55859 66.9902 8.55859C63.2899 8.55859 60.2773 12.0679 60.2773 16.1987C60.2773 20.4027 63.2899 23.9121 66.9902 23.9121C68.25 23.9055 69.476 23.5034 70.495 22.7626C70.5617 22.7146 70.6402 22.686 70.7221 22.6798C70.804 22.6736 70.886 22.6901 70.9591 22.7275C71.0322 22.765 71.0936 22.8218 71.1364 22.8918C71.1793 22.9619 71.202 23.0424 71.2021 23.1245V23.3679C71.2021 23.4153 71.221 23.4607 71.2545 23.4942C71.288 23.5277 71.3334 23.5465 71.3808 23.5465H74.858C74.9765 23.5465 75.0901 23.4995 75.1738 23.4157C75.2576 23.332 75.3046 23.2184 75.3046 23.0999V9.37074C75.3046 9.2523 75.2576 9.13871 75.1738 9.05496C75.0901 8.97121 74.9765 8.92416 74.858 8.92415V8.92415ZM67.9922 19.964C66.0181 19.964 64.4828 18.2825 64.4828 16.1987C64.4828 14.1516 66.0181 12.5066 67.9922 12.5066C69.9296 12.5066 71.5015 14.1516 71.5015 16.1987C71.5015 18.2825 69.9296 19.964 67.9922 19.964Z" fill="#ffffff"></path>
  </g>
  <defs>
  <clipPath id="clip0_1_3504">
  <rect width="75.3214" height="24" fill="white"></rect>
  </clipPath>
  </defs>
</svg>

      <div className="space-y-4 text-white">
        <p>
          In the spirit of reconciliation, Koala acknowledges the Traditional
          Custodians of Country throughout Australia and their connections to
          land, sea and community.
        </p>
        <p>
          We pay our respect to their Elders past and present and extend that
          respect to all Aboriginal and Torres Strait Islander peoples today.
        </p>
      </div>

      <div>
        <nav className="flex space-x-4 pt-8">
        <div className="flex-row w-10 h-10 items-center justify-center">
        <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20">
        <path fill="#ffffff" d="M18 10.049C18 5.603 14.419 2 10 2c-4.419 0-8 3.603-8 8.049C2 14.067 4.925 17.396 8.75 18v-5.624H6.719v-2.328h2.03V8.275c0-2.017 1.195-3.132 3.023-3.132.874 0 1.79.158 1.79.158v1.98h-1.009c-.994 0-1.303.621-1.303 1.258v1.51h2.219l-.355 2.326H11.25V18c3.825-.604 6.75-3.933 6.75-7.951Z"></path>
       </svg>
       </div>

      <div className="flex-row  w-10 h-10 p-1  items-center justify-center">
      <svg aria-hidden="true" focusable="false"  viewBox="0 0 20 20">
      <path fill="#ffffff" d="M13.23 3.492c-.84-.037-1.096-.046-3.23-.046-2.144 0-2.39.01-3.238.055-.776.027-1.195.164-1.487.273a2.43 2.43 0 0 0-.912.593 2.486 2.486 0 0 0-.602.922c-.11.282-.238.702-.274 1.486-.046.84-.046 1.095-.046 3.23 0 2.134.01 2.39.046 3.229.004.51.097 1.016.274 1.495.145.365.319.639.602.913.282.282.538.456.92.602.474.176.974.268 1.479.273.848.046 1.103.046 3.238.046 2.134 0 2.39-.01 3.23-.046.784-.036 1.203-.164 1.486-.273.374-.146.648-.329.921-.602.283-.283.447-.548.602-.922.177-.476.27-.979.274-1.486.037-.84.046-1.095.046-3.23 0-2.134-.01-2.39-.055-3.229-.027-.784-.164-1.204-.274-1.495a2.43 2.43 0 0 0-.593-.913 2.604 2.604 0 0 0-.92-.602c-.284-.11-.703-.237-1.488-.273ZM6.697 2.05c.857-.036 1.131-.045 3.302-.045 1.1-.014 2.202.001 3.302.045.664.014 1.321.14 1.943.374a3.968 3.968 0 0 1 1.414.922c.41.397.728.88.93 1.414.23.622.354 1.279.365 1.942C18 7.56 18 7.824 18 10.005c0 2.17-.01 2.444-.046 3.292-.036.858-.173 1.442-.374 1.943-.2.53-.474.976-.92 1.423a3.896 3.896 0 0 1-1.415.922c-.51.191-1.095.337-1.943.374-.857.036-1.122.045-3.302.045-2.171 0-2.445-.009-3.302-.055-.849-.027-1.432-.164-1.943-.364a4.152 4.152 0 0 1-1.414-.922 4.128 4.128 0 0 1-.93-1.423c-.183-.51-.329-1.085-.365-1.943C2.009 12.45 2 12.167 2 10.004c0-2.161 0-2.435.055-3.302.027-.848.164-1.432.365-1.942a4.44 4.44 0 0 1 .92-1.414 4.18 4.18 0 0 1 1.415-.93c.51-.183 1.094-.33 1.943-.366Zm.427 4.806a4.105 4.105 0 1 1 5.805 5.805 4.105 4.105 0 0 1-5.805-5.805Zm1.882 5.371a2.668 2.668 0 1 0 2.042-4.93 2.668 2.668 0 0 0-2.042 4.93Zm5.922-5.942a.958.958 0 1 1-1.355-1.355.958.958 0 0 1 1.355 1.355Z"></path>
      </svg>
      </div> 
      </nav>
      </div>

      <div className="flex-row pt-8 rounded-2xl items-center justify-center">
      <img
        src={Footdiv}
        alt="Footdiv"
        width="250px"
        height="45px"
      /></div>

    </div>
  </div> 
  
  <div className="flex ml-auto justify-end px-40 gap-x-16"> 
     <div className="flex flex-col py-16 space-y-6 ">
        <h3 className="text-lg font-bold text-white">Help</h3>
        
        <ul>
        <div className="flex flex-col space-y-6">
        <Link
          to="/pages/accounts"
          className="text-white hover:text-stone-200 "
        >Request Delivery Change
        </Link>
        <Link
          to="/pages/contact"
          className="text-white hover:text-stone-200 "
        >Contact and FAQs
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Finance Options
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >My Account
        </Link>
        </div>
       </ul> 
           
      </div>

      <div className="flex flex-col py-16 space-y-6">
        <h3 className="text-lg font-bold text-white">About</h3>
        
        <ul>
        <div className="flex flex-col space-y-6">
        <Link
          to="/pages/whykoala"
          className="text-white hover:text-stone-200 "
        >About Us
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Our Mission
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Trade & Commercial
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Koala Second Home
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Koala Showroom
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Careers
        </Link>
        <Link
          to="/"
          className="text-white hover:text-stone-200 "
        >press@koala.com
        </Link>
        </div>
        </ul>
        </div>

        <div className="flex flex-col py-16 space-y-6">
        <h3 className="text-lg font-bold text-white">Resources</h3>
        
        <ul>
        <div className="flex flex-col space-y-6">
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Delivery
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >120 Night Trial
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Warrenty
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Treetops Blog
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Refer a Friend
        </Link>
        </div>
        </ul>
        </div>

        <div className="flex flex-col py-16 space-y-6 ">
        <h3 className="text-lg font-bold text-white">Shop</h3>
        
        <ul>
        <div className="flex flex-col space-y-6">
        <Link
          to="/collections/mattresses"
          className="text-white hover:text-stone-200 "
        >Mattresses
        </Link>
        <Link
          to="/collections/sofabeds"
          className="text-white hover:text-stone-200 "
        >Sofa Beds
        </Link>
        <Link
          to="/collections/sofas"
          className="text-white hover:text-stone-200 "
        >Sofas
        </Link>
        <Link
          to="/collections/bedroom"
          className="text-white hover:text-stone-200 "
        >Bedroom
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Living Room
        </Link>
        <Link
          to=""
          className="text-white hover:text-stone-200 "
        >Outdoor
        </Link>
        </div>
        </ul>
        </div>
    </div>

</div>

<div className="flex pb-14 bg-[#586A4D] justify-between">
<div className="flex-row mx-40 border-y-1 border-white w-full">
  <nav>
    <div className="float-left py-1">
    <ul>
      <div className="w-200 flex space-x-4 py-5"> 
        <li
          to="/"
          className="text-white "
        >
          © 2025 Koala
        </li>
        <Link
          to="/policies/privacypolicy" 
          className="text-white hover:text-stone-200"
        >
          Privacy Policy
        </Link>
        <Link
          to="/policies/websiteterms"
          className="text-white hover:text-stone-200"
        >
          Website Terms
        </Link>
        <Link
          to="/policies/termsofservices"
          className="text-white hover:text-stone-200"
        >
          Terms of Service
        </Link>
        <Link
          to="/policies/promotionterms"
          className="text-white hover:text-stone-200"
        >
          Promotion Terms
        </Link>
        
      </div>   
      </ul>
      </div>
      <div className="flex float-right py-5">
        <img
            src={FootPayment}  
            alt="FootPayment" 
            width="auto"
            height="auto" 
        />
      </div>
    </nav>
  </div>
</div>

    </>
  )
}

export default Footer
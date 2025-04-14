import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Header = () => {

  const msg = [
    "Free delivery on any mattress Australia-wide*",
    "World class warranty, up to 10 years",
    "Try it properly with 120-day free returns"
    
  ];
  const [currentMsg, setCurrentMsg] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCurrentMsg((prev) => (prev + 1)%3);
    }, 3000);

    return () => clearInterval(int);
  }, []);

    

  return (
     <>
   <div className="flex py-2 px-40 bg-zinc-100">
   <nav>

    <ul className="flex justify-between">
      <div className="flex items-center w-100 justify-start cursor-pointer z-50">
        <li className="relative group">
          <span className="gap-x-0.5 text-gray-700 hover:text-gray-500 py-4 px-1 cursor-pointer]">About</span>
          <svg className="size-5 ml-0 float-end text-gray-600 m-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
            <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
          </svg>
          <div className="absolute hidden group-hover:block bg-gray-100 text-gray-700 w-48 rounded-b-lg">
            <Link to="/pages/whykoala" className="block py-2 px-4 bg-white hover:bg-gray-100 rounded-t-lg" >Why Koala</Link>
            <Link to="" className="block py-2 px-4 bg-white hover:bg-gray-100">Koala Second Home</Link>
            <Link to="" className="block py-2 px-4 bg-white hover:bg-gray-100 rounded-b-lg">Sydney Showroom</Link>
          </div>
        </li>
      </div>

      <div className=" flex w-200 justify-center">
        <div className="text-md text-gray-700 ">{msg[currentMsg]}</div>
      </div>

      <div className="w-96 flex space-x-4 justify-end z-50"> 
        <Link
          to="/pages/contact"
          className="text-gray-700 hover:text-gray-500"
        >
          FAQs
        </Link>
        <Link
          to=""
          className="text-gray-700 hover:text-gray-500"
        >
          Trade
        </Link>
        <Link
          to="/pages/accounts"
          className="text-gray-700 hover:text-gray-500"
        >
          Manage my orders
        </Link>
        <li className="relative group z-1">
          <span className="gap-x-0.5 text-gray-700 cursor-pointer">Language
            <svg className="size-5 text-gray-600 float-end m-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
            </svg>
          </span>

          <div className="absolute hidden group-hover:block bg-gray-100 text-gray-700 w-72 right-0 rounded-b-lg">
           
           <Link to="" className="block py-2 px-4 bg-zinc-200 hover:bg-gray-100 rounded-t-lg " >
            {/* Australia */}
            <div className="flex justify-between">
              <div className="flex justify-start gap-x-2">
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
              <g clipPath="url(#clip0_270_55193)">
               <rect width="16" height="12" fill="white"></rect>
               <path  d="M0 0H16V12H0V0Z" fill="#2E42A5"></path>
               <g clipPath="url(#clip1_270_55193)">
               <rect width="9" height="7" fill="#2E42A5"></rect>
               <path d="M-1.00208 6.49993L0.9784 7.36853L9.045 0.944391L10.0897 -0.346375L7.97182 -0.636686L4.68165 2.13166L2.0334 3.99688L-1.00208 6.49993Z" fill="#F7FCFF"></path>
               <path d="M-0.730957 7.10849L0.278004 7.61255L9.71451 -0.466309H8.29782L-0.730957 7.10849Z" fill="#F50100"></path>
               <path d="M10.0022 6.49993L8.02172 7.36853L-0.0448761 0.944391L-1.08953 -0.346375L1.0283 -0.636686L4.31847 2.13166L6.96673 3.99688L10.0022 6.49993Z" fill="#F7FCFF"></path>
               <path d="M9.93457 6.93667L8.92561 7.44073L4.90745 3.98176L3.71615 3.59529L-1.1901 -0.341973H0.226597L5.13009 3.50184L6.43256 3.96525L9.93457 6.93667Z" fill="#F50100"></path>
               <path d="M4.99226 0H3.99226V3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0Z" fill="#F50100"></path>
               <path d="M3.24226 -0.75H5.74226V2.25H9.75V4.75H5.74226V7.75H3.24226V4.75H-0.75V2.25H3.24226V-0.75ZM3.99226 3H0V4H3.99226V7H4.99226V4H9V3H4.99226V0H3.99226V3Z" fill="#F7FCFF"></path>
               </g>
               <g clipPath="url(#clip2_270_55193)">
               <path d="M4.40804 9.83423L3.81761 10.3799L3.87608 9.57805L3.08136 9.45664L3.7447 9.00243L3.34412 8.30538L4.11283 8.54081L4.40804 7.79303L4.70326 8.54081L5.47196 8.30538L5.07138 9.00243L5.73472 9.45664L4.94 9.57805L4.99847 10.3799L4.40804 9.83423Z" fill="#F7FCFF"></path>
               <path d="M10.776 6.06899L10.3824 6.43275L10.4213 5.89821L9.89152 5.81726L10.3337 5.51446L10.0667 5.04976L10.5792 5.20671L10.776 4.70819L10.9728 5.20671L11.4853 5.04976L11.2182 5.51446L11.6604 5.81726L11.1306 5.89821L11.1696 6.43275L10.776 6.06899Z" fill="#F7FCFF"></path>
               <path d="M11.7147 2.37667L11.3211 2.74043L11.3601 2.20588L10.8302 2.12494L11.2725 1.82213L11.0054 1.35744L11.5179 1.51439L11.7147 1.01587L11.9115 1.51439L12.424 1.35744L12.1569 1.82213L12.5991 2.12494L12.0693 2.20588L12.1083 2.74043L11.7147 2.37667Z" fill="#F7FCFF"></path>
               <path d="M14.0614 4.22286L13.6678 4.58662L13.7067 4.05208L13.1769 3.97113L13.6191 3.66833L13.3521 3.20363L13.8646 3.36058L14.0614 2.86206L14.2582 3.36058L14.7707 3.20363L14.5036 3.66833L14.9458 3.97113L14.416 4.05208L14.455 4.58662L14.0614 4.22286Z" fill="#F7FCFF"></path>
               <path d="M12.1841 9.53054L11.7904 9.8943L11.8294 9.35975L11.2996 9.27881L11.7418 8.976L11.4748 8.51131L11.9872 8.66826L12.1841 8.16974L12.3809 8.66826L12.8933 8.51131L12.6263 8.976L13.0685 9.27881L12.5387 9.35975L12.5777 9.8943L12.1841 9.53054Z" fill="#F7FCFF"></path>
               <path d="M13.8266 6.64792L13.4267 6.85817L13.5031 6.41285L13.1795 6.09746L13.6267 6.03249L13.8266 5.62732L14.0266 6.03249L14.4737 6.09746L14.1502 6.41285L14.2266 6.85817L13.8266 6.64792Z" fill="#F7FCFF"></path>
               </g>
              </g>
              <defs>
                <clipPath id="clip0_270_55193">
                  <rect width="16" height="12" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_270_55193">
                  <rect width="9" height="7" fill="white"></rect>
                </clipPath>
                <clipPath id="clip2_270_55193">
                  <rect width="12" height="10" fill="white" transform="translate(3 1)"></rect>
                </clipPath>
              </defs>
              </svg> Australia
              </div>
              <div>AUD $</div>
            </div>
            </Link>

            <Link to="" className="block py-2 px-4 bg-white hover:bg-gray-100" >
            {/* US */}
            <div className="flex justify-between">
              <div className="flex justify-start gap-x-2">
                 <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                 <g clipPath="url(#clip0_270_55071)">
                   <rect width="16" height="12" fill="white"></rect>
                   <path d="M0 0H16V12H0V0Z" fill="#E31D1C"></path>
                   <path  d="M0 1V2H16V1H0ZM0 3V4H16V3H0ZM0 6V5H16V6H0ZM0 7V8H16V7H0ZM0 10V9H16V10H0ZM0 12V11H16V12H0Z" fill="#F7FCFF"></path>
                   <rect width="9" height="7" fill="#2E42A5"></rect>
                   <path  d="M1.04005 2.17381L1.56997 1.80468L1.98103 2.10061H1.74829L2.21896 2.51691L2.05999 3.10061H1.811L1.56923 2.56451L1.36305 3.10061H0.748291L1.21896 3.51691L1.04005 4.17381L1.56997 3.80468L1.98103 4.10061H1.74829L2.21896 4.51691L2.05999 5.10061H1.811L1.56923 4.56451L1.36305 5.10061H0.748291L1.21896 5.51691L1.04005 6.17381L1.56997 5.80468L2.08271 6.17381L1.92329 5.51691L2.33506 5.10061H2.14514L2.56997 4.80468L2.98103 5.10061H2.74829L3.21896 5.51691L3.04005 6.17381L3.56997 5.80468L4.08271 6.17381L3.92329 5.51691L4.33506 5.10061H4.14514L4.56997 4.80468L4.98103 5.10061H4.74829L5.21896 5.51691L5.04005 6.17381L5.56997 5.80468L6.08271 6.17381L5.92329 5.51691L6.33506 5.10061H6.14514L6.56997 4.80468L6.98103 5.10061H6.74829L7.21896 5.51691L7.04005 6.17381L7.56997 5.80468L8.08271 6.17381L7.92329 5.51691L8.33506 5.10061H7.811L7.56923 4.56451L7.36305 5.10061H7.06494L6.92329 4.51691L7.33506 4.10061H7.14514L7.56997 3.80468L8.08271 4.17381L7.92329 3.51691L8.33506 3.10061H7.811L7.56923 2.56451L7.36305 3.10061H7.06494L6.92329 2.51691L7.33506 2.10061H7.14514L7.56997 1.80468L8.08271 2.17381L7.92329 1.51691L8.33506 1.10061H7.811L7.56923 0.564514L7.36305 1.10061H6.74829L7.21896 1.51691L7.05999 2.10061H6.811L6.56923 1.56451L6.36305 2.10061H6.06494L5.92329 1.51691L6.33506 1.10061H5.811L5.56923 0.564514L5.36305 1.10061H4.74829L5.21896 1.51691L5.05999 2.10061H4.811L4.56923 1.56451L4.36305 2.10061H4.06494L3.92329 1.51691L4.33506 1.10061H3.811L3.56923 0.564514L3.36305 1.10061H2.74829L3.21896 1.51691L3.05999 2.10061H2.811L2.56923 1.56451L2.36305 2.10061H2.06494L1.92329 1.51691L2.33506 1.10061H1.811L1.56923 0.564514L1.36305 1.10061H0.748291L1.21896 1.51691L1.04005 2.17381ZM7.05999 4.10061L7.21896 3.51691L6.74829 3.10061H6.98103L6.56997 2.80468L6.14514 3.10061H6.33506L5.92329 3.51691L6.06494 4.10061H6.36305L6.56923 3.56451L6.811 4.10061H7.05999ZM5.98103 4.10061L5.56997 3.80468L5.14514 4.10061H5.33506L4.92329 4.51691L5.06494 5.10061H5.36305L5.56923 4.56451L5.811 5.10061H6.05999L6.21896 4.51691L5.74829 4.10061H5.98103ZM4.21896 4.51691L4.05999 5.10061H3.811L3.56923 4.56451L3.36305 5.10061H3.06494L2.92329 4.51691L3.33506 4.10061H3.14514L3.56997 3.80468L3.98103 4.10061H3.74829L4.21896 4.51691ZM4.36305 4.10061H4.06494L3.92329 3.51691L4.33506 3.10061H4.14514L4.56997 2.80468L4.98103 3.10061H4.74829L5.21896 3.51691L5.05999 4.10061H4.811L4.56923 3.56451L4.36305 4.10061ZM3.05999 4.10061L3.21896 3.51691L2.74829 3.10061H2.98103L2.56997 2.80468L2.14514 3.10061H2.33506L1.92329 3.51691L2.06494 4.10061H2.36305L2.56923 3.56451L2.811 4.10061H3.05999ZM6.21896 2.51691L6.05999 3.10061H5.811L5.56923 2.56451L5.36305 3.10061H5.06494L4.92329 2.51691L5.33506 2.10061H5.14514L5.56997 1.80468L5.98103 2.10061H5.74829L6.21896 2.51691ZM3.98103 2.10061L3.56997 1.80468L3.14514 2.10061H3.33506L2.92329 2.51691L3.06494 3.10061H3.36305L3.56923 2.56451L3.811 3.10061H4.05999L4.21896 2.51691L3.74829 2.10061H3.98103Z" fill="#F7FCFF"></path>
                 </g>
                 <defs>
                   <clipPath id="clip0_270_55071">
                   <rect width="16" height="12" fill="white"></rect>
                   </clipPath>
                 </defs>
                 </svg> United States
              </div>
              <div>USD $</div>
            </div>
            </Link>
            
            <Link to="" className="block py-2 px-4 bg-white hover:bg-gray-100 rounded-b-lg" >
            {/* Japan */}
            <div className="flex justify-between">
              <div className="flex justify-start gap-x-2">
                <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-2">
                <g clipPath="url(#clip0_270_55029)">
                  <rect width="16" height="12" fill="white"></rect>
                  <path  d="M0 0V12H16V0H0Z" fill="#F7FCFF"></path>
                  <mask id="mask0_270_55029" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="12">
                    <path  d="M0 0V12H16V0H0Z" fill="white"></path>
                  </mask>
                  <g mask="url(#mask0_270_55029)">
                    <path  d="M8 9.75C10.0711 9.75 11.75 8.07107 11.75 6C11.75 3.92893 10.0711 2.25 8 2.25C5.92893 2.25 4.25 3.92893 4.25 6C4.25 8.07107 5.92893 9.75 8 9.75Z" fill="#E31D1C"></path>
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_270_55029">
                    <rect width="16" height="12" fill="white"></rect>
                  </clipPath>
                </defs> 
                </svg>Japan
              </div>
              <div>JPY ¥</div>
            </div>
            </Link>

          </div>
        </li>
      </div>

    </ul>
  </nav>
</div>

     </>
   )
}

export default Header
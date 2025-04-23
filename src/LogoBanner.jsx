import './logobanner.css'; // Import the custom CSS for the animation

const logos = [
  { src: "/images/logos/refinery29.jpg", alt: "Logo 1" },
  { src: "/images/logos/gq.jpg", alt: "Logo 2" },
  { src: "/images/logos/bazaar.jpg", alt: "Logo 3" },
  { src: "/images/logos/vogue.jpg", alt: "Logo 4" },
  { src: "/images/logos/urbanlist.jpg", alt: "Logo 5" },
  { src: "/images/logos/refinery29.jpg", alt: "Logo 6" },
  { src: "/images/logos/gq.jpg", alt: "Logo 7" },
  { src: "/images/logos/bazaar.jpg", alt: "Logo 8" },
  { src: "/images/logos/vogue.jpg", alt: "Logo 9" },
  { src: "/images/logos/urbanlist.jpg", alt: "Logo 10" }
];

const LogoBanner = () => {
  return (
    <>
    <div className="relative overflow-hidden mx-40 h-32 bg-zinc-100 rounded p-8">
      <div className="absolute left-0 top-0 font-bold text-2xl p-6 z-10 bg-zinc-100 h-full flex items-center">
        <p>As seen in</p>
      </div>

      <div className="absolute left-40 right-0 top-0 h-full flex items-center animate-scroll-logos">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className="h-32 w-48 mx-12 object-contain object-center"
          />
        ))}
       
      </div>
    </div>
    </>
  );
};

export default LogoBanner;


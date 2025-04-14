import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Carousel } from "@material-tailwind/react";
const SofasContent = () => {
    const [sortOrder, setSortOrder] = useState('');
    const [isColorOpen, setIsColorOpen] = useState(true);
    const [sofacolors, setSofacolors] = useState([]);
    const [isSizeOpen, setIsSizeOpen] = useState(true);
    const [sofasizes, setSofasizes] = useState([]);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [sofas, setSofas] = useState([]);
    const [colorFilter, setColorFilter] = useState([]); // Changed to array for multiple colors
    const [sizeFilter, setSizeFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3000/sofacolors')
            .then((response) => response.json())
            .then((data) => setSofacolors(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/sofasizes')
            .then((response) => response.json())
            .then((data) => setSofasizes(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/sofas')
            .then((response) => response.json())
            .then((data) => setSofas(data));
    }, []);
  
      // Filtered products
      const filteredProducts = sofas.filter((product) => {
        return (
            (colorFilter.length > 0 ? colorFilter.includes(product.color) : true) &&
            (sizeFilter.length > 0 ? sizeFilter.includes(product.size) : true) &&
            (priceFilter ? (product.price) <= (priceFilter) : true)
        );
    });

    // Sort the filtered products based on the selected sort order
    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'low-to-high') {
    
            return (a.price) - (b.price);
        } else if (sortOrder === 'high-to-low') {
    
            return (b.price) - (a.price);
        }
        return 0; // No sorting
    });

    const handleColorChange = (color) => {
        setColorFilter((prev) => {
            if (prev.includes(color)) {
                return prev.filter((c) => c !== color); // Remove color if already selected
            } else {
                return [...prev, color]; // Add color if not selected
            }
        });
    };

    const handleSizeChange = (size) => {
        setSizeFilter((prev) => {
            if (prev.includes(size)) {
                return prev.filter((s) => s !== size); // Remove size if already selected
            } else {
                return [...prev, size]; // Add size if not selected
            }
        });
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <>
            <div className="px-40 my-12">
                <div className="space-y-2 my-7">
                    <h1 className="text-4xl text-[#586A4D] font-bold">All Sofas</h1>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-lg">Our stylish and comfortable sofas, perfect for any living room.</p>
                        <label className="text-gray-800">Price : &nbsp; &nbsp;
                            <select onChange={(e) => setSortOrder(e.target.value)} className="bg-zinc-100 border-zinc-200 border-2 p-3 rounded">
                                <option value="" className="hover:bg-zinc-100">Choose Order</option>
                                <option value="low-to-high" className="hover:bg-zinc-100">Low to High</option>
                                <option value="high-to-low" className="hover:bg-zinc-100">High to Low</option>
                            </select>
                        </label>
                    </div>
                </div>

                <div className="flex mt-3 gap-x-14">
                    <div className="w-80 space-y-5 sticky top-0">
                        {/* Color section */}
                        <div className="w-80 cursor-pointer">
                            <button onClick={() => setIsColorOpen(!isColorOpen)}
                                className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                Color
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                </svg>
                            </button>

                            {isColorOpen && (
                                <div className="pt-6 px-3 grid grid-cols-4 grid-rows-2 gap-x-4 space-y-5">
                                    {sofacolors.map((col, index) => (
                                        <div key={index} onClick={() => handleColorChange(col.color)}>
                                            <button  style={{ backgroundColor: col.colorcode }}
                                                className={`rounded-full w-12 h-11 
                                                ${ colorFilter.includes(col.color) ? 'ring-2 ring-offset-3 border-black' : ' ' }`}
                                            ></button>
                                            <br/>
                                            <span className="ps-1">{col.color}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Size section */}
                        <div className="w-80 cursor-pointer">
                            <button onClick={() => setIsSizeOpen(!isSizeOpen)}
                                className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                Size
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                </svg>
                            </button>

                            {isSizeOpen && (
                                <div className="pt-6 px-3 space-y-5">
                                    {sofasizes.map((option) => (
                                        <label key={option.id} className="flex items-center gap-x-3">
                                            <input
                                                type="checkbox"
                                                className="accent-[#586A4D] w-5 h-5"
                                                checked={sizeFilter.includes(option.size)}
                                                onChange={() => handleSizeChange(option.size)}
                                            />
                                            <p className="text-md">{option.size}</p>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Max Price section */}
                        <div className="w-80 cursor-pointer">
                            <button onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                Price
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                    <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                </svg>
                            </button>

                            {isPriceOpen && (
                                <div className="pt-6 px-3 space-y-5">
                                        <div className="items-center gap-x-3">
                                        <p className="text-md"> Highest Price : $4,400</p><br/>
                                        <p className="text-md"> Lowest Price : $1,190</p><br/>
                                            <input
                                                type="number" min="0"
                                                className="w-40 h-10 bg-zinc-100 border-zinc-200 border-2 rounded p-3" placeholder="Max Price"
                                                onChange={(e) => setPriceFilter(e.target.value)}
                                            />
                                        </div>
                                </div>
                            )}
                        </div>

                    </div>

                    <div className="grid grid-cols-3 w-full justify-start gap-x-5 gap-y-8 cursor-pointer">
                        {sortedProducts.map((sofa) => (
                            <div key={sofa.id} className="space-y-1.5" onClick={() => handleProductClick(sofa.id)}>
                                <div className="rounded-xl">
                                    <img src={sofa.image} alt="image" className="rounded-lg w-96 h-70" />
                                </div>
                                
                                 {/* <Carousel className="rounded-xl">
                                         {sofa.image.map((img, index) => (
                                         <img
                                         key={index}
                                         src={img.src}
                                         alt={img.alt}
                                         className="h-full w-full object-cover"
                                         />
                                         ))}
                                     </Carousel> */}

                                <div className="flex text-gray-900 justify-start gap-1">
                                    <span>
                                        <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png" />
                                    </span>
                                    {sofa.review}
                                </div>

                                <h3 className="text-gray-900 font-bold">{sofa.title}</h3>
                                <p className="text-gray-900">{sofa.size}</p>
                                <p className="text-gray-900">From ${sofa.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
};

export default SofasContent




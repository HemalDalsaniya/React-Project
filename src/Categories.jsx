const Categories = () => {

    const categoriesData = [
        {
          id: 1,
          image: "/images/mattresses/mattress.png",
          title: "Mattresses"
          
        },
        {
          id: 2,
          image: "/images/sofabeds/sofa-bed.png",
          title: "Sofa Beds"
        },
        {
          id: 3,
          image: "/images/beds/bed.png",
          title: "Bed Bases"
        },
        {
          id: 4,
          image: "/images/sofas/sofa.png",
          title: "Sofas"
        }
      ];

  return (
    <>
      <div className="bg-white px-40 pt-14">
        <h1 className="text-4xl font-bold mb-8">Categories</h1> 

        <div className="flex justify-between gap-8">          
          {categoriesData.map((cat) => (
          <div key={cat.id}>
          <div className="rounded-xl">
          <img src={cat.image} alt="image" className="rounded-lg w-90 h-70"/>
          </div>
          <h2 className="font-bold text-lg mt-2">{cat.title}</h2>
        </div>
        ))}
        </div>
        
      </div>

    </>
  )
}

export default Categories
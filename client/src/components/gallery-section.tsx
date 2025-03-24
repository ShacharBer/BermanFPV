import { galleryImages } from "@/data/gallery";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-[#0F4C81] mb-4">Our Work Gallery</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            See examples of our custom builds, repairs, and drone projects from across Israel.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <img src={image.url} alt={image.alt} className="w-full h-64 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;

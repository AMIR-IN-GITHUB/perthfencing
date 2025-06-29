
import { useState, useEffect, useRef } from 'react';

const projects = [
  { id: 1, title: "Fence Photo 1", category: "Gallery", image: "/images/photo_1_2025-06-27_15-53-18.jpg" },
  { id: 2, title: "Fence Photo 2", category: "Gallery", image: "/images/photo_2_2025-06-27_15-53-18.jpg" },
  { id: 3, title: "Fence Photo 3", category: "Gallery", image: "/images/photo_3_2025-06-27_15-53-18.jpg" },
  { id: 4, title: "Fence Photo 4", category: "Gallery", image: "/images/photo_4_2025-06-27_15-53-18.jpg" },
  { id: 5, title: "Fence Photo 5", category: "Gallery", image: "/images/photo_5_2025-06-27_15-53-18.jpg" },
  { id: 6, title: "Fence Photo 6", category: "Gallery", image: "/images/photo_6_2025-06-27_15-53-18.jpg" },
  { id: 7, title: "Fence Photo 7", category: "Gallery", image: "/images/photo_7_2025-06-27_15-53-18.jpg" },
  { id: 8, title: "Fence Photo 8", category: "Gallery", image: "/images/photo_8_2025-06-27_15-53-18.jpg" },
  { id: 9, title: "Fence Photo 9", category: "Gallery", image: "/images/photo_9_2025-06-27_15-53-18.jpg" },
  { id: 10, title: "Fence Photo 10", category: "Gallery", image: "/images/photo_10_2025-06-27_15-53-18.jpg" },
  { id: 11, title: "Fence Photo 11", category: "Gallery", image: "/images/photo_11_2025-06-27_15-53-18.jpg" },
  { id: 12, title: "Fence Photo 12", category: "Gallery", image: "/images/photo_12_2025-06-27_15-53-18.jpg" },
  { id: 13, title: "Fence Photo 13", category: "Gallery", image: "/images/photo_13_2025-06-27_15-53-18.jpg" },
  { id: 14, title: "Fence Photo 14", category: "Gallery", image: "/images/photo_14_2025-06-27_15-53-18.jpg" },
  { id: 15, title: "Fence Photo 15", category: "Gallery", image: "/images/photo_15_2025-06-27_15-53-18.jpg" },
  { id: 16, title: "Fence Photo 16", category: "Gallery", image: "/images/photo_16_2025-06-27_15-53-18.jpg" },
  { id: 17, title: "Fence Photo 17", category: "Gallery", image: "/images/photo_17_2025-06-27_15-53-18.jpg" },
  { id: 18, title: "Fence Photo 18", category: "Gallery", image: "/images/photo_18_2025-06-27_15-53-18.jpg" },
  { id: 19, title: "Fence Photo 19", category: "Gallery", image: "/images/photo_19_2025-06-27_15-53-18.jpg" },
  { id: 20, title: "Fence Photo 20", category: "Gallery", image: "/images/photo_20_2025-06-27_15-53-18.jpg" },
  { id: 21, title: "Fence Photo 21", category: "Gallery", image: "/images/photo_21_2025-06-27_15-53-18.jpg" },
  { id: 22, title: "Fence Photo 22", category: "Gallery", image: "/images/photo_22_2025-06-27_15-53-18.jpg" },
  { id: 23, title: "Fence Photo 23", category: "Gallery", image: "/images/photo_23_2025-06-27_15-53-18.jpg" },
  { id: 24, title: "Fence Photo 24", category: "Gallery", image: "/images/photo_24_2025-06-27_15-53-18.jpg" }
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filterCategories = ['All', 'Residential', 'Commercial', 'Custom'];
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" ref={sectionRef} className={`py-20 bg-gray-50 ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-fence-700">Our Project Gallery</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore some of our finest fencing projects completed for satisfied clients throughout Los Angeles.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {filterCategories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full transition-colors ${
                activeFilter === category
                  ? 'bg-fence-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md h-72 transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fence-600/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-white/80">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/photo_1_2025-06-27_15-53-18.jpg')" }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Quality Fencing Solutions for Your Property
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-8 font-semibold drop-shadow-md">
            Perth Fencing WA provides expert fence installation, repair, and maintenance services to residential and commercial clients in Perth and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-fence-wood text-white hover:bg-fence-wood/90 text-lg px-8 py-6 font-semibold"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Our Services
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-fence-wood hover:bg-white/20 text-lg px-8 py-6 font-semibold flex items-center gap-2"
              onClick={scrollToContact}
            >
              Get Free Estimate <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

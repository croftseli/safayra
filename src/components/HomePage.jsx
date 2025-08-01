import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const HomePage = ({ language, setActiveDetailPage }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel images
  const carouselImages = [
    {
      src: "/saf 1.JPG",
      alt: language === 'en' ? "Premium Saffron Culinary" : language === 'fr' ? "Safran Premium Culinaire" : "Premium Safran Kulinarisch"
    },
    {
      src: "/saf 2.JPG", 
      alt: language === 'en' ? "Saffron Skincare Beauty" : language === 'fr' ? "Beauté Safran Soins" : "Safran Hautpflege Schönheit"
    },
    {
      src: "/saf 4.jpg",
      alt: language === 'en' ? "Saffron Wellness" : language === 'fr' ? "Bien-être Safran" : "Safran Wellness"
    },
    {
      src: "/Who are we.JPG",
      alt: language === 'en' ? "Who We Are" : language === 'fr' ? "Qui Nous Sommes" : "Wer Wir Sind"
    },
    {
      src: "/a transparent ethical.jpg",
      alt: language === 'en' ? "Ethical Source" : language === 'fr' ? "Source Éthique" : "Ethische Quelle"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  // Card data
  const cards = [
    {
      id: 'skincare',
      title: language === 'en' ? "Red Gold for the Skin" : language === 'fr' ? "L'Or Rouge pour la Peau" : "Rotes Gold für die Haut",
      description: language === 'en' 
        ? "Discover the beauty secrets of saffron for radiant, healthy skin with natural anti-aging properties."
        : language === 'fr' 
        ? "Découvrez les secrets de beauté du safran pour une peau radieuse et saine avec des propriétés anti-âge naturelles."
        : "Entdecken Sie die Schönheitsgeheimnisse von Safran für strahlende, gesunde Haut mit natürlichen Anti-Aging-Eigenschaften.",
      image: "/saf 2.JPG",
      gradient: "from-rose-500 to-pink-600"
    },
    {
      id: 'ethical',
      title: language === 'en' ? "A Transparent and Ethical Source" : language === 'fr' ? "Une Source Transparente et Éthique" : "Eine Transparente und Ethische Quelle",
      description: language === 'en'
        ? "Learn about our commitment to fair trade practices and sustainable saffron sourcing from Iran."
        : language === 'fr'
        ? "Découvrez notre engagement envers les pratiques de commerce équitable et l'approvisionnement durable en safran d'Iran."
        : "Erfahren Sie mehr über unser Engagement für fairen Handel und nachhaltige Safran-Beschaffung aus dem Iran.",
      image: "/a transparent ethical.jpg",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      id: 'wellness',
      title: language === 'en' ? "Wellness" : language === 'fr' ? "Bien-être" : "Wohlbefinden",
      description: language === 'en'
        ? "Explore the therapeutic benefits of saffron for mental wellness, relaxation, and natural healing."
        : language === 'fr'
        ? "Explorez les bienfaits thérapeutiques du safran pour le bien-être mental, la relaxation et la guérison naturelle."
        : "Entdecken Sie die therapeutischen Vorteile von Safran für geistiges Wohlbefinden, Entspannung und natürliche Heilung.",
      image: "/saf 4.jpg",
      gradient: "from-purple-500 to-indigo-600"
    },
    {
      id: 'culinary',
      title: language === 'en' ? "Enhancing the Culinary Experience" : language === 'fr' ? "Améliorer l'Expérience Culinaire" : "Verbesserung des Kulinarischen Erlebnisses",
      description: language === 'en'
        ? "Transform your cooking with premium saffron that brings authentic flavor and vibrant color to every dish."
        : language === 'fr'
        ? "Transformez votre cuisine avec du safran premium qui apporte une saveur authentique et une couleur vibrante à chaque plat."
        : "Verwandeln Sie Ihr Kochen mit Premium-Safran, der authentischen Geschmack und lebendige Farbe in jedes Gericht bringt.",
      image: "/saf 1.JPG",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 'about',
      title: language === 'en' ? "Who We Are" : language === 'fr' ? "Qui Nous Sommes" : "Wer Wir Sind",
      description: language === 'en'
        ? "Meet the passionate team behind Safayra and our journey from Iranian saffron fields to European markets."
        : language === 'fr'
        ? "Rencontrez l'équipe passionnée derrière Safayra et notre voyage des champs de safran iraniens aux marchés européens."
        : "Lernen Sie das leidenschaftliche Team hinter Safayra und unsere Reise von iranischen Safranfeldern zu europäischen Märkten kennen.",
      image: "/Who are we.JPG",
      gradient: "from-blue-500 to-cyan-600"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Heading */}
      <div className="text-center pt-4 md:pt-8">
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-600 via-orange-500 to-red-600 bg-clip-text text-transparent mb-4 md:mb-6 tracking-tight leading-tight">
          This is Safayra.
        </h1>
        <div className="w-24 xs:w-32 sm:w-40 md:w-48 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full shadow-lg"></div>
      </div>

      {/* Hero Text */}
      <div className="text-center max-w-4xl mx-auto px-4">
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-amber-900 leading-relaxed font-medium px-2">
          {language === 'en'
            ? "Sourced directly from Iran, grown with care and respect for tradition. Ethically harvested and lab-tested, our saffron reflects purity, culture, and quality."
            : language === 'fr' 
            ? "Directement sourcé d'Iran, cultivé avec soin et respect pour la tradition. Récolté de manière éthique et testé en laboratoire, notre safran reflète la pureté, la culture et la qualité." 
            : "Direkt aus dem Iran bezogen, mit Sorgfalt und Respekt für die Tradition angebaut. Ethisch geerntet und im Labor getestet, spiegelt unser Safran Reinheit, Kultur und Qualität wider."
          }
        </p>
      </div>

      {/* Image Carousel */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg xs:rounded-xl sm:rounded-2xl p-2 xs:p-3 sm:p-4 md:p-8 lg:p-12 mx-1 xs:mx-2 sm:mx-0">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-md xs:rounded-lg sm:rounded-xl shadow-md xs:shadow-lg sm:shadow-2xl">
            {/* Carousel Container */}
            <div className="relative h-48 xs:h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[500px]">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-1 xs:left-2 sm:left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 xs:p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-1 xs:right-2 sm:right-3 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1 xs:p-1.5 sm:p-2 md:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-1 xs:bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-white shadow-lg scale-125' 
                      : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Clickable Cards Section */}
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-4 px-2">
            {language === 'en' ? 'Discover Our World' : language === 'fr' ? 'Découvrez Notre Monde' : 'Entdecken Sie Unsere Welt'}
          </h2>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {language === 'en'
              ? 'Explore the many facets of premium saffron and learn how it can enhance your life'
              : language === 'fr'
              ? 'Explorez les nombreuses facettes du safran premium et découvrez comment il peut améliorer votre vie'
              : 'Entdecken Sie die vielen Facetten von Premium-Safran und erfahren Sie, wie er Ihr Leben bereichern kann'
            }
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setActiveDetailPage(card.id)}
              className="group cursor-pointer bg-white rounded-md xs:rounded-lg sm:rounded-xl shadow-sm xs:shadow-md sm:shadow-lg hover:shadow-lg xs:hover:shadow-xl sm:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              {/* Card Image */}
              <div className="relative h-24 xs:h-28 sm:h-32 md:h-40 lg:h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${card.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Card Content */}
              <div className="p-2 xs:p-3 sm:p-4 md:p-6">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 xs:mb-2 md:mb-3 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 xs:mb-3 md:mb-4 line-clamp-3">
                  {card.description}
                </p>
                <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors duration-300">
                  <span className="text-xs sm:text-sm md:text-base font-medium">
                    {language === 'en' ? 'Learn More' : language === 'fr' ? 'En Savoir Plus' : 'Mehr Erfahren'}
                  </span>
                  <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
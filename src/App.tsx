import React, { useState } from 'react';
import { Flower2, Menu, X } from 'lucide-react';
import DetailPages from './components/DetailPages';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeDetailPage, setActiveDetailPage] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState<'en' | 'fr' | 'de'>('en');

  const tabs = [
    { id: 'home', label: language === 'en' ? 'Home Page' : language === 'fr' ? 'Accueil' : 'Startseite' },
    { id: 'about', label: language === 'en' ? 'About us' : language === 'fr' ? 'À propos' : 'Über uns' },
    { id: 'gallery', label: language === 'en' ? 'Gallery' : language === 'fr' ? 'Galerie' : 'Galerie' },
    { id: 'contact', label: language === 'en' ? 'Contact us' : language === 'fr' ? 'Contactez-nous' : 'Kontakt' },
    { id: 'languages', label: language === 'en' ? 'Languages' : language === 'fr' ? 'Langues' : 'Sprachen' }
  ];

  const galleryItems = language === 'en' ? [
    {
      id: 'culinary',
      title: "Enhancing the\nculinary experience",
      image: "/saf 1.JPG",
      alt: "Saffron dessert",
      text: "With its deep aroma, vibrant color, and unparalleled purity, Safayra meets the expectations of the world's most refined palates, from..."
    },
    {
      id: 'skincare',
      title: "Red gold for the skin",
      image: "/saf 2.JPG",
      alt: "Saffron skincare",
      text: "We offer saffron in its purest and most potent form, naturally rich in crocin, safranal, and other powerful antioxidants. Revered for centuries in traditional Persian and Ayurvedic beauty rituals, saffron is now celebrated in modern skincare for its remarkable anti-aging, brightening, and anti-inflammatory benefits."
    },
    {
      id: 'wellness',
      title: "Wellness",
      image: "/saf 4.jpg",
      alt: "Saffron wellness",
      text: "Known for its soothing and revitalizing properties, this precious plant has its roots in an ancient tradition. Rich in active compounds such as crocin, crocetin, and safranal, it is now fully integrated into modern wellness approaches."
    },
    {
      id: 'about',
      title: "Who we are",
      image: "/Who are we.JPG",
      alt: "Who we are",
      text: "Ethically sourced saffron from Iran, Safayra is a journey from the sun-drenched fields of Iran to the heart of Europe. We bring you premium-quality saffron, carefully handpicked from its land of origin, where centuries of tradition meet ethical and modern practices."
    },
    {
      id: 'ethical',
      title: "A transparent, ethical source",
      image: "/a transparent ethical.jpg",
      alt: "Transparent ethical source",
      text: "We are committed to sharing the rich culture of Iran and honoring the heritage and communities behind every thread."
    }
  ] : language === 'fr' ? [
    {
      id: 'culinary',
      title: "Améliorer l'expérience\nculinaire",
      image: "/saf 1.JPG",
      alt: "Dessert au safran",
      text: "Avec son arôme profond, sa couleur vibrante et sa pureté inégalée, Safayra répond aux attentes des palais les plus raffinés du monde, des chefs étoilés aux créateurs artisanaux..."
    },
    {
      id: 'skincare',
      title: "L'or rouge pour la peau",
      image: "/saf 2.JPG",
      alt: "Soins de la peau au safran",
      text: "Nous offrons le safran dans sa forme la plus pure et la plus puissante, naturellement riche en crocine, safranal et autres antioxydants puissants. Vénéré depuis des siècles dans les rituels de beauté persans et ayurvédiques traditionnels, le safran est maintenant célébré dans les soins modernes pour ses remarquables bienfaits anti-âge, éclaircissants et anti-inflammatoires."
    },
    {
      id: 'wellness',
      title: "Bien-être",
      image: "/saf 4.jpg",
      alt: "Bien-être au safran",
      text: "Connue pour ses propriétés apaisantes et revitalisantes, cette plante précieuse trouve ses racines dans une tradition ancienne. Riche en composés actifs tels que la crocine, la crocétine et le safranal, elle s'intègre désormais pleinement dans les approches modernes du bien-être."
    },
    {
      id: 'about',
      title: "Qui nous sommes",
      image: "/Who are we.JPG",
      alt: "Qui nous sommes",
      text: "Safran d'origine éthique d'Iran, Safayra est un voyage des champs ensoleillés d'Iran au cœur de l'Europe. Nous vous apportons un safran de qualité supérieure, soigneusement cueilli à la main de son pays d'origine, où des siècles de tradition rencontrent des pratiques éthiques et modernes."
    },
    {
      id: 'ethical',
      title: "Une source transparente et éthique",
      image: "/a transparent ethical.jpg",
      alt: "Source éthique transparente",
      text: "Nous nous engageons à partager la riche culture de l'Iran et à honorer le patrimoine et les communautés derrière chaque fil."
    }
  ] : [
    {
      id: 'culinary',
      title: "Verbesserung des\nkulinarischen Erlebnisses",
      image: "/saf 1.JPG",
      alt: "Safran-Dessert",
      text: "Mit seinem tiefen Aroma, seiner lebendigen Farbe und seiner unvergleichlichen Reinheit erfüllt Safayra die Erwartungen der raffiniertesten Gaumen der Welt, von Sterneköchen bis hin zu handwerklichen Schöpfern..."
    },
    {
      id: 'skincare',
      title: "Rotes Gold für die Haut",
      image: "/saf 2.JPG",
      alt: "Safran-Hautpflege",
      text: "Wir bieten Safran in seiner reinsten und wirksamsten Form an, natürlich reich an Crocin, Safranal und anderen kraftvollen Antioxidantien. Seit Jahrhunderten in traditionellen persischen und ayurvedischen Schönheitsritualen verehrt, wird Safran heute in der modernen Hautpflege für seine bemerkenswerten Anti-Aging-, aufhellenden und entzündungshemmenden Vorteile gefeiert."
    },
    {
      id: 'wellness',
      title: "Wohlbefinden",
      image: "/saf 4.jpg",
      alt: "Safran-Wellness",
      text: "Bekannt für ihre beruhigenden und revitalisierenden Eigenschaften, hat diese kostbare Pflanze ihre Wurzeln in einer alten Tradition. Reich an aktiven Verbindungen wie Crocin, Crocetin und Safranal, ist sie heute vollständig in moderne Wellness-Ansätze integriert."
    },
    {
      id: 'about',
      title: "Wer wir sind",
      image: "/Who are we.JPG",
      alt: "Wer wir sind",
      text: "Ethisch bezogener Safran aus dem Iran, Safayra ist eine Reise von den sonnenverwöhnten Feldern des Iran ins Herz Europas. Wir bringen Ihnen Premium-Qualität Safran, sorgfältig von Hand gepflückt aus seinem Ursprungsland, wo jahrhundertealte Tradition auf ethische und moderne Praktiken trifft."
    },
    {
      id: 'ethical',
      title: "Eine transparente, ethische Quelle",
      image: "/a transparent ethical.jpg",
      alt: "Transparente ethische Quelle",
      text: "Wir sind verpflichtet, die reiche Kultur des Iran zu teilen und das Erbe und die Gemeinschaften hinter jedem Faden zu ehren."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  // If we're on a detail page, render that instead
  if (activeDetailPage) {
    return (
      <DetailPages 
        pageId={activeDetailPage} 
        onBack={() => setActiveDetailPage(null)} 
       language={language}
      />
    );
  }
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16">
            {/* Rotating Gallery Section */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <p className="text-lg md:text-xl text-amber-900 leading-relaxed font-medium">
                    {language === 'en'
                      ? "Sourced directly from Iran, grown with care and respect for tradition. Ethically harvested and lab-tested, our saffron reflects purity, culture, and quality."
                      : language === 'fr' ? "Directement sourcé d'Iran, cultivé avec soin et respect pour la tradition. Récolté de manière éthique et testé en laboratoire, notre safran reflète la pureté, la culture et la qualité." : "Direkt aus dem Iran bezogen, mit Sorgfalt und Respekt für die Tradition angebaut. Ethisch geerntet und im Labor getestet, spiegelt unser Safran Reinheit, Kultur und Qualität wider."
                    }
                  </p>
                </div>
                <div className="relative h-[60vh] perspective-1000 flex items-center justify-center">
                  {/* 3D Spinning Carousel Container */}
                  <div 
                    className="relative preserve-3d animate-spin-slow"
                    style={{
                      transformStyle: 'preserve-3d',
                      animation: 'spin 30s linear infinite',
                      transform: `rotateY(${-currentSlide * (360 / galleryItems.length)}deg)`
                    }}
                  >
                    {galleryItems.map((item, index) => {
                      const rotation = (360 / galleryItems.length) * index;
                      const translateZ = window.innerWidth < 640 ? 140 : window.innerWidth < 768 ? 200 : 280;
                      
                      return (
                        <div
                          key={index}
                          className="absolute w-32 h-44 sm:w-48 sm:h-64 md:w-72 md:h-96 bg-gradient-to-br from-[#4A1F1A] to-[#6B2C20] rounded-xl p-3 sm:p-4 md:p-6 text-white shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => setActiveDetailPage(item.id)}
                          style={{
                            transform: `rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                            left: '50%',
                            top: '50%',
                            marginLeft: window.innerWidth < 640 ? '-4rem' : window.innerWidth < 768 ? '-6rem' : '-9rem',
                            marginTop: window.innerWidth < 640 ? '-5.5rem' : window.innerWidth < 768 ? '-8rem' : '-12rem',
                          }}
                        >
                          <div className="relative z-10 h-full flex flex-col">
                            <h3 className="text-xs sm:text-base md:text-xl font-bold mb-1 sm:mb-2 md:mb-4 leading-tight">
                              {item.title.split('\n').map((line, lineIndex) => (
                                <span key={lineIndex}>
                                  {line}
                                  {lineIndex < item.title.split('\n').length - 1 && <br />}
                                </span>
                              ))}
                            </h3>
                            <div className="w-full h-14 sm:h-24 md:h-40 bg-gradient-to-br from-[#5A2E26] to-[#7A3E32] rounded-lg mb-1 sm:mb-2 md:mb-4 overflow-hidden">
                              <img 
                                src={item.image}
                                alt={item.alt}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-amber-100 leading-relaxed text-xs sm:text-sm flex-1 overflow-hidden">
                              {window.innerWidth < 640 
                                ? (item.text.length > 50 ? `${item.text.substring(0, 47)}...` : item.text)
                                : window.innerWidth < 768
                                  ? (item.text.length > 120 ? `${item.text.substring(0, 117)}...` : item.text)
                                  : (item.text.length > 100 ? `${item.text.substring(0, 97)}...` : item.text)
                              }
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </div>

          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {language === 'en' ? 'About Safayra' : language === 'fr' ? 'À propos de Safayra' : 'Über Safayra'}
              </h2>
              <div className="max-w-2xl mx-auto mb-8">
                <img 
                  src="/Who are we.JPG"
                  alt={language === 'en' ? 'Who We Are' : 'Qui nous sommes'}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "Ethically sourced saffron from Iran, Safayra is a journey from the sun-drenched fields of Iran to the heart of Europe. We bring you premium-quality saffron, carefully handpicked from its land of origin, where centuries of tradition meet ethical and modern practices."
                  : language === 'fr' ? "Safran d'origine éthique d'Iran, Safayra est un voyage des champs ensoleillés d'Iran au cœur de l'Europe. Nous vous apportons un safran de qualité supérieure, soigneusement cueilli à la main de son pays d'origine, où des siècles de tradition rencontrent des pratiques éthiques et modernes." : "Ethisch bezogener Safran aus dem Iran, Safayra ist eine Reise von den sonnenverwöhnten Feldern des Iran ins Herz Europas. Wir bringen Ihnen Premium-Qualität Safran, sorgfältig von Hand gepflückt aus seinem Ursprungsland, wo jahrhundertealte Tradition auf ethische und moderne Praktiken trifft."
                }
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "We are committed to sharing the rich culture of Iran and honoring the heritage and communities behind every thread. We work directly with local producers under fair, ethical, and hygienic conditions, ensuring transparency and respect throughout the supply chain. Our saffron is lab-tested for purity and quality, so every batch meets the highest standards in color, aroma, and strength."
                  : language === 'fr' ? "Nous nous engageons à partager la riche culture de l'Iran et à honorer le patrimoine et les communautés derrière chaque fil. Nous travaillons directement avec les producteurs locaux dans des conditions équitables, éthiques et hygiéniques, garantissant transparence et respect tout au long de la chaîne d'approvisionnement. Notre safran est testé en laboratoire pour sa pureté et sa qualité, de sorte que chaque lot répond aux normes les plus élevées en matière de couleur, d'arôme et de force." : "Wir sind verpflichtet, die reiche Kultur des Iran zu teilen und das Erbe und die Gemeinschaften hinter jedem Faden zu ehren. Wir arbeiten direkt mit lokalen Produzenten unter fairen, ethischen und hygienischen Bedingungen zusammen und gewährleisten Transparenz und Respekt in der gesamten Lieferkette. Unser Safran wird im Labor auf Reinheit und Qualität getestet, sodass jede Charge den höchsten Standards in Farbe, Aroma und Stärke entspricht."
                }
              </p>
              
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  {language === 'en' ? 'The Heart of Saffron Production' : language === 'fr' ? 'Le Cœur de la Production de Safran' : 'Das Herz der Safranproduktion'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'en'
                    ? "Iran, which accounts for nearly 90% of global production, is the historical heartland of saffron. Its cultivation relies on ancestral know-how: each flower is hand-picked at dawn, and the stigmas are delicately removed one by one. The flowering season, which lasts only a few weeks from late October to mid-November, requires an intense pace of work within a short time frame."
                    : language === 'fr' ? "L'Iran, qui représente près de 90% de la production mondiale, est le berceau historique du safran. Sa culture repose sur un savoir-faire ancestral : chaque fleur est cueillie à la main à l'aube, et les stigmates sont délicatement retirés un par un. La saison de floraison, qui ne dure que quelques semaines de fin octobre à mi-novembre, nécessite un rythme de travail intense dans un délai court." : "Der Iran, der fast 90% der weltweiten Produktion ausmacht, ist das historische Herzland des Safrans. Sein Anbau beruht auf jahrhundertealtem Wissen: Jede Blüte wird bei Tagesanbruch von Hand gepflückt, und die Narben werden einzeln vorsichtig entfernt. Die Blütezeit, die nur wenige Wochen von Ende Oktober bis Mitte November dauert, erfordert ein intensives Arbeitstempo in kurzer Zeit."
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? "This artisanal method, combined with the rarity of the harvest, is what makes saffron the most precious spice in the world. We believe that excellence begins with connection. That's why we collaborate closely with our clients, from chefs to retailers, to deliver not just saffron, but a thoughtful, tailored experience."
                    : language === 'fr' ? "Cette méthode artisanale, combinée à la rareté de la récolte, fait du safran l'épice la plus précieuse au monde. Nous croyons que l'excellence commence par la connexion. C'est pourquoi nous collaborons étroitement avec nos clients, des chefs aux détaillants, pour livrer non seulement du safran, mais une expérience réfléchie et sur mesure." : "Diese handwerkliche Methode, kombiniert mit der Seltenheit der Ernte, macht Safran zum kostbarsten Gewürz der Welt. Wir glauben, dass Exzellenz mit Verbindung beginnt. Deshalb arbeiten wir eng mit unseren Kunden zusammen, von Köchen bis zu Einzelhändlern, um nicht nur Safran zu liefern, sondern eine durchdachte, maßgeschneiderte Erfahrung."
                  }
                </p>
              </div>
            </div>
          </div>
        );
      case 'gallery':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {language === 'en' ? 'Gallery' : language === 'fr' ? 'Galerie' : 'Galerie'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'en'
                  ? 'Discover the beauty and richness of premium saffron through our curated collection'
                  : language === 'fr' ? 'Découvrez la beauté et la richesse du safran premium à travers notre collection' : 'Entdecken Sie die Schönheit und den Reichtum von Premium-Safran durch unsere Sammlung'
                }
              </p>
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Saffron Threads */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Premium saffron threads"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Premium Saffron Threads' : language === 'fr' ? 'Fils de Safran Premium' : 'Premium Safran-Fäden'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Flowers */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron flowers in field"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Flowers' : language === 'fr' ? 'Fleurs de Safran' : 'Safran-Blüten'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Spice Bowl */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron spice in wooden bowl"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Golden Spice' : language === 'fr' ? 'Épice Dorée' : 'Goldenes Gewürz'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Rice Dish */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron rice dish"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Culinary Art' : language === 'fr' ? 'Art Culinaire au Safran' : 'Safran-Kochkunst'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Tea */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron tea"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Wellness Tea' : language === 'fr' ? 'Thé Bien-être au Safran' : 'Safran-Wellness-Tee'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Harvest */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron harvest"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Traditional Harvest' : language === 'fr' ? 'Récolte Traditionnelle' : 'Traditionelle Ernte'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Powder */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron powder"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Pure Saffron Powder' : language === 'fr' ? 'Poudre de Safran Pure' : 'Reines Safran-Pulver'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Dessert */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron dessert"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Dessert' : language === 'fr' ? 'Dessert au Safran' : 'Safran-Dessert'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Field */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/1435736/pexels-photo-1435736.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron field"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Fields' : language === 'fr' ? 'Champs de Safran' : 'Safran-Felder'}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Saffron Skincare */}
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <img 
                  src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Saffron skincare"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {language === 'en' ? 'Saffron Beauty' : language === 'fr' ? 'Beauté au Safran' : 'Safran-Schönheit'}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-900 mb-6">
                {language === 'en' ? 'Contact Us' : language === 'fr' ? 'Contactez-nous' : 'Kontakt'}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'en'
                  ? 'Get in touch with us for premium saffron inquiries'
                  : language === 'fr' ? 'Contactez-nous pour vos demandes de safran premium' : 'Kontaktieren Sie uns für Premium-Safran-Anfragen'
                }
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-6">
                  {language === 'en' ? 'Send us a message' : language === 'fr' ? 'Envoyez-nous un message' : 'Senden Sie uns eine Nachricht'}
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Full Name' : language === 'fr' ? 'Nom complet' : 'Vollständiger Name'}
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder={language === 'en' ? 'Your name' : language === 'fr' ? 'Votre nom' : 'Ihr Name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder={language === 'en' ? 'your@email.com' : language === 'fr' ? 'votre@email.com' : 'ihre@email.com'}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Subject' : language === 'fr' ? 'Sujet' : 'Betreff'}
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                      <option>{language === 'en' ? 'Select a subject' : language === 'fr' ? 'Sélectionnez un sujet' : 'Wählen Sie ein Thema'}</option>
                      <option>{language === 'en' ? 'Wholesale Inquiry' : language === 'fr' ? 'Demande de gros' : 'Großhandelsanfrage'}</option>
                      <option>{language === 'en' ? 'Partnership' : language === 'fr' ? 'Partenariat' : 'Partnerschaft'}</option>
                      <option>{language === 'en' ? 'Quality Questions' : language === 'fr' ? 'Questions qualité' : 'Qualitätsfragen'}</option>
                      <option>{language === 'en' ? 'Other' : language === 'fr' ? 'Autre' : 'Andere'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {language === 'en' ? 'Message' : language === 'fr' ? 'Message' : 'Nachricht'}
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      placeholder={language === 'en' ? 'Tell us about your saffron needs...' : language === 'fr' ? 'Parlez-nous de vos besoins en safran...' : 'Erzählen Sie uns von Ihren Safran-Bedürfnissen...'}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    {language === 'en' ? 'Send Message' : language === 'fr' ? 'Envoyer le message' : 'Nachricht senden'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-[#4A1F1A] to-[#6B2C20] text-white rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    {language === 'en' ? 'Get in Touch' : language === 'fr' ? 'Contactez-nous' : 'Kontakt aufnehmen'}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-amber-200 mb-2">
                        {language === 'en' ? 'Email' : language === 'fr' ? 'E-mail' : 'E-Mail'}
                      </h4>
                      <p className="text-amber-100">info@safayra.com</p>
                      <p className="text-amber-100">sales@safayra.com</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-200 mb-2">
                        {language === 'en' ? 'Phone' : language === 'fr' ? 'Téléphone' : 'Telefon'}
                      </h4>
                      <p className="text-amber-100">+33 1 23 45 67 89 (France)</p>
                      <p className="text-amber-100">+49 30 12 34 56 78 (Germany)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-amber-200 mb-2">
                        {language === 'en' ? 'Address' : language === 'fr' ? 'Adresse' : 'Adresse'}
                      </h4>
                      <p className="text-amber-100">
                        {language === 'en' 
                          ? 'European Distribution Center\n123 Saffron Street\n75001 Paris, France'
                          : language === 'fr' 
                            ? 'Centre de Distribution Européen\n123 Rue du Safran\n75001 Paris, France'
                            : 'Europäisches Vertriebszentrum\n123 Safranstraße\n75001 Paris, Frankreich'
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-amber-900 mb-6">
                    {language === 'en' ? 'Business Hours' : language === 'fr' ? 'Heures d\'ouverture' : 'Geschäftszeiten'}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-medium">{language === 'en' ? 'Monday - Friday:' : language === 'fr' ? 'Lundi - Vendredi :' : 'Montag - Freitag:'}</span> 9:00 AM - 6:00 PM CET</p>
                    <p><span className="font-medium">{language === 'en' ? 'Saturday:' : language === 'fr' ? 'Samedi :' : 'Samstag:'}</span> 10:00 AM - 4:00 PM CET</p>
                    <p><span className="font-medium">{language === 'en' ? 'Sunday:' : language === 'fr' ? 'Dimanche :' : 'Sonntag:'}</span> {language === 'en' ? 'Closed' : language === 'fr' ? 'Fermé' : 'Geschlossen'}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    {language === 'en' 
                      ? 'We typically respond to inquiries within 24 hours.'
                      : language === 'fr' 
                        ? 'Nous répondons généralement aux demandes dans les 24 heures.'
                        : 'Wir antworten normalerweise innerhalb von 24 Stunden auf Anfragen.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'languages':
        return (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-amber-900 mb-8">
                {language === 'en' ? 'Choose Your Language' : language === 'fr' ? 'Choisissez votre langue' : 'Wählen Sie Ihre Sprache'}
              </h2>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
                  }`}
                >
                  🇺🇸 English
                </button>
                <button
                  onClick={() => setLanguage('fr')}
                  className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    language === 'fr'
                      ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
                  }`}
                >
                  🇫🇷 Français
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={`px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    language === 'de'
                      ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-amber-400 hover:text-amber-700'
                  }`}
                >
                  🇩🇪 Deutsch
                </button>
              </div>
              <p className="text-gray-600 mt-6">
                {language === 'en'
                  ? 'Select your preferred language to view the website content'
                  : language === 'fr' 
                    ? 'Sélectionnez votre langue préférée pour afficher le contenu du site web'
                    : 'Wählen Sie Ihre bevorzugte Sprache, um den Website-Inhalt anzuzeigen'
                }
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Navigation */}
            <nav className="hidden md:flex space-x-1">
              <button
                onClick={() => setActiveTab('home')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'home'
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {language === 'en' ? 'Home Page' : 'Accueil'}
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'about'
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {language === 'en' ? 'About us' : 'À propos'}
              </button>
            </nav>

            {/* Centered Logo */}
            <div className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
              <img 
                src="/safayra_logo-removebg.jpg" 
                alt="SAFAYRA" 
                className="h-28 w-auto object-contain"
              />
            </div>

            {/* Right Navigation */}
            <nav className="hidden md:flex space-x-1">
              <button
                onClick={() => setActiveTab('gallery')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'gallery'
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {language === 'en' ? 'Gallery' : 'Galerie'}
              </button>
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'contact'
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {language === 'en' ? 'Contact us' : 'Contactez-nous'}
              </button>
              <button
                onClick={() => setActiveTab('languages')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'languages'
                    ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white shadow-md'
                    : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                }`}
              >
                {language === 'en' ? 'Languages' : 'Langues'}
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-amber-50"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4 space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white'
                      : 'text-gray-700 hover:text-amber-700 hover:bg-amber-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h3 className="text-xl font-bold">SAFAYRA</h3>
          </div>
          <p className="text-amber-100 mb-2 text-sm">
            {language === 'en' ? 'Premium Saffron Exchange' : language === 'fr' ? 'Échange de Safran Premium' : 'Premium Safran Austausch'}
          </p>
          <p className="text-amber-200 text-xs">
            {language === 'en' ? '© 2025 Safayra. All rights reserved.' : language === 'fr' ? '© 2025 Safayra. Tous droits réservés.' : '© 2025 Safayra. Alle Rechte vorbehalten.'}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
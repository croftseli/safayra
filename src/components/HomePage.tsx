import React from 'react';

interface HomePageProps {
  language: 'en' | 'fr' | 'de';
  setActiveDetailPage: (pageId: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ language, setActiveDetailPage }) => {
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
};

export default HomePage;
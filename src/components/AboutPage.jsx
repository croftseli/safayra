import React from 'react';

const AboutPage = ({ language }) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 px-2 xs:px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-amber-900 mb-6">
          {language === 'en' ? 'About Safayra' : language === 'fr' ? 'À propos de Safayra' : 'Über Safayra'}
        </h2>
        <div className="max-w-2xl mx-auto mb-8">
          <img
            src="/Who are we.JPG"
            alt={language === 'en' ? 'Who We Are' : 'Qui nous sommes'}
            className="w-full h-48 xs:h-56 sm:h-64 md:h-80 object-cover object-center rounded-lg xs:rounded-xl sm:rounded-2xl shadow-md xs:shadow-lg"
          />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
          {language === 'en'
            ? "Ethically sourced saffron from Iran, Safayra is a journey from the sun-drenched fields of Iran to the heart of Europe. We bring you premium-quality saffron, carefully handpicked from its land of origin, where centuries of tradition meet ethical and modern practices."
            : language === 'fr' ? "Safran d'origine éthique d'Iran, Safayra est un voyage des champs ensoleillés d'Iran au cœur de l'Europe. Nous vous apportons un safran de qualité supérieure, soigneusement cueilli à la main de son pays d'origine, où des siècles de tradition rencontrent des pratiques éthiques et modernes." : "Ethisch bezogener Safran aus dem Iran, Safayra ist eine Reise von den sonnenverwöhnten Feldern des Iran ins Herz Europas. Wir bringen Ihnen Premium-Qualität Safran, sorgfältig von Hand gepflückt aus seinem Ursprungsland, wo jahrhundertealte Tradition auf ethische und moderne Praktiken trifft."
          }
        </p>
        <p className="text-sm xs:text-base sm:text-lg text-gray-700 leading-relaxed">
          {language === 'en'
            ? "We are committed to sharing the rich culture of Iran and honoring the heritage and communities behind every thread. We work directly with local producers under fair, ethical, and hygienic conditions, ensuring transparency and respect throughout the supply chain. Our saffron is lab-tested for purity and quality, so every batch meets the highest standards in color, aroma, and strength."
            : language === 'fr' ? "Nous nous engageons à partager la riche culture de l'Iran et à honorer le patrimoine et les communautés derrière chaque fil. Nous travaillons directement avec les producteurs locaux dans des conditions équitables, éthiques et hygiéniques, garantissant transparence et respect tout au long de la chaîne d'approvisionnement. Notre safran est testé en laboratoire pour sa pureté et sa qualité, de sorte que chaque lot répond aux normes les plus élevées en matière de couleur, d'arôme et de force." : "Wir sind verpflichtet, die reiche Kultur des Iran zu teilen und das Erbe und die Gemeinschaften hinter jedem Faden zu ehren. Wir arbeiten direkt mit lokalen Produzenten unter fairen, ethischen und hygienischen Bedingungen zusammen und gewährleisten Transparenz und Respekt in der gesamten Lieferkette. Unser Safran wird im Labor auf Reinheit und Qualität getestet, sodass jede Charge den höchsten Standards in Farbe, Aroma und Stärke entspricht."
          }
        </p>

        <div className="bg-amber-50 p-6 rounded-lg">
          <h3 className="text-lg xs:text-xl font-semibold text-amber-900 mb-4">
            {language === 'en' ? 'The Heart of Saffron Production' : language === 'fr' ? 'Le Cœur de la Production de Safran' : 'Das Herz der Safranproduktion'}
          </h3>
          <p className="text-sm xs:text-base text-gray-700 leading-relaxed mb-4">
            {language === 'en'
              ? "Iran, which accounts for nearly 90% of global production, is the historical heartland of saffron. Its cultivation relies on ancestral know-how: each flower is hand-picked at dawn, and the stigmas are delicately removed one by one. The flowering season, which lasts only a few weeks from late October to mid-November, requires an intense pace of work within a short time frame."
              : language === 'fr' ? "L'Iran, qui représente près de 90% de la production mondiale, est le berceau historique du safran. Sa culture repose sur un savoir-faire ancestral : chaque fleur est cueillie à la main à l'aube, et les stigmates sont délicatement retirés un par un. La saison de floraison, qui ne dure que quelques semaines de fin octobre à mi-novembre, nécessite un rythme de travail intense dans un délai court." : "Der Iran, der fast 90% der weltweiten Produktion ausmacht, ist das historische Herzland des Safrans. Sein Anbau beruht auf jahrhundertealtem Wissen: Jede Blüte wird bei Tagesanbruch von Hand gepflückt, und die Narben werden einzeln vorsichtig entfernt. Die Blütezeit, die nur wenige Wochen von Ende Oktober bis Mitte November dauert, erfordert ein intensives Arbeitstempo in kurzer Zeit."
            }
          </p>
          <p className="text-sm xs:text-base text-gray-700 leading-relaxed">
            {language === 'en'
              ? "This artisanal method, combined with the rarity of the harvest, is what makes saffron the most precious spice in the world. We believe that excellence begins with connection. That's why we collaborate closely with our clients, from chefs to retailers, to deliver not just saffron, but a thoughtful, tailored experience."
              : language === 'fr' ? "Cette méthode artisanale, combinée à la rareté de la récolte, fait du safran l'épice la plus précieuse au monde. Nous croyons que l'excellence commence par la connexion. C'est pourquoi nous collaborons étroitement avec nos clients, des chefs aux détaillants, pour livrer non seulement du safran, mais une expérience réfléchie et sur mesure." : "Diese handwerkliche Methode, kombiniert mit der Seltenheit der Ernte, macht Safran zum kostbarsten Gewürz der Welt. Wir glauben, dass Exzellenz mit Verbindung beginnt. Deshalb arbeiten wir eng mit unseren Kunden zusammen, von Köchen bis zu Einzelhändlern, um nicht nur Safran zu liefern, sondern eine durchdachte, maßgeschneiderte Erfahrung."
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
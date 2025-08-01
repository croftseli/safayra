import React from 'react';
import { ArrowLeft, Flower2 } from 'lucide-react';

interface DetailPageProps {
  pageId: string;
  onBack: () => void;
  language: 'en' | 'fr' | 'de';
}

const DetailPages: React.FC<DetailPageProps> = ({ pageId, onBack, language }) => {
  const getPageContent = () => {
    switch (pageId) {
      case 'culinary':
        return {
          title: language === 'en' ? "Enhancing the Culinary Experience" : language === 'fr' ? "Améliorer l'Expérience Culinaire" : "Verbesserung des kulinarischen Erlebnisses",
          image: "/saf 1.JPG",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "With its deep aroma, vibrant color, and unparalleled purity, Safayra meets the expectations of the world's most refined palates, from Michelin-starred chefs to artisanal creators."
                  : language === 'fr' ? "Avec son arôme profond, sa couleur vibrante et sa pureté inégalée, Safayra répond aux attentes des palais les plus raffinés du monde, des chefs étoilés Michelin aux créateurs artisanaux." : "Mit seinem tiefen Aroma, seiner lebendigen Farbe und seiner unvergleichlichen Reinheit erfüllt Safayra die Erwartungen der raffiniertesten Gaumen der Welt, von Sterneköchen bis hin zu handwerklichen Schöpfern."
                }
              </p>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  {language === 'en' ? 'Culinary Excellence' : language === 'fr' ? 'Excellence Culinaire' : 'Kulinarische Exzellenz'}
                </h3>
                <p className="text-gray-700 mb-4">
                  {language === 'en'
                    ? "Our premium saffron transforms ordinary dishes into extraordinary culinary experiences. Each thread carries the essence of centuries-old Persian tradition, delivering:"
                    : language === 'fr' ? "Notre safran premium transforme les plats ordinaires en expériences culinaires extraordinaires. Chaque fil porte l'essence de la tradition persane séculaire, offrant :" : "Unser Premium-Safran verwandelt gewöhnliche Gerichte in außergewöhnliche kulinarische Erlebnisse. Jeder Faden trägt die Essenz jahrhundertealter persischer Tradition und bietet:"
                  }
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {language === 'en' ? (
                    <>
                      <li>Intense, complex flavor profile with honey-like sweetness</li>
                      <li>Vibrant golden color that enhances visual appeal</li>
                      <li>Aromatic compounds that elevate the dining experience</li>
                      <li>Consistent quality trusted by professional chefs worldwide</li>
                    </>
                  ) : language === 'fr' ? (
                    <>
                      <li>Profil de saveur intense et complexe avec une douceur miellée</li>
                      <li>Couleur dorée vibrante qui améliore l'attrait visuel</li>
                      <li>Composés aromatiques qui élèvent l'expérience culinaire</li>
                      <li>Qualité constante approuvée par les chefs professionnels du monde entier</li>
                    </>
                  ) : (
                    <>
                      <li>Intensives, komplexes Geschmacksprofil mit honigartiger Süße</li>
                      <li>Lebendige goldene Farbe, die die visuelle Attraktivität steigert</li>
                      <li>Aromatische Verbindungen, die das Speiseerlebnis verbessern</li>
                      <li>Konstante Qualität, der professionelle Köche weltweit vertrauen</li>
                    </>
                  )}
                </ul>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-amber-900 mb-3">
                    {language === 'en' ? 'Perfect for:' : language === 'fr' ? 'Parfait pour :' : 'Perfekt für:'}
                  </h4>
                  <ul className="space-y-1 text-gray-600">
                    {language === 'en' ? (
                      <>
                        <li>• Paella and risotto</li>
                        <li>• Persian rice dishes</li>
                        <li>• Desserts and pastries</li>
                        <li>• Luxury beverages</li>
                      </>
                    ) : language === 'fr' ? (
                      <>
                        <li>• Paella et risotto</li>
                        <li>• Plats de riz persans</li>
                        <li>• Desserts et pâtisseries</li>
                        <li>• Boissons de luxe</li>
                      </>
                    ) : (
                      <>
                        <li>• Paella und Risotto</li>
                        <li>• Persische Reisgerichte</li>
                        <li>• Desserts und Gebäck</li>
                        <li>• Luxusgetränke</li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-semibold text-amber-900 mb-3">
                    {language === 'en' ? "Chef's Choice" : language === 'fr' ? 'Choix du Chef' : 'Wahl des Küchenchefs'}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {language === 'en'
                      ? "Trusted by Michelin-starred restaurants across Europe for its consistent quality and authentic flavor profile."
                      : language === 'fr' ? "Approuvé par les restaurants étoilés Michelin à travers l'Europe pour sa qualité constante et son profil de saveur authentique." : "Vertraut von Michelin-Sterne-Restaurants in ganz Europa für seine konstante Qualität und authentisches Geschmacksprofil."
                    }
                  </p>
                </div>
              </div>
            </div>
          )
        };

      case 'skincare':
        return {
          title: language === 'en' ? "Red Gold for the Skin" : language === 'fr' ? "L'Or Rouge pour la Peau" : "Rotes Gold für die Haut",
          image: "/saf 2.JPG",
          content: (
            <div className="space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                {language === 'en' ? 'Why skincare loves saffron' : language === 'fr' ? 'Pourquoi les soins de la peau adorent le safran' : 'Warum die Hautpflege Safran liebt'}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "When integrated into skincare, saffron helps revive the skin's natural radiance, enhance firmness, and visibly reduce signs of fatigue and aging. Thanks to its high vitamin C content and melanin-inhibiting properties, it contributes to a more even complexion, fading dark spots, hyperpigmentation, and acne scars, while visibly improving skin texture."
                  : language === 'fr' ? "Lorsqu'il est intégré dans les soins de la peau, le safran aide à raviver l'éclat naturel de la peau, améliore la fermeté et réduit visiblement les signes de fatigue et de vieillissement. Grâce à sa haute teneur en vitamine C et ses propriétés inhibitrices de mélanine, il contribue à un teint plus uniforme, estompant les taches brunes, l'hyperpigmentation et les cicatrices d'acné, tout en améliorant visiblement la texture de la peau." : "Wenn Safran in die Hautpflege integriert wird, hilft er dabei, die natürliche Ausstrahlung der Haut wiederzubeleben, die Festigkeit zu verbessern und Zeichen von Müdigkeit und Alterung sichtbar zu reduzieren. Dank seines hohen Vitamin-C-Gehalts und seiner melaninhemmenden Eigenschaften trägt er zu einem gleichmäßigeren Teint bei, lässt dunkle Flecken, Hyperpigmentierung und Aknenarben verblassen und verbessert sichtbar die Hauttextur."
                }
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "Its anti-inflammatory and antibacterial actions make saffron a powerful ally in preventing blemishes, soothing irritation, and promoting cellular regeneration. Ideal for dull, sensitive, or dehydrated skin, saffron also delivers natural hydration, helping to restore softness, smoothness, and lasting luminosity."
                  : language === 'fr' ? "Ses actions anti-inflammatoires et antibactériennes font du safran un allié puissant pour prévenir les imperfections, apaiser les irritations et favoriser la régénération cellulaire. Idéal pour les peaux ternes, sensibles ou déshydratées, le safran apporte également une hydratation naturelle, aidant à restaurer la douceur, la lisseur et une luminosité durable." : "Seine entzündungshemmenden und antibakteriellen Wirkungen machen Safran zu einem mächtigen Verbündeten bei der Vorbeugung von Hautunreinheiten, der Beruhigung von Irritationen und der Förderung der Zellregeneration. Ideal für stumpfe, empfindliche oder dehydrierte Haut, liefert Safran auch natürliche Feuchtigkeit und hilft dabei, Weichheit, Glätte und dauerhafte Leuchtkraft wiederherzustellen."
                }
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  {language === 'en' ? 'Visible benefits for your skin' : language === 'fr' ? 'Bienfaits visibles pour votre peau' : 'Sichtbare Vorteile für Ihre Haut'}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        {language === 'en' ? 'Brightening' : 'Éclaircissement'}
                      </h4>
                      <p className="text-gray-700 text-base">
                        {language === 'en' ? 'Revives dull skin and evens out complexion' : 'Ravive la peau terne et unifie le teint'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        {language === 'en' ? 'Calming' : 'Apaisant'}
                      </h4>
                      <p className="text-gray-700 text-base">
                        {language === 'en' ? 'Reduces inflammation and soothes sensitivities' : 'Réduit l\'inflammation et apaise les sensibilités'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        {language === 'en' ? 'Hydrating' : 'Hydratant'}
                      </h4>
                      <p className="text-gray-700 text-base">
                        {language === 'en' ? 'Restores softness and moisture' : 'Restaure la douceur et l\'hydratation'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-amber-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-amber-800">
                        {language === 'en' ? 'Regenerating' : 'Régénérant'}
                      </h4>
                      <p className="text-gray-700 text-base">
                        {language === 'en' ? 'Promotes cellular renewal' : 'Favorise le renouvellement cellulaire'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-rose-900 mb-4">
                  {language === 'en' ? 'Rooted in tradition, perfected by science' : 'Enraciné dans la tradition, perfectionné par la science'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-rose-800">Crocin</h4>
                      <div className="text-gray-700 text-base space-y-1">
                        {language === 'en' ? (
                          <>
                            <p>Antioxidant that protects from oxidative stress</p>
                            <p>Stimulates collagen production</p>
                            <p>Enhances brightness & skin elasticity</p>
                          </>
                        ) : (
                          <>
                            <p>Antioxydant qui protège du stress oxydatif</p>
                            <p>Stimule la production de collagène</p>
                            <p>Améliore l'éclat et l'élasticité de la peau</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-rose-800">Safranal</h4>
                      <div className="text-gray-700 text-base space-y-1">
                        {language === 'en' ? (
                          <>
                            <p>Soothes irritation</p>
                            <p>Antibacterial: ideal for acne-prone skin</p>
                            <p>Reduces redness</p>
                          </>
                        ) : (
                          <>
                            <p>Apaise les irritations</p>
                            <p>Antibactérien : idéal pour les peaux à tendance acnéique</p>
                            <p>Réduit les rougeurs</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-rose-800">Crocetin</h4>
                      <div className="text-gray-700 text-base space-y-1">
                        {language === 'en' ? (
                          <>
                            <p>Improves cell regeneration</p>
                            <p>Boosts microcirculation</p>
                          </>
                        ) : (
                          <>
                            <p>Améliore la régénération cellulaire</p>
                            <p>Stimule la microcirculation</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-700 font-bold">-</span>
                    <div>
                      <h4 className="font-semibold text-rose-800">
                        {language === 'en' ? 'Vitamin C' : 'Vitamine C'}
                      </h4>
                      <div className="text-gray-700 text-base space-y-1">
                        {language === 'en' ? (
                          <>
                            <p>Fades pigmentation & dark spots</p>
                            <p>Brightens and smooths skin texture</p>
                          </>
                        ) : (
                          <>
                            <p>Estompe la pigmentation et les taches brunes</p>
                            <p>Éclaircit et lisse la texture de la peau</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case 'wellness':
        return {
          title: language === 'en' ? "Wellness" : "Bien-être",
          image: "/saf 4.jpg",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? 'Saffron is a natural ally for everyday well-being.'
                  : 'Le safran est un allié naturel pour le bien-être quotidien.'
                }
              </p>

              {/* Infusions & Aromatherapy */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {language === 'en' ? 'Infusions & Aromatherapy' : 'Infusions et Aromathérapie'}
                </h3>
                <p className="text-green-700 font-medium mb-4">
                  {language === 'en' ? "→ Nature's touch in daily wellness" : '→ La touche de la nature dans le bien-être quotidien'}
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      {language === 'en' ? 'Herbal Teas and Infusions' : 'Tisanes et Infusions'}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {language === 'en'
                        ? "When blended with other beneficial herbs, saffron brings a sense of softness and balance. It helps soothe the nervous system, stimulate digestion, and improve sleep quality. These products meet the growing demand for natural alternatives to conventional pharmaceutical solutions."
                        : "Lorsqu'il est mélangé avec d'autres herbes bénéfiques, le safran apporte une sensation de douceur et d'équilibre. Il aide à apaiser le système nerveux, stimuler la digestion et améliorer la qualité du sommeil. Ces produits répondent à la demande croissante d'alternatives naturelles aux solutions pharmaceutiques conventionnelles."
                      }
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-800 mb-2">
                      {language === 'en' ? 'Aromatherapy' : 'Aromathérapie'}
                    </h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {language === 'en'
                        ? "In the form of room sprays or diffusers, saffron's subtle aroma has a positive effect on mood, promoting a sense of calm and serenity. It is an ideal addition to relaxation spaces, wellness areas, offices, and therapeutic environments."
                        : "Sous forme de sprays d'ambiance ou de diffuseurs, l'arôme subtil du safran a un effet positif sur l'humeur, favorisant un sentiment de calme et de sérénité. C'est un ajout idéal aux espaces de détente, zones de bien-être, bureaux et environnements thérapeutiques."
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Dietary Supplements */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">
                  {language === 'en' ? 'Dietary Supplements' : 'Compléments Alimentaires'}
                </h3>
                <p className="text-blue-700 font-medium mb-4">
                  {language === 'en' ? '→ Naturally lifting mind and mood' : '→ Élever naturellement l\'esprit et l\'humeur'}
                </p>

                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {language === 'en' ? 'Capsules, softgels, and gummies' : 'Gélules, capsules molles et gommes'}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {language === 'en'
                      ? "Ideal for improving mood, reducing stress and anxiety, and promoting restful sleep. They are also suitable for combating burnout and mental fatigue."
                      : "Idéal pour améliorer l'humeur, réduire le stress et l'anxiété, et favoriser un sommeil réparateur. Ils conviennent également pour combattre l'épuisement professionnel et la fatigue mentale."
                    }
                  </p>
                </div>
              </div>

              {/* Massage Oils & Body Treatments */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-purple-900 mb-2">Massage Oils & Body Treatments</h3>
                <p className="text-purple-700 font-medium mb-4">→ A natural ally for relaxation and recovery</p>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Rich in active compounds with anti-inflammatory, antioxidant, and soothing properties, this botanical stands out as a premium ingredient in professional body care. In the form of oils or creams, it finds its place in massage institutes, wellness centers, and physiotherapy practices, delivering measurable comfort and added value to the client experience.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Relief of muscle tension and inflammation</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Thanks to its active molecules, crocin, crocetin, and safranal, it helps relieve localized muscle pain, reduce chronic inflammation, and ease stiffness. When used in therapeutic or relaxation massages, it enhances calming effects and supports optimal physical recovery.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Antioxidant and regenerative action</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      It protects skin and muscle tissues from oxidative stress, particularly in individuals exposed to intense physical exertion or skin aging. Applied topically, it nourishes the skin, improves elasticity, and promotes the repair of micro-lesions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">A natural complement to physiotherapy</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Oil-based treatments incorporating this botanical can support rehabilitation techniques by helping relieve joint pain, enhance mobility, and reduce inflammation from trauma or degenerative conditions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">A high-end sensory experience</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Its warm, subtle fragrance creates a soothing atmosphere that enhances the therapeutic benefits of each session. This sensory dimension transforms every massage into an immersive and relaxing experience.
                    </p>
                  </div>
                </div>
              </div>

              {/* Women's Health */}
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-pink-900 mb-2">Women's Health</h3>
                <p className="text-pink-700 font-medium mb-4">→ Natural support for women's balance</p>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Saffron is also used to support women's well-being thanks to its hormone-regulating effects and anti-inflammatory properties.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-pink-800 mb-2">Menstrual Comfort Supplements</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      This spice helps reduce menstrual pain, improve mood, and alleviate premenstrual symptoms.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-pink-800 mb-2">Hormonal Support</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      It is an ideal ally during periods of hormonal imbalance, such as menopause or irregular cycles, contributing to hormone regulation and overall well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        };

      case 'about':
        return {
          title: language === 'en' ? "Who We Are" : "Qui Nous Sommes",
          image: "/Who are we.JPG",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "We are committed to sharing the rich culture of Iran and honoring the heritage and communities behind every thread. We work directly with local producers under fair, ethical, and hygienic conditions, ensuring transparency and respect throughout the supply chain. Our saffron is lab-tested for purity and quality, so every batch meets the highest standards in color, aroma, and strength."
                  : "Nous nous engageons à partager la riche culture de l'Iran et à honorer le patrimoine et les communautés derrière chaque fil. Nous travaillons directement avec les producteurs locaux dans des conditions équitables, éthiques et hygiéniques, garantissant transparence et respect tout au long de la chaîne d'approvisionnement. Notre safran est testé en laboratoire pour sa pureté et sa qualité, de sorte que chaque lot répond aux normes les plus élevées en matière de couleur, d'arôme et de force."
                }
              </p>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">
                  {language === 'en' ? 'The Heart of Saffron Production' : 'Le Cœur de la Production de Safran'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'en'
                    ? "Iran, which accounts for nearly 90% of global production, is the historical heartland of saffron. Its cultivation relies on ancestral know-how: each flower is hand-picked at dawn, and the stigmas are delicately removed one by one. The flowering season, which lasts only a few weeks from late October to mid-November, requires an intense pace of work within a short time frame."
                    : "L'Iran, qui représente près de 90% de la production mondiale, est le berceau historique du safran. Sa culture repose sur un savoir-faire ancestral : chaque fleur est cueillie à la main à l'aube, et les stigmates sont délicatement retirés un par un. La saison de floraison, qui ne dure que quelques semaines de fin octobre à mi-novembre, nécessite un rythme de travail intense dans un délai court."
                  }
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {language === 'en'
                    ? "This artisanal method, combined with the rarity of the harvest, is what makes saffron the most precious spice in the world. We believe that excellence begins with connection. That's why we collaborate closely with our clients, from chefs to retailers, to deliver not just saffron, but a thoughtful, tailored experience."
                    : "Cette méthode artisanale, combinée à la rareté de la récolte, fait du safran l'épice la plus précieuse au monde. Nous croyons que l'excellence commence par la connexion. C'est pourquoi nous collaborons étroitement avec nos clients, des chefs aux détaillants, pour livrer non seulement du safran, mais une expérience réfléchie et sur mesure."
                  }
                </p>
              </div>
            </div>
          )
        };

      case 'ethical':
        return {
          title: language === 'en' ? "A Transparent, Ethical Source" : "Une Source Transparente et Éthique",
          image: "/a transparent ethical.jpg",
          content: (
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "We work directly with local producers under fair, ethical, and hygienic conditions, ensuring transparency and respect throughout the supply chain. Our saffron is lab-tested for purity and quality, so every batch meets the highest standards in color, aroma, and strength."
                  : "Nous travaillons directement avec les producteurs locaux dans des conditions équitables, éthiques et hygiéniques, garantissant transparence et respect tout au long de la chaîne d'approvisionnement. Notre safran est testé en laboratoire pour sa pureté et sa qualité, de sorte que chaque lot répond aux normes les plus élevées en matière de couleur, d'arôme et de force."
                }
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "Ethically sourced from Iran Safayra is a journey from the sun-drenched fields of Mashhad to the heart of Europe. We bring you premium-quality saffron, carefully handpicked, where centuries of tradition meet responsible modern practices."
                  : "D'origine éthique d'Iran, Safayra est un voyage des champs ensoleillés de Mashhad au cœur de l'Europe. Nous vous apportons un safran de qualité supérieure, soigneusement cueilli à la main, où des siècles de tradition rencontrent des pratiques modernes responsables."
                }
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {language === 'en'
                  ? "We believe that excellence begins with connection. That's why we collaborate closely with our clients, to deliver not just saffron, but a thoughtful, premium experience."
                  : "Nous croyons que l'excellence commence par la connexion. C'est pourquoi nous collaborons étroitement avec nos clients, pour livrer non seulement du safran, mais une expérience premium et réfléchie."
                }
              </p>
            </div>
          )
        };

      default:
        return {
          title: language === 'en' ? "Page Not Found" : "Page Non Trouvée",
          image: "",
          content: <p>{language === 'en' ? 'Content not available.' : 'Contenu non disponible.'}</p>
        };
    }
  };

  const pageContent = getPageContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">{language === 'en' ? 'Back' : 'Retour'}</span>
            </button>

            {/* Centered Logo */}
            <div className="flex items-center space-x-3 absolute left-1/2 transform -translate-x-1/2">
              <img
                src="/safayra_logo-removebg.jpg"
                alt="SAFAYRA"
                className="h-28 w-auto object-contain"
              />
            </div>

            {/* Spacer for balance */}
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
            {pageContent.title}
          </h1>
          {pageContent.image && (
            <div className="max-w-2xl mx-auto mb-8">
              <img
                src={pageContent.image}
                alt={pageContent.title}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          )}
        </div>

        <div className="max-w-4xl mx-auto">
          {pageContent.content}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#4A1F1A] to-[#6B2C20] text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <h3 className="text-xl font-bold">SAFAYRA</h3>
          </div>
          <p className="text-amber-100 mb-2 text-sm">
            {language === 'en' ? 'Premium Saffron Exchange' : 'Échange de Safran Premium'}
          </p>
          <p className="text-amber-200 text-xs">
            {language === 'en' ? '© 2025 Safayra. All rights reserved.' : '© 2025 Safayra. Tous droits réservés.'}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DetailPages;
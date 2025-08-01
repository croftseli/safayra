import React from 'react';

interface GalleryPageProps {
  language: 'en' | 'fr' | 'de';
}

const GalleryPage: React.FC<GalleryPageProps> = ({ language }) => {
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
            src="https://images.pexels.com/photos/4198019/pexels-photo-4198019.jpeg"
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
            src="https://images.pexels.com/photos/4198020/pexels-photo-4198020.jpeg"
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
            src="https://images.pexels.com/photos/1340116/pexels-photo-1340116.jpeg"
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
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
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
            src="https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg"
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
            src="https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg"
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
            src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg"
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
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg"
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
            src="https://images.pexels.com/photos/1435736/pexels-photo-1435736.jpeg"
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
            src="https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg"
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
};

export default GalleryPage;
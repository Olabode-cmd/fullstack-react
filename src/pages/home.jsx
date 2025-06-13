import Banner from '../components/banner.jsx'
import ProductCard from '../components/productcard.jsx';

import Featured2 from '../assets/featured-2.png'
import Featured3 from '../assets/featured-3.png'
import Featured4 from '../assets/featured-4.png'

const Homepage = () => {
    return (
      <div>
        <h1>Homepage</h1>
        <p>This is the homepage</p>

        <div className="grid grid-cols-4 gap-4 mt-8">
          <ProductCard
            image={Featured2}
            price="299.99"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odio ea minus eos."
          />
          <ProductCard 
                image={Featured3}
                description="This is a product." 
                price="199.59"
            />
          <ProductCard 
                image={Featured4}
                price="99.99" 
                description="This is another product. It belongs to the wig niche." 
            />
        </div>

        <Banner />
      </div>
    );
}

export default Homepage;
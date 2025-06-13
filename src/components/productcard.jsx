import Featured1 from '../assets/featured-1.png';

const ProductCard = (props) => {
    return (
      <div>
        <div>
          <img
            src={props.image || Featured1}
            alt="featured-1"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <p className="text-sm font-medium text-gray-700 mt-4">
          {props.description || "No description available"}
        </p>
        <p>
          Starts at $<span className="font-medium text-gray-800">{props.price}</span>{" "}
        </p>
      </div>
    );
}

export default ProductCard;
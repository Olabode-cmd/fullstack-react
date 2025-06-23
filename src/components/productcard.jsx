import Featured1 from '../assets/featured-1.png';

const ProductCard = (props) => {
    return (
      <div className="relative">
        <div className="absolute top-2 right-2">
          <span className="bg-green-50 text-green-500 px-2 py-1 rounded-full text-xs font-semibold">
            {props.category || "Category"}
          </span>
        </div>
        <div>
          <img
            src={props.image || Featured1}
            alt="featured-1"
            className="w-full h-[300px] object-cover"
          />
        </div>

        <h3 className="text-md">{props.title}</h3>

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
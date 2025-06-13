// import Cart1 from '../assets/featured-1.png';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

const CartCard = (props) => {
    const [quantity, setQuantity] = useState(1);
    const totalPrice = (props.price * quantity).toFixed(2);

    const increment = () => {
        setQuantity(quantity + 1);
    }
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
      <div className="grid grid-cols-6 gap-4 items-center">
        <div className="col-span-3">
          <div className="flex items-center gap-x-3">
            <div>
              <img
                src={props.image}
                alt="cart 1"
                className="h-[150px] w-[140px] object-cover rounded-lg"
              />
            </div>

            <div>
              <p className="text-gray-500 text-sm uppercase mb-2">women</p>
              <h2 className="text-md text-black font-semibold">
                {props.title}
              </h2>

              <p className="text-xs text-gray-400 mt-3">
                Color &bull;
                <span className="text-black font-semibold">{props.color}</span>
              </p>
              <p className="text-xs text-gray-400 mt-3">
                Size &bull;
                <span className="text-black font-semibold">{props.size}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-md text-gray-900 font-semibold">${props.price}</p>
        </div>
        <div>
          <div className="flex gap-x-2 items-center">
            <FaMinus className="p-1 border rounded-md border-gray-600 text-lg cursor-pointer" onClick={decrement} />
            <span className="text-md font-semibold">{quantity}</span>
            <FaPlus className="p-1 border rounded-md border-gray-600 text-lg cursor-pointer" onClick={increment} />
          </div>
        </div>
        <div>
          <p className="text-md text-amber-400 font-semibold">${totalPrice}</p>
        </div>
      </div>
    );
}

export default CartCard;
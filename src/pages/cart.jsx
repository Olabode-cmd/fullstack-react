import CartCard from "../components/cartcard";

// images
import Cart1 from "../assets/featured-1.png";
import Cart2 from "../assets/featured-2.png";
import Cart3 from "../assets/featured-3.png";
import Cart4 from "../assets/featured-4.png";

const apiData = [
    {
        image: Cart1,
        title: "Brazilian Wig",
        price: 20.40,
        color: "Blue",
        size: "21"
    },
    {
        image: Cart2,
        title: "Brazilian Wig Human Hair",
        price: 30,
        color: "Yellow",
        size: "24"
    },
    {
        image: Cart3,
        title: "Human Hair",
        price: 10,
        color: "Red",
        size: "24"
    },
    {
        image: Cart4,
        title: "Human Hair Wig",
        price: 15.50,
        color: "Black",
        size: "22"
    }
]
const Cart = () => {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto py-8 px-2">
          <h2 className="text-xl font-semibold text-gray-800">Shopping bag</h2>
          <p className="text-sm">
            <span className="font-semibold">{apiData.length} items</span> in your cart.
          </p>

          <div className="bg-white px-4 py-6 rounded-lg mt-4">
            <div className="grid grid-cols-6 gap-4 items-center mb-4">
              <p className="text-sm font-semibold col-span-3">Product</p>
              <p className="text-sm font-semibold">Price</p>
              <p className="text-sm font-semibold">Quantity</p>
              <p className="text-sm font-semibold">Total price</p>
            </div>

            <div className="space-y-4">
              {/*  // image, price, color, size, title */}
              {/* <CartCard image={Cart1} price={20.40} color="Blue" size="21" title="Brazilian Wig" />
              <CartCard image={Cart2} price={30} color="Yellow" size="24" title="Brazilian Wig Human Hair" />
              <CartCard image={Cart3} price={10} color="Red" size="24" title="Human Hair" /> */}

              {/* {["John", "Esosa", "Jane", "Micheal", "Bunmi", "Olabode", "Matthew"].map((name, index) => (
                <h1 className="text-3xl text-green-500">{name} at position {index}</h1>
              ))} */}

              {apiData.map((data, index) => (
                <CartCard image={data.image} price={data.price} title={data.title} color={data.color} size={data.size} />
              ))}

              {/* 
             data =    {
        image: Cart1,
        title: "Brazilian Wig",
        price: 20.40,
        color: "Blue",
        size: "21"
    }
              
              
              */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cart;

// [].map(() => {
//     return (

//     )
// })

// [].map(() => (

// )) 
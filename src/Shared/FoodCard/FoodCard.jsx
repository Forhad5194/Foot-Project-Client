
const FoodCard = ({ item }) => {
    const { name, recipe,image,price   } = item;
    return (
        <div>
            <div className="card w-[424px] h-[541px] bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                    <p className="bg-black text-white absolute right-0">${price}</p>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p className=" font-normal">{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Add to Card </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
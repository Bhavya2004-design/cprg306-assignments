import Item from "./item";

export default function ItemList() {
  const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};

const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};

const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};

const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};

const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};

const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};

const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};

const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};

const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};

const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};

const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};

const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

  const items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

  return (
    <div className="p-4 bg-gray-00">
      
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item1.name}</h2>
        <p className="text-gray">Buy {item1.quantity} in {item1.category}</p>
      </div>


      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item2.name}</h2>
        <p className="text-gray">Buy {item2.quantity} in {item2.category}</p>
      </div>


      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item3.name}</h2>
        <p className="text-gray">Buy {item3.quantity} in {item3.category}</p>
      </div>

  
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item4.name}</h2>
        <p className="text-gray">Buy {item4.quantity} in {item4.category}</p>
      </div>

 
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item5.name}</h2>
        <p className="text-gray">Buy {item5.quantity} in {item5.category}</p>
      </div>

 
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item6.name}</h2>
        <p className="text-gray">Buy {item6.quantity} in {item6.category}</p>
      </div>

      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item7.name}</h2>
        <p className="text-gray">Buy {item7.quantity} in {item7.category}</p>
      </div>

 
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item8.name}</h2>
        <p className="text-gray">Buy {item8.quantity} in {item8.category}</p>
      </div>

 
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item9.name}</h2>
        <p className="text-gray">Buy {item9.quantity} in {item9.category}</p>
      </div>


      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item10.name}</h2>
        <p className="text-gray">Buy {item10.quantity} in {item10.category}</p>
      </div>

    
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item11.name}</h2>
        <p className="text-gray">Buy {item11.quantity} in {item11.category}</p>
      </div>

      
      <div className="p-4 w-100 bg-yellow-200 mb-2">
        <h2 className="text-2xl font-bold">{item12.name}</h2>
        <p className="text-gray">Buy {item12.quantity} in {item12.category}</p>
      </div>
    </div>
  );
}
 
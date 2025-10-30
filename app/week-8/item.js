export default function Item({ item, onSelect }) {
  const { name, quantity, category } = item;
  return (
    <li
      onClick={() => onSelect(item)}
      className="border rounded-md p-3 cursor-pointer hover:bg-gray-100"
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-700">
        Quantity: {quantity} <br /> Category: {category}
      </p>
    </li>
  );
}


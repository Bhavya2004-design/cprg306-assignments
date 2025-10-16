// import ItemList from "./item-list";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-black flex flex-col items-center p-8">
//       <h1 className="text-4xl font-bold text-white mb-6">
//         Shopping List
//       </h1>
//       <div className="w-full max-w-lg">
//         <ItemList />
//       </div>
//     </main>
//   );
// }

// app/week-6/page.js
// import ItemList from "./item-list";

// export default function Page() {
//   return (
//     <main className="min-h-screen bg-black flex flex-col items-center py-10 px-4">
//       {/* Title */}
//       <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>

//       {/* Sorting Buttons */}
//       <div className="flex justify-center space-x-4 mb-8">
//         <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md">
//           Sort by Name
//         </button>
//         <button className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md">
//           Sort by Category
//         </button>
//         <button className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-md">
//           Group by Category
//         </button>
//       </div>

//       {/* Item List */}
//       <div className="w-full max-w-lg">
//         <ItemList />
//       </div>
//     </main>
//   );
// }

// app/week-6/page.js
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-white mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
}

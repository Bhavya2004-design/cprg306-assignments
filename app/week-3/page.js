import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center p-8">
      <h1 className="text-4xl font-bold text-white mb-6">
        Shopping List
      </h1>
      <div className="w-full max-w-lg">
        <ItemList />
      </div>
    </main>
  );
}

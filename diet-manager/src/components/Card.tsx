export function Card({
  title,
  description,
  imgUrl,
  isVisited = false,
}: {
  title: string;
  description: string;
  imgUrl: string;
  isVisited?: boolean;
}) {
  function handleClick() {
    console.log(`Hai cliccato sul pulsante per ${title}`);
  }
  return (
    <div className="rounded-lg bg-zinc-950">
      <img src={imgUrl} alt="img" className="" />
      <div className="flex flex-col gap-4 p-4">
        <h2 className="font-bold text-white">{title}</h2>
        <p className="text-gray-400">{description}</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Segna come visitata
        </button>
        <span>{isVisited ? "✅ visitata" : "❌ non visitata"}</span>
      </div>
    </div>
  );
}

export default function Notify({ type, message }) {
  return (
    <div
      className={`px-4 py-2 rounded text-white mb-3 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {message}
    </div>
  );
}

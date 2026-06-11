import NavBar from "./NavBar";

export default function Home() {
  return (
    <div>
        <NavBar />
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-indigo-600 mb-4">
            Selamat Datang di React 3
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, similique voluptatum illo, nihil qui ab ipsum ex libero sequi in velit voluptas officiis sapiente vitae! Molestiae odio inventore quia tenetur.
            <strong className="text-gray-800"> lorem</strong>
          </p>
        </div>
    </div>
  );
}
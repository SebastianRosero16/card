export default function FlexLayout() {
  return (
    <div className="min-h-screen bg-[#0a1628] p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Flex Layout</h1>
        <p className="text-xl text-gray-400">
          Contenedores flexibles para alinear y distribuir elementos.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            flex, flex-row y basis
          </h2>
          <p className="text-lg text-gray-400">
            Inicializa flex, dirección en fila y tamaño base de los elementos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            flex-row-reverse
          </h2>
          <p className="text-lg text-gray-400">
            Invierte el orden de los elementos en la fila.
          </p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">flex-col</h2>
          <p className="text-lg text-gray-400">
            Los elementos se disponen en columna (vertical).
          </p>
        </div>

        {/* Card 4 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            flex-wrap y flex-nowrap
          </h2>
          <p className="text-lg text-gray-400">
            Controla si los elementos pueden pasar a la siguiente línea.
          </p>
        </div>

        {/* Card 5 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">order</h2>
          <p className="text-lg text-gray-400">
            Ordena visualmente los elementos sin cambiar el DOM.
          </p>
        </div>
      </div>
    </div>
  );
}

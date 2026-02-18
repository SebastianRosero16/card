export default function GridLayout() {
  return (
    <div className="min-h-screen bg-[#0a1628] p-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">Grid Layout</h1>
        <p className="text-xl text-gray-400">
          Sistema de cuadrícula para crear layouts bidimensionales.
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col gap-6">
        {/* Card 1 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            grid, grid-cols y gap
          </h2>
          <p className="text-lg text-gray-400">
            Inicializa el grid, define el número de columnas y el espacio entre elementos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">col-span</h2>
          <p className="text-lg text-gray-400">
            Define cuántas columnas ocupa un elemento dentro del grid.
          </p>
        </div>

        {/* Card 3 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            col-start y col-end
          </h2>
          <p className="text-lg text-gray-400">
            Define dónde comienza y termina un elemento en la cuadrícula.
          </p>
        </div>

        {/* Card 4 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">
            grid-rows y grid-flow-col
          </h2>
          <p className="text-lg text-gray-400">
            Define filas y la dirección del flujo del grid.
          </p>
        </div>

        {/* Card 5 */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-white mb-3">row-span</h2>
          <p className="text-lg text-gray-400">
            Define cuántas filas ocupa un elemento en el grid.
          </p>
        </div>
      </div>
    </div>
  );
}

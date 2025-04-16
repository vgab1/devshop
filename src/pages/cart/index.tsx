export function Cart() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>
      <section className="flex items-center justify-between border-b-2 border-gray-300">
        <img
          src="https://i.imgur.com/uXrbyfA.jpg"
          alt="Imagem do produto"
          className="w-28"
        />
        <strong>Preço: R$2.500</strong>
        <div className="flex items-center justify-center gap-3">
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            -
          </button>
          2
          <button className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center">
            +
          </button>
        </div>
        <strong className="float-right">Subtotal: R$5.000</strong>
      </section>
      <p className="font-bold mt-4">Total: R$5.000</p>
    </div>
  );
}

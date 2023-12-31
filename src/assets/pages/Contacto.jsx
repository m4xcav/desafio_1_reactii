export const Contacto = () => {
  return (
    <>
    <section className="h-screen bg-white dark:bg-white ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mt-20 mb-20 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-gray-400">Contactanos</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">¿Necesitas ayuda? Escibrenos en este formlario de contacto.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu email</label>
              <input type="email" id="email" className="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
              dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
              dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="ejemplo@ejemplo.com" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tu mensaje</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 
              focus:ring-primary-500 focus:border-primary-500 dark:bg-white  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
               dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Escribe tu mensaje aqui"></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 
          focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar</button>
      </form>
  </div>
</section>
    </>
  )
}

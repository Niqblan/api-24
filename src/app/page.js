
export default function Home() {
  return (
    <div>
  <h1 className="font-semibold text-[40px] mt-48 text-center">
    Bienvenidos al sitio de Recomendación de películas!
  </h1>

  <main className="flex min-h-screen flex-col items-center justify-center">
    <div className="grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:text-center ">
      <a
        href="/signUp"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      >
        <h2 className={` text-2xl font-semibold `}>
          ¡Comencemos!
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
      </a>
    </div>
  </main>
</div>

  )
}

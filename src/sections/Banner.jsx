function Banner(){
    return (
    <section className="overflow-hidden w-full h-fit py-6 md:py-24 bg-primary-dark">
      <div className="container px-4 md:px-16 flex flex-col gap-16 md:gap-0 ustify-between md:flex-row">
        
        <div className="w-full md:w-7/12 text-center md:text-left flex flex-col items-center justify-center gap-4 md:gap-6 md:items-start relative">
            <h2 className="text-lg font-semibold uppercase text-auxiliary-sun tracking-widest">Finalmente é possível!</h2>
            <h1 className="text-zinc-50 text-4xl md:text-6xl font-extrabold">Sua jornada para Marte começa aqui<span  className="text-auxiliary-sun">.</span></h1>
            <p className="text-spacegray-05 w-4/6">A primeira viagem para Marte estará disponível a partir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</p>
            
            <a href="#" className="bg-secundary hover:bg-secundary/70 transition-colors font-semibold px-8 py-3 rounded-md">
              Inscreva-se agora
            </a>
        </div>

        <img src="/images/image-banner.svg" alt="Ilustração de astronaltas em marte." className="relative md:absolute -right-20 w-auto xl:w-auto md:-right-1/4 md:top-4 lg:right-0 lg:top-4" />

      </div> 
    </section>
    )
}

export default Banner
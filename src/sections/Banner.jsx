function Banner(){
    return (
    <section className="w-full h-fit py-24 bg-primary-dark">
      <div className="container flex justify-between">
        
        <div className="w-1/2 flex flex-col gap-6 items-start relative">
            <h2 className="text-lg font-semibold uppercase text-auxiliary-sun tracking-widest">Finalmente é possível!</h2>
            <h1 className="text-zinc-50 text-6xl font-extrabold">Sua jornada para Marte começa aqui<span  className="text-auxiliary-sun">.</span></h1>
            <p className="text-spacegray-05 w-4/6">A primeira viagem para Marte estará disponível a partir do dia 12/03/2028. Inscreva-se em nossa lista de espera.</p>
            
            <a href="#" className="bg-secundary hover:bg-secundary/70 transition-colors font-semibold px-8 py-3 rounded-md">
              Inscreva-se agora
            </a>
          </div>

          <img src="/images/image-banner.svg" alt="Ilustração de astronaltas em marte." className="absolute right-0 top-4" />

      </div> 
    </section>
    )
}

export default Banner
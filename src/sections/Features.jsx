function Features(){
    return (
      <section className="w-full h-fit px-28 bg-primary-dark">
        <div className="container grid grid-flow-col justify-between">
          <div className="w-3/4 flex flex-col gap-2">
            <img className="w-1/3" src="/images/icon-rocket.svg" alt="icone de foguete" />
            <p>Foguetes com a mais alta tecnologia e conforto.</p>
          </div>
          <div className="w-3/4 flex flex-col gap-2">
            <img className="w-1/3" src="/images/icon-flag.svg" alt="icone de bandeira" />
            <p>Mais de 100 missões consecutivas com sucesso.</p>
          </div>
          <div className="w-3/4 flex flex-col gap-2">
            <img className="w-1/3" src="/images/icon-telescope.svg" alt="icone de telescópio" />
            <p>Experiência única e exclusiva.</p>
          </div>
        </div>
      </section>
    )
}
export default Features;
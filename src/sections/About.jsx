import BackgroundStars from "../components/BackgroundStars/BackgroundStars";

function About(){
    return (
      <section className="relative w-full h-fit py-24 bg-gradient-to-b from-primary-dark to-50% overflow-hidden">
        
        <BackgroundStars />


        <div className="container relative flex flex-row justify-between items-center gap-20">
          
          <img 
            src="/images/lines.svg"
            alt="linhas representando órbitas"
            width={'80%'}
            className="absolute -left-1/2 top-0 z-0"
          />

          <img className="w-1/2 relative" src="/images/mars.svg" alt="ilustração do planeta Marte" />
          <div className="w-1/2 flex flex-col gap-4 relative">
            <h2 className="text-lg font-semibold uppercase text-auxiliary-sun tracking-widest">POR QUE MARTE?</h2>
            <h2 className="text-3xl font-bold">Sobre o planeta vermelho</h2>
            <article className="flex flex-col gap-8">
              <p>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</p>
              <p>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</p>
            </article>
          </div>
        </div>

        <div className="container mt-56 flex justify-start items-center gap-20 relative overflow-visible">
          <div className="w-1/4 flex flex-col gap-3">
            <img src="/images/logo.svg" alt="logo spacey" className="w-2/3" />
            <h4 className="font-bold text-3xl">
              O caminho para tornar a humanidade multiplanetária<span className="text-auxiliary-sun">.</span>
            </h4>
            <a href="#" className="text-secundary-light hover:text-secundary-light/70 text-lg font-bold">Inscreva-se agora</a>
          </div>

          <img src="/images/chevron-left.svg" alt="Seta de navegação para esquerda" />
          <div className="">
            <div className="flex gap-8 w-fit">
              <img src="/images/gallery/image-03.jpg" alt="imagem de marte" className="rounded-xl" />
              <img src="/images/gallery/image-02.jpg" alt="imagem de marte" className="rounded-xl" />
              <img src="/images/gallery/image-01.jpg" alt="imagem de marte" className="rounded-xl" />
              <img src="/images/gallery/image-01.jpg" alt="imagem de marte" className="rounded-xl" />
              <img src="/images/gallery/image-01.jpg" alt="imagem de marte" className="rounded-xl" />
            </div>
          </div>
        </div>

      </section>
    )
}

export default About
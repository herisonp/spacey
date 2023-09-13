import FeatureBox from "../components/Features/FeatureBox";

function Features(){

  const boxes = [
    {
      iconURL: '/images/icon-rocket.svg',
      iconAlt: 'icone de foguete',
      description: 'Foguetes com a mais alta tecnologia e conforto.'
    },
    {
      iconURL: '/images/icon-flag.svg',
      iconAlt: 'icone de bandeira',
      description: 'Mais de 100 missões consecutivas com sucesso.'
    },
    {
      iconURL: '/images/icon-telescope.svg',
      iconAlt: 'icone de telescópio',
      description: 'Experiência única e exclusiva.'
    }
  ]

    return (
      <section className="w-full h-fit py-6 md:py-24 bg-primary-dark">
        <div className="container flex flex-col text-center gap-16 md:gap-0 md:text-left md:flex-row justify-between items-center">
          {boxes.map(({iconURL, iconAlt, description}, index) => (
            <FeatureBox
              key={iconAlt + iconURL + index}
              description={description}
              iconAlt={iconAlt}
              iconURL={iconURL}
            />
          ))}
        </div>
      </section>
    )
}
export default Features
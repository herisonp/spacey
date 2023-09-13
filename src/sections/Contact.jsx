import BackgroundStars from "../components/BackgroundStars/BackgroundStars"
import FormInput from "../components/Form/FormInput"

function Contact(){

    const inputs = [
        {
            label: 'Seu nome',
            id: 'name',
            type: 'text'
        },
        {
            label: 'E-mail',
            id: 'email',
            type: 'email'
        },
        {
            label: 'Telefone',
            id: 'tel',
            type: 'tel'
        },
    ]

    return (
        <section className="w-full h-fit py-16 md:py-28 pb-0 relative">
            <BackgroundStars />

            <div className="container px-4 md:px-16 flex flex-col md:flex-row justify-between items-center md:items-start gap-16 relative">
                <div className="bg-primary py-8 px-8 md:py-10 md:px-12 rounded-2xl w-full md:w-1/2 lg:w-1/2 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <img className="w-14" src="/images/icon-ticket.svg" alt="icone de ingresso" />
                        <h2 className="text-2xl font-medium">Garanta sua vaga para a primeira viagem</h2>
                        <p className="text-base">Preencha os campos abaixo para entrar na lista de espera</p>
                    </div>

                    <form action="" className="flex flex-col gap-6">

                        {inputs.map(({label, id, type}) => (
                            <FormInput key={id} label={label} id={id} type={type} />
                        ))}

                        <div className="flex justify-start items-center gap-4">
                            <input
                                id="agree"
                                name="agree"
                                type="checkbox"
                                className="form-checkbox bg-transparent p-2 border-2 border-white rounded text-secundary-light focus:border-0 focus:outline-none checked:border-transparent"
                            />
                            <label htmlFor="agree">Concordo em receber comunicações</label>
                        </div>

                        <input
                            type="submit"
                            value="Garantir minha vaga"
                            className="bg-secundary hover:bg-secundary-dark w-full rounded-md py-4 cursor-pointer font-semibold"
                        />
                    </form>
                </div>

                <img src="/images/rocket-illustration.svg" alt="Ilustração de um foguete decolando" className="w-4/5 md:w-1/2 xl:w-auto" />
            </div>

            <div className="w-full md:mt-36 xl:mt-auto flex items-center justify-center relative">
                <img src="/images/smokes.svg" alt="Ilustração de fumaças." className="w-full" />
            </div>
        </section>
    )
}

export default Contact
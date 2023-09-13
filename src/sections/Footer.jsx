function Footer(){
    return (
        <footer className="w-full h-fit  py-12 md:py-16 bg-spacegray-01">
            <div className="container px-4 md:px-16 flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center">
                <img src="/images/logo.svg" alt="" />
                <ul className="flex gap-8 md:gap-4">
                    <li><a href="#"><img src="/images/instagram.svg" alt="" /></a></li>
                    <li><a href="#"><img src="/images/linkedin.svg" alt="" /></a></li>
                    <li><a href="#"><img src="/images/facebook.svg" alt="" /></a></li>
                </ul>
                <nav className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <a href="#">Início</a>
                    <a href="#">Sobre nós</a>
                    <a href="#">Missões</a>
                    <a href="#">Contato</a>
                </nav>
            </div>
        </footer>
    )
}

export default Footer
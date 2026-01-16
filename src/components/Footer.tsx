import './styles/Footer.css'
import logo from '/logo.svg'

export default function Footer() {
    return(<footer className='Footer'>
        <div className='Footer_itens'>
            <div className='Footer_itens_informacoes'>
                <div className='Footer_itens_informacoes_lista'>
                    <h5>Páginas</h5>
                    <div className='Footer_itens_informacoes_lista_itens'>
                        <a href="">Início</a>
                        <a href="/sobre">Sobre</a>
                    </div>
                </div>
                <div className='Footer_itens_informacoes_lista'>
                    <h5>Informações</h5>
                    <div className='Footer_itens_informacoes_lista_itens'>
                        <a href="">Repositório</a>
                    </div>
                </div>
            </div>
            <img src={logo} alt="Logo do site" />
        </div>
    </footer>)
}
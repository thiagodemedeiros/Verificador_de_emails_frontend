import './styles/HomeSection1.css'

export default function HomeSection1() {
    return(
    <section className="HomeSection1">
        <div className='HomeSection1_texto'>
            <h1>Verificador de Emails</h1>
            <h2>Analise, verifique e responda seus emails de forma pratica e facil</h2>
            <div className='HomeSection1_texto_p'>
                <p>Nosso sistema analisa seus e-mails de forma inteligente e dinâmica, oferecendo sugestões de respostas específicas para cada mensagem recebida.</p>
                <p>Aproveitando modelos avançados de inteligência artificial, aceleramos o processo de resposta, permitindo que você economize tempo e tenha mais liberdade para se concentrar nos assuntos que realmente importam no seu dia a dia.</p>
                <p>Além disso, nossa IA avalia se o e-mail é produtivo ou improdutivo, ajudando a priorizar as mensagens mais relevantes e a recomendar respostas precisas, adaptadas à situação.</p>
            </div>
        </div>

        <div className='HomeSection1_inputs'>
            <div className='HomeSection1_inputs_itens'>
                <h3>Digite abaixo o email</h3>
                <textarea placeholder="Escreva aqui..."></textarea>
            </div>
            <div className='HomeSection1_inputs_itens'>
                <h3>Classificação do email</h3>
                <h5>Produtivo</h5>
            </div>
            <div className='HomeSection1_inputs_itens'>
                <h3>Sugestão de resposta</h3>
                <textarea placeholder="Escreva aqui..."></textarea>
            </div>
        </div>
    </section>    
    )
}
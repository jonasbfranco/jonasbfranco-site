import styles from './ContHome.module.css'

export default function ContHome() {

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div className={styles.container_home}>
        <section>
            <h2>Sobre mim</h2>
            <p>Prazer em te conhecer, meu nome é Jonas, tenho 44 anos.<br />
            Eu amo o universo da tecnologia e ele está em constante evolução. 
            O fato de poder ajudar ou facilitar a vida de alguém, me deixa animado. 
            Sempre gostei de pensar em como resolver problemas e agora posso 
            fazer isso com linhas de código.<br />
            ⁠<br />⁠⁠Comecei os meus estudos há 12 anos por pura curiosidade, trabalhei 
            com design mas queria saber como eram feitos os websites. 
            Um dia decidi tentar aprender por conta própria, por isso procurei 
            conteúdos no Youtube e acabei desenvolvendo conhecimentos de HTML e CSS. 
            Após algumas semanas, percebi que gostava muito disto e por isso investi 
            em cursos online e evolui cada vez mais.<br />
            ⁠<br />⁠⁠Hoje em dia, foco no meu 
            crescimento no ambiente de trabalho e no aprendizado durante minhas tarefas, 
            mas no meu tempo livre, estou sempre desenvolvendo algum projeto paralelo para 
            aprender coisas novas. Recentemente comecei também a criar tutoriais para o 
            Youtube para poder desenvolver as minhas capacidades de ensino.<br />
            ⁠<br />⁠Algo que sempre chamou a minha atenção foram os projetos Front End com 
            efeitos diferentes, por exemplo, websites com elementos/animações personalizados 
            que melhoram a UI/UX.</p>
        </section>

        <section>
        <h2 className={styles.h2_margin_top}>Conhecimentos</h2>
            <div className={styles.conhec_container}>
                <div className={styles.conhec_card}>
                    <div>svg</div>
                    <div><span>HTML</span>
                        <strong>2 anos de experiência</strong>
                    </div>
                </div>
                <div>
                    <div>svg</div>
                    <div>
                        <span>CSS</span>
                        <strong>2 anos de experiência</strong>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <form className={styles.form}>
                <div>
                    <label for="name">Nome</label>
                    <input type="text" value="" id="name" name="name" />
                </div>
                <div>
                    <label for="email">E-mail</label>
                    <input type="email" value="" id="email" name="email" />
                </div>
                <div>
                    <label for="message">Mensagem</label>
                    <textarea id="message"></textarea>
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </section>


        <footer>
                <p>Feito com 💙 por Jonas B. Franco</p>
                <a onClick={scrollToTop}>Voltar ao topo</a>
        </footer>
        
        </div>
    )
}
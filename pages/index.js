import Head from 'next/head'
import styles from '../styles/Home.module.css'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>landing page</title>
        <meta name="description" content="Exemplo de landing page com Next.js" />
        <meta name="author" content="Jonathan Lauxen Romano" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>
        Meus primeiros passos com next.js
      </h1>

      <p className={styles.description}>
        Esta landing page foi desenvolvida por <strong><a href="https://github.com/JonathanRomano" target="_blank">Jonathan Lauxen Romano,</a></strong> tem apenas o objetivo de exemplificar como usar o <strong>Next.js</strong> para criação de paginas estaticas com server side rendering.
        Eu estou começando a estudar o ecositema do <strong>Next.js</strong> e decidi criar esse simples exemplo pois é uma pagina que pode ser usada para campanhas de marketing com trafego pago, e tem a vantagem de ser renderizada pelo lado do servidor, alem de ser responsiva e se comportar de maneira diferente nos dispositivos mobile (pouca coisa responsiva, pra mim ainda é um conceito novo kkkk).
        Diversas pessoas trabalham como afiliados de produtos digitais e ficam a mercê da pagina de vendas disponibilizada pelo produtor, com essa simples solução é possivel optimizar a copy de vendas do produto e direcionar os clientes direto para o checkout, tendo a vantagem de entregar um conteudo estatico e de rapido carregamento, melhorando a experiencia do usuario e aumentanto suas vendas!
      </p>

      <iframe className={styles.video} src="https://www.youtube.com/embed/dYgrDcXHLwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      <a className={styles.ctalink} href='https://www.linkedin.com/in/jonathan-lauxen-romano-626718193/' target='_blank'>
        <button className={styles.ctabutton}>
          Meu Linkedin!
        </button>
      </a>
      
      <footer className={styles.footer}>
        <a href="https://github.com/JonathanRomano" target="_blank">
          Powered by Jonathan Lauxen Romano
        </a>
      </footer>
    </div>
  )
}

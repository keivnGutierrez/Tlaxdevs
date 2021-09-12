import Head from 'next/head'

import FromSuscribe from '../components/FromSuscribe'
import Navbar from '../components/Navbar'
import Btn from '../components/Btn'

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import Image from 'next/image'

export default function Home() {
  return (

    <>
      <Head>
        <title>Home/Tlaxdevs</title>
        <meta name="description" content="TLaxdevs tu mejor opcion en desarrollo de software, experincias unicas, velodidad y buenas practicas en codigo" />
        <link rel="icon" href="/favicon.svg" />

        <link rel="apple-touch-icon" href="/favicon.svg" />

        <meta
          name="keywords"
          content=" TLaxcala, Tlaxdevs, software, desarrollo web, desarrollo movil, react, nexjs, web, movil, android, developer"
        />
        <meta name="author" content="kevin Gutierrez email: KevinGutiérrez6895@gmail.com" />

        <meta name="copyright" content="Propietario del copyright Tlaxdevs" />

      </Head>
      <Navbar></Navbar>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}> ¡Bienvenido a  <span>Digital solutions <span className="text-logo">Tlaxdevs !</span> </span> </h1>
          <p className={styles.description}>
            ¿Listo para iniciar tu proyecto?{' '}
            <code className={styles.code}>Hello/World</code>
          </p>
          <Image src="/web.svg" alt="Mack Home WEb" width={250} height={250} />
        </main>
      </div>
      <div className={styles.containerWhite}>
        <main className={styles.mainInfo}>
          <article className="mb-40">
            <h1 className={styles.titleInfo}>Profesionaliza tu negocio ...</h1>
            <p className={styles.paragraphInfo} >Nosotros desarrollamos tu <span>proyecto.</span> </p>
            <p className={styles.paragraphInfo}>
              Tenemos años de experiencia que nos respalda.
              nos mantenemos a la vanguardia de las últimas tecnologías para desarrollar productos <span>rápidos, eficientes y visualmente atractivos.</span>
            </p>
            <p className={styles.paragraphInfo}>
              Obtén  el mejor servicio, las mejores tecnologías <span>¿Te atreves a trabajar con nosotros?</span>
            </p>
          </article>
          <aside >
            <div style={{ margin: 'auto' }}>
              <Image src="/console.svg" alt="Mack Home WEb" width={250} height={200} />
            </div>
          </aside>
        </main>
      </div>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <article>
            <h1 className={styles.titleInfoWhite}>Software de calidad</h1>
            <p className={styles.paragraphInfoWhite}>
              Obtén el mejor servicio, las mejores tecnologías <span>¿Te atreves a trabajar con nosotros?</span>
            </p>
            <h3 className={styles.subTitleInfoWhite}>Recibe promociones exclusivas</h3>
            <FromSuscribe></FromSuscribe>
          </article>
          <aside>
            <div style={{ margin: 'auto' }}>
              <Image src="/movil.svg" className="m-a" alt="Mack Home WEb" width={400} height={400} />
            </div>
          </aside>
        </div>
      </div>
      <div className={styles.containerWhite}>
        <main className={styles.mainInfo}>
          <article className="mb-40">
            <h1 className={styles.titleInfo}>¿Estás listo para tener la mejor experiencia de usuario?</h1>
            <p className={styles.paragraphInfo}>
              <span>
                Estamos a la vanguardia en cuanto tecnologías:
              </span>
            </p>
            <p className={styles.paragraphInfo + " ml-20"}>
              <span>WEB:  </span>
              ReactJS,
              NextjS,
              NodeJS,
              MongoDB,
              firebase
            </p>
            <p className={styles.paragraphInfo + " ml-20"}>
              <span>MOVIL:  </span>
              React Native,
              Kotlin,
              Java,
              firebase
            </p>
            <div
              className="mt-20"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                gridGap: '15px',
                marginTop: '60px'
              }}
            >
              <Link href='/portafolio'>
                <a>
                  <Btn
                    text="Ve nuestros proyectos en producción"
                    colors={{ primary: '#E84AB6', secondary: '#FF0C7F' }}
                    width='290px'
                    height="50px"
                  />
                </a>

              </Link>
              <Link href='/cotizaciones'>
                <a>
                  <Btn
                    text="Cotiza tu proyecto"
                    colors={{ primary: '#5BABF4', secondary: '#396EB2' }}
                    width='290px'
                    height="50px"
                  />
                </a>

              </Link>
            </div>
          </article>
          <aside >
            <div style={{ margin: 'auto' }}>

              <Image src="/compu.svg" className="m-a" alt="Mack Home WEb" width={350} height={250} />
            </div>
          </aside>
        </main>
      </div>
      <Footer />
    </>
  )
}

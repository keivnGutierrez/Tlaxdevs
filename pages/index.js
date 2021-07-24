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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tiem = setTimeout(() => {
      setLoading(false)
    }, 500);
    return () => {
      clearTimeout(tiem)
    }
  }, [])


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
      {loading && (
        <div style={{ zIndex: '3', position: 'fixed', width: '100%', display: 'flex', margin: 'auto', height: '100vh', background: 'grey', opacity: .6 }} >
          <Loading />
        </div>
      )}
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}> ¡Bienbenido a <span>Digital solutions <span className="text-logo">Tlaxdevs !</span> </span> </h1>
          <p className={styles.description}>
            ¿Listo para inciar tu proyecto?{' '}
            <code className={styles.code}>Hello/World</code>
          </p>

          <Image src="/web.svg" alt="Mack Home WEb" width={350} height={350} />
        </main>
      </div>
      <div className={styles.containerWhite}>
        <main className={styles.mainInfo}>
          <article className="mb-40">
            <h1 className={styles.titleInfo}>Profesionaliza tu negocio...</h1>
            <p className={styles.paragraphInfo} >Nosotros desarrollamos tu <span>proyecto.</span> </p>
            <p className={styles.paragraphInfo}>
              Tenemos años de experincia que nos respandal.
              nos mantenemos a la vanguardia de las ultimas tecnologías para desarrollar productos <span>rapidos, efecientes y viusalmente atractivos.</span>
            </p>
            <p className={styles.paragraphInfo}>
              Obten el mejor servicio, las mejores tecnologías <span>¿Te atreves a trabajar con nostros?</span>
            </p>
          </article>
          <aside >
            <div>
              <Image src="/console.svg" alt="Mack Home WEb" width={250} height={180} />
              <Image src="/consolegrey.svg" alt="Mack Home WEb" width={170} height={130} />
            </div>
            <Image src="/desktop.svg" alt="Mack Home WEb" width={500} height={500} />

          </aside>
        </main>
      </div>
      <div className={styles.container}>
        <div className={styles.mainInfo}>
          <article>
            <h1 className={styles.titleInfoWhite}>Software de calidad</h1>
            <p className={styles.paragraphInfoWhite}>
              Obten el mejor servicio, las mejores tecnologías <span>¿Te atreves a trabajar con nostros?</span>
            </p>
            <h3 className={styles.subTitleInfoWhite}>Recibe promociones exclucivas</h3>
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
                    text="Ve nuestros proyectos en produccion"
                    colors={{ primary: '#E84AB6', secondary: '#FF0C7F' }}
                    width='220px'
                    height="50px"
                  />
                </a>

              </Link>
              <Link href='/cotizaciones'>
                <a>
                  <Btn
                    text="Cotiza tu proyecto"
                    colors={{ primary: '#5BABF4', secondary: '#396EB2' }}
                    width='220px'
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

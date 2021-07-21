import Head from 'next/head'

import Navbar from '../components/Navbar'
import ItemProyect from '../components/ItemProyect'
import Btn from '../components/Btn'

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'


import { useState, useEffect } from 'react'
import Loading from '../components/Loading'


export default function Portafolio() {

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
                <title>Portafolio/Tlaxdevs</title>
                <meta name="description" content="Echale un ojo a nuestros portafolio proyectos, siempre estamos mejorardo los proudctos y inovando" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/favicon.svg" />

                <meta
                    name="keywords"
                    content=" TLaxcala, Tlaxdevs, software, desarrollo web, desarrollo movil, react, nexjs, web, movil, android, developer, porfolio, portafolio, proyectos, informatica, webs"
                />
                <meta name="author" content="kevin Gutierrez email: KevinGutiérrez6895@gmail.com" />

                <meta name="copyright" content="Propietario del copyright Tlaxdevs" />
            </Head>
            <Navbar></Navbar>
            {loading && (
                <div style={{ position: 'fixed', width: '100%', display: 'flex', margin: 'auto', height: '100vh', background: 'grey', opacity: .6 }} >
                    <Loading />
                </div>
            )}
            <div className={styles.containerWhite}>
                <main className={styles.main}>
                    <h1 className={styles.titleGeneral}>¡Bienbenido a nuestro  portafolio de trabajos !</h1>
                    <p className={styles.description}>
                        <code className={styles.codeInWhite}>if(goodProudcts)</code>
                    </p>
                    <div className="proyects-list mt-20">
                        <ItemProyect
                            href='https://ztiluz.com/'
                            text={{
                                one: 'Pagina web para la ztiluz',
                                two: 'Echa con ReactJS y pagos con mercado pago.'
                            }}
                            img="/ztiluzweb.svg"
                        />
                        <ItemProyect
                            href='https://mini-viajes.web.app/'
                            text={{
                                one: 'Pagina web para la agencia de viajes MiniViajesMX',
                                two: 'Echa con ReactJS y pagos con mercado pago.'
                            }}
                            img="/miniviajes.svg"
                        />
                        <ItemProyect
                            href='https://play.google.com/store/apps/details?id=com.mx.ztiluz&hl=es_MX&gl=US'
                            text={{
                                one: 'Aplicaión android Ztiluz',
                                two: 'Echa con koltin y nodeJS.'
                            }}
                            img="/ztiluzapp.svg"
                        />

                        <ItemProyect
                            href=''
                            text={{
                                one: 'Admin Ztuliz',
                                two: 'Echo con ReactJS'
                            }}
                            img=""
                            isprivate={true}
                        />
                        
                        <ItemProyect
                            href=''
                            text={{
                                one: 'Admin Miniviajes',
                                two: 'Echo con ReactJS'
                            }}
                            isprivate={true}
                            img=""
                        />
                        
                        <ItemProyect
                            href=''
                            text={{
                                one: 'Admin Miniviajes',
                                two: 'Echo con ReactJS'
                            }}
                            isprivate={true}
                            img=""
                        />
                        

                    </div>
                    <div style={{ display: 'flex', marginTop: '50px' }}>
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

                </main>
            </div>

            {/* <div>
                <h1></h1>
            </div> */}
            <Footer />
        </>
    )
}


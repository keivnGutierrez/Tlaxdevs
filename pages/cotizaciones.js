import Head from 'next/head'

import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import { COLORS } from '../const/colors'


export default function Cotizaciones() {

    return (
        <>
            <Head>
                <title>Cotizaciones/Tlaxdevs</title>
                <meta name="description" content="Solicita una contización para tu proyecto, las mojeres tecnologías, la mejor experienciencia de usuario y buenas practicas en codigo" />
                <link rel="icon" href="/favicon.svg" />
                <link rel="apple-touch-icon" href="/favicon.svg" />
                <meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1, width=device-width, height=device-height" />
                <meta
                    name="keywords"
                    content=" TLaxcala, Tlaxdevs, software, desarrollo web, desarrollo movil,precios,we precios,cotizaciones, react, nexjs, web, movil, android, developer, porfolio, portafolio, proyectos, informatica, webs"
                />
                <meta name="author" content="kevin Gutierrez email: KevinGutiérrez6895@gmail.com" />

                <meta name="copyright" content="Propietario del copyright Tlaxdevs" />
            </Head>
            <Navbar></Navbar>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>¡Cuentanos sobre tu <span className="text-logo-green"> proyecto!</span></h1>
                    <p className={styles.description}>
                        <code className={styles.code}>if(bestOption)</code>
                    </p>
                    <p style={{ fontSize: '18px', fontWeight: '600', color: COLORS.tertiary }} >Llena el formulario y un miembro del equipo se pondrá en contacto contigo.</p>

                    <ContactForm />
                    <p style={{ fontSize: '12px' }}>Tenemos una política de 0 span y privacidad con los datos de nuestros clientes.</p>

                </main>
            </div>
            <Footer dark={true} />
        </>
    )
}


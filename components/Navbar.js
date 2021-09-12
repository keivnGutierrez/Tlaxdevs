import React from 'react'
import { COLORS } from '../const/colors'
import CircleIcon from './icons/CircleIcon'
import Link from 'next/link';

import Menu from './icons/Menu'
import MenuNav from './MenuNav';
import { useNavbar } from '../hooks/useNavbar';

export default function Navbar() {
    const nav = useNavbar();
    return (
        <>
            <nav>
                <Link href='/'>
                    <a className='container-icons'>
                        Inicio
                        <CircleIcon color='secondary' />
                        <CircleIcon color='tertiary' />
                        <CircleIcon />
                    </a>
                </Link>


                <div className="container-btn">
                    {/* <Link
                        href="/cotizaciones"
                    >
                        <a>Contactar</a>
                    </Link>
                    <Link
                        href="/portafolio"
                    >
                        <a>Portafolio</a>
                    </Link> */}
                    <label onClick={nav.handleOpen}>
                        <Menu/>
                    </label>
                </div>
            </nav>
            <MenuNav open={nav.status} handleClose={nav.handleClose} />


            <style jsx>{`
                nav{
                    position:fixed;
                    z-index:3;
                    width:100vw;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    padding:10px 5%;
                    background:#222a4c;
                    opacity:.9; 
                    border-bottom:solid 1px grey;
                    height:50px
                }

                .container-icons{
                    display:flex;
                    grid-gap:5px;
                    align-items:center;
                  
                }
                nav .container-btn{
                    display:flex;
                    grid-gap:40px;
                }
                
                a{
                    color:white;
                    font-weight:700;
                    cursor:pointer;
                }
                a:hover{
                    opacity:2;
                    cursor:pointer;
                    color:${COLORS.secondary};
                    transition:.5s;
                }
                a:active{
                    opacity:2;
                    cursor:pointer;
                    color:${COLORS.green};
                    transition:2s;
                }
                
            `}</style>
        </>
    )
}

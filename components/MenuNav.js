import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';


import { COLORS } from '../const/colors'

const MenuNav = ({
    open = false,
    handleClose = () => { }
}) => {

    return (
        <>
            <div className="menu">
                <span className="close noselection" onClick={handleClose} >&#10005;</span>
                <ul>
                    <li>
                        <Link
                            href="/"
                        >
                            <a>Inicio &gt;</a>
                        </Link>
                    </li>
                    <li>

                        <Link
                            href="/cotizaciones"
                        >
                            <a>Contactar &gt;</a>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/portafolio"
                        >
                            <a>Portafolio &gt;</a>
                        </Link>
                    </li>
                </ul>


            </div>
            <style jsx>{`
                .menu{
                    z-index:3;
                    position:fixed;
                    right:${open?"0px":"-250px" };
                    height:100vh;
                    width:250px;
                    transition:1s;
                    background:${COLORS.background};
                    opacity:.9;
                }
                ul{
                    margin-top:90px;
                    display:flex;
                    padding-left:20px;
                    gap:20px;
                    flex-direction:column;
                }
                a{
                    color:white;
                    font-weight:700;
                    cursor:pointer;
                    font-size:24px;
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
                .close{
                    position:absolute;
                    margin:20px;
                    color:white;
                    font-weight:700;
                    font-size:40px;
                    color:${COLORS.secondary}
                }
                .close:hover{
                    opacity:2;
                    cursor:pointer;
                    color:${COLORS.green};
                    transition:.5s;
                }
            `}</style>
        </>
    )
}

MenuNav.propTypes = {
    open:PropTypes.bool,
    handleClose:PropTypes.func
}

export default MenuNav


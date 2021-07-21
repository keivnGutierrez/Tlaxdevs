import React from 'react'

export default function Footer({
    dark = false
}) {
    return (
        <footer className='footer' style={{ background: dark ? '#fff' : '' }}>
            <h1 className="text-logo-green">Tlaxdevs</h1>
            <p className="text-footer" style={{ color: dark ? 'black' : '' }} >COPYRIGHT ©2021 ALL RIGHTS RESERVED</p>
        </footer>
    )
}

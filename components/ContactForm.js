import InputGeneral from './InputGeneral'
import Btn from './Btn'
import { useState } from 'react'
import Loading from './Loading';

import { addPosibleClient } from '../request/client';

export default function ContactForm() {
    const regexIsNumber = new RegExp(/^[0-9\s]*$/);
    const regexIsLetter = new RegExp(/^[a-zA-Z\s]*$/);
    const regexIsEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [envForm, setEnvForm] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [dataForm, setDataForm] = useState({
        name: {
            value: '',
            error: ''
        },
        phone: {
            value: '',
            error: ''
        },
        email: {
            value: '',
            error: ''
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        const tel = value.replace(/ /g, "");
        let error = '';
        if (name == 'email' && regexIsEmail.test(value) == false && value !== '') {
            error = "El email esta incompleto";
        }
        if (name == 'phone' && tel.length !== 10 && value !== '') {
            console.log('phone');
            error = "El telefono es de 10 digitos";
        }
        if (name == 'name' && regexIsLetter.test(value) == false) {
            return;
        }
        if (name == 'phone' && regexIsNumber.test(value) == false) {
            return;
        }

        setDataForm({
            ...dataForm,
            [name]: {
                ...[name],
                value: value,
                error: error
            }
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        const validationValues = dataForm.email.value !== '' && dataForm.phone.value !== '' && dataForm.name.value !== '';
        const validationErrors = dataForm.email.error === '' && dataForm.phone.error === '' && dataForm.name.error === '';

        if (validationValues && validationErrors) {
            console.log('todo listo');
            setLoading(true);
            addPosibleClient({
                name: dataForm.name.value,
                mail: dataForm.email.value,
                phone: dataForm.phone.value
            }).then(r=>{
                setLoading(false);
                setEnvForm(true);
            })
        }
        if (validationValues === false && validationErrors === true) {
            setError(true)
        } else {
            setError(false)
        }
        console.log('validation');
    }
    const handleClickAgainSend = () => {
        setEnvForm(false)
    }

    return (
        <>
            {
                loading ? (
                    <div style={{ height: '450px', display: 'flex' }}>
                        <Loading />
                    </div>
                )
                    : (
                        <>
                            {envForm ?
                                (<>
                                    <h1>
                                        El formulario ah sido enviado correctamente
                                    </h1>
                                    <div
                                        onClick={handleClickAgainSend}
                                    >

                                        <Btn
                                            text="Enviar otra vez"
                                            colors={{ primary: '#5BABF4', secondary: '#396EB2' }}
                                            width='220px'
                                            height="50px"
                                        />
                                    </div>
                                </>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <InputGeneral
                                            placeholder='¿Cual es tu nombre?'
                                            name="name"
                                            maxLength={50}
                                            textLabel={dataForm.name.error}
                                            value={dataForm.name.value}
                                            handleChange={handleChange}
                                        />
                                        <InputGeneral
                                            placeholder='Tu numero de telefo'
                                            type='tel'
                                            name="phone"
                                            maxLength={11}
                                            textLabel={dataForm.phone.error}
                                            value={dataForm.phone.value}
                                            handleChange={handleChange}

                                        />
                                        <InputGeneral
                                            placeholder='Tu numero de email'
                                            type='text'
                                            name="email"
                                            maxLength={45}
                                            textLabel={dataForm.email.error}
                                            value={dataForm.email.value}
                                            handleChange={handleChange}

                                        />
                                        <div style={{ display: 'flex' }}>
                                            <label>
                                                <input type='submit' style={{ display: 'none' }}></input>
                                                <Btn
                                                    text="Enviar"
                                                    colors={{ primary: '#E84AB6', secondary: '#FF0C7F' }}
                                                    width='300px'
                                                    height="45px"
                                                />
                                            </label>
                                        </div>
                                    </form>
                                )}

                        </>
                    )

            }


            {error && (<span style={{ color: 'red', margin: 0 }}>Rellena todos los campos</span>)}

            < style jsx>{`
                form{
                    display:flex;
                    flex-direction:column;
                    grid-gap:20px;
                }
            `}</style>
        </>
    )
}

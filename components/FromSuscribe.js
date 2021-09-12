import Btn from "./Btn";
import { useState } from "react";
import InputGeneral from './InputGeneral'
import useInputBasic from "../hooks/useInputBasic";

import { addSuscribe } from "../request/client";

const FromSuscribe = () => {
    const [env, setenv] = useState(false);
    const inputEmail = useInputBasic("email")
    console.log({ inputEmail });
    const [email, setmail] = useState('');
    const val = inputEmail.info.error == '' && inputEmail.info.value;

    const handleSubmitFrom = (e) => {
        e.preventDefault();
        if (val) {
            console.log('se envia');
            addSuscribe({ mail: inputEmail.info.value }).then(r => {
                setenv(true);
            })
        }
    }
    return (
        <>
            <form className='container-from' onSubmit={handleSubmitFrom}>
                <InputGeneral
                    placeholder='email'
                    type='email'
                    name="email"
                    maxLength={45}
                    textLabel={inputEmail.info.error}
                    value={inputEmail.info.value}
                    handleChange={inputEmail.handleChange}
                />
                <label className="btn-submit">
                    <input type='submit' style={{ display: 'none' }} />
                    <Btn
                        text={env ? "Enviar otra vez" : 'Enviar'}
                        colors={{ primary: '#FFC16C', secondary: '#FF5972' }}
                        width='300px'
                        height="40px"
                    />
                    <span className="noselect" >
                        No spam o correo basura.
                    </span>
                </label>

            </form>
            <style jsx>{`
                .container-from{
                    display:flex;
                    grid-gap:20px;
                    flex-wrap:wrap;
                }
                .btn-submit{
                    opacity:${val ? '1' : '0.5'};
                }
                span{
                    display:block;
                    font-size:12px;
                    padding:0px 10px;
                }

            `}</style>
        </>
    )
}
export default FromSuscribe;
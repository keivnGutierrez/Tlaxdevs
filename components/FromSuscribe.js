import Btn from "./Btn";
import { useState } from "react";

const FromSuscribe = () => {
    const [env, setenv] = useState(false);
    const [email, setmail] = useState('');
    const handleChange=(e)=>{
        const {value}=e.target;
        setmail(value);
    }
    return (
        <>
            <form className='container-from' onSubmit={(e) => {
                e.preventDefault();
                if (email.length>3) {
                    setenv(true);
                }
            }}>

                <label>
                    <input
                        className="mb-5"
                        placeholder='Ingresa tu email'
                        type='email'
                        value={email}
                        onChange={handleChange}
                    />
                    <span>
                        No spam o correo basura.
                    </span>
                </label>
                <label>
                    <input type='submit' style={{ display: 'none' }} />
                    <Btn
                        text={env ? "Enviar otra vez" : 'Enviar'}
                        colors={{ primary: '#FFC16C', secondary: '#FF5972' }}
                        width='150px'
                        height="40px"
                    />
                </label>

            </form>
            <style jsx>{`
                .container-from{
                    display:flex;
                    grid-gap:20px;
                    flex-wrap:wrap;
                }
                input[type="text"],
                input[type="email"]
                {
                    background:withesmoke;
                    height:40px;
                    width:200px;
                    border-radius:10px;
                    border:solid 1px grey;
                    padding:15px;
                }
                span{
                    display:block;
                    font-size:12px;
                    padding:0px 10px;
                }
                button{
                    height:40px;
                    width:100px;
                    background: linear-gradient(40deg,, );
                    border-radius:10px;
                    border:solid 1px grey;
                    color:white;
                }

            `}</style>
        </>
    )
}
export default FromSuscribe;
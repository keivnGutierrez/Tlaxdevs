
import { useState } from "react";

const useInputBasic = (type = "text" ) => {
    const regexIsNumber = new RegExp(/^[0-9\s]*$/);
    const regexIsLetter = new RegExp(/^[a-zA-Z\s]*$/);
    const regexIsEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const [state, setstate] = useState({ value: '', error: '' })


    const handleChange = (e) => {
        const { value } = e.target;
        const tel = value.replace(/ /g, "");
        let error = '';
        if (type == 'email' && regexIsEmail.test(value) == false && value !== '') {
            console.log('email', { value });
            error = "El email esta incompleto";
        }
        if (type == 'phone' && tel.length !== 10 && value !== '') {
            console.log('phone');
            error = "El telefono es de 10 digitos";
        }
        if (type == 'text' && regexIsLetter.test(value) == false) {
            return;
        }
        if (type == 'phone' && regexIsNumber.test(value) == false) {
            return;
        }
        setstate({
            value: value,
            error: error
        })
    }
    return {
        info: state,
        handleChange
    }
}
export default useInputBasic
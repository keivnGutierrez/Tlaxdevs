import React from 'react'

export default function InputGeneral({
    type = 'text',
    name = '',
    placeholder = '',
    maxLength = 50,
    textLabel = '',
    value,
    handleChange = () => {

    }
}
) {
    return (
        <>
            <label  >
                <input
                    className="mb-5"
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    maxLength={maxLength}
                    value={value}
                    onChange={handleChange}
                />
                <span>
                    {textLabel ? textLabel : 'hello word'}
                </span>
            </label>
            <style jsx>{`
                input[type="text"],
                input[type="email"],
                input[type="tel"]
                {
                    background:withesmoke;
                    height:40px;
                    width:240px;
                    border-radius:10px;
                    border:solid 1px grey;
                    padding:15px;
                }
                span{
                    display:block;
                    font-size:12px;
                    padding:0px 10px;
                    color:${textLabel ? 'red' : 'transparent'};
                    -moz-user-select: none; 
                    -webkit-user-select: none;
                    -ms-user-select: none;
                    user-select: none; 
                }
            `}</style>
        </>

    )
}

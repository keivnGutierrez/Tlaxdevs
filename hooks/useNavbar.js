import { useState } from "react"


export const useNavbar = () => {
    const [state, setstate] = useState(false)

    const close = _ => setstate(false)
    const open = _ => setstate(true)

    return {
        status: state,
        handleClose: close,
        handleOpen: open
    }
}

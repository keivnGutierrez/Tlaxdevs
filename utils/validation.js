
export const validateIsNumber = (e, cd) => {
    const regexIsNumber = new RegExp(/^[0-9]*$/);
    const { value } = e.target;
    if (regexIsNumber.test(value) || value === ' ') cd(e);
};

export const validateIsLetter = (e, cd) => {
    const regexIsLetter = new RegExp(/^[a-zA-Z\s]*$/);
    const { value } = e.target;
    if (regexIsLetter.test(value) || value === '') cd(e);
};

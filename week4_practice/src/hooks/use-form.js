import {useState} from "react";

function useForm({initialvalue}) {
    const [values, serValues] = useState(initialValue)
    const [touched, setTouched] = useState({})
    const [errors, setErrors] = useState({})

    const handleChangeInput = (name, value) => {
        setValues( {
            ...values,
            [name]: value
        });
    }

    const handleBlur = (name) => {
        setTouched( {
            ...touched,
            [name]: true
        })
    }
    const getTextInputProps = (name) => {
        const value = values[name];
        const onChange = (event) => handleChangeInput(name, event.target.value);
        const onBlur = () => handleBlur(name);

        return {value, onChange, onBlur}
    }
    return {values, errors, touched, getTextInputProps}
    
}
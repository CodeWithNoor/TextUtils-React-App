import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (

        // This happens because all the JSX are converted into JavaScript calls
        props.Alert && <div className={`alert alert-${props.Alert.typ} alert-dismissible fade show text-white`} role="alert">
            <strong>{capitalize(props.Alert.typ)}</strong> : {props.Alert.msg}
        </div>
    )
}

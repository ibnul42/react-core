import React from "react";

function refInput({type, placeholder}, ref) {
    return(
        <input ref={ref} type={type} placeholder={placeholder} />
    )
}

 const forWardedInput = React.forwardRef(refInput);

 export default forWardedInput;
import React from 'react'

export default function Alert(prop) {
    return (
        <>
            <div className=' container' style={{height : "50px"}}>


                {prop.alert &&
                    <div>
                        <div className={`alert alert-${prop.alert.type}`} role="alert">
                            <strong>  {prop.alert.type} </strong> :  {prop.alert.msg}
                        </div>
                    </div>}
            </div>
        </>
    )
}

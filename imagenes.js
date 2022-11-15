import React from 'react'
import Mora from './img/Mora.jpg'
import Salamanquesa from './img/Salamanquesa.jpg'
import Colirroja from './img/Colirroja.jpg'
import Ciega from './img/Ciega.jpg'
import Lisaa from './img/Lisa.jpg'
import Caimanes from './img/Caiman.jpeg'
import './css/imagenes.css'

export const Tortu =() => {
return(
<>
<div  className ="imagen-tortu">
    <img src={Mora}/>
</div>
</>
)
}

export const Lagart =() => {
    return(
    <>
    <div  className ="imagen-Lagart">
        <img src={Salamanquesa}/>
    </div>
    </>
    )
    }

    export const Tijo =() => {
        return(
        <>
        <div  className ="imagen-Tijo">
            <img src={Colirroja}/>
        </div>
        </>
    )
    }

    export const Cieg =() => {
        return(
        <>
        <div  className ="imagen-Cieg">
            <img src={Ciega}/>
        </div>
        </>
    )
    }

    export const Lisa =() => {
        return(
        <>
        <div  className ="imagen-Lisa">
            <img src={Lisaa}/>
        </div>
        </>
    )
    }

    export const Caiman =() => {
        return(
        <>
        <div  className ="imagen-Caiman">
            <img src={Caimanes}/>
        </div>
        </>
    )
    }
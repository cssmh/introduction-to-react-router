import './Phone.css'
import { useEffect } from "react";
import { useState } from "react";
import Phone from "./Phone";

const Phones = () => {

    const [phones, setPhones] = useState([])

    useEffect(()=> {
        fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(res => res.json())
        .then(data => setPhones(data.data))
    },[])

    return (
        <div>
            <h2>Total Phones: {phones.length}</h2>
            <div className='phone'>
            {
                phones.map((soloArrayPhone, idx) => <Phone key={idx} getPhones={soloArrayPhone}></Phone>)
            }
            </div>
        </div>
    );
};

export default Phones;
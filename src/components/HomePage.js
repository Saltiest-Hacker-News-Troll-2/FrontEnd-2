import React, {useState, useEffect} from "react";
import HomepageCard from "./HomePageCard";
import Favorite from "./Favorite";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function HomePage(props) {
    const [data, setData] = useState([]);

    useEffect (() => {
        axiosWithAuth()
            .get('/api/comments?limit=5&offset=2')
            .then(res=>{
               setData(res.data)
               console.log(res.data)
            })
            .catch(err=>console.log(err))
    }, []);

    const handleClick = e => {
        props.history.push(`/HomePage/${props.match.params.id}`)
    }

    console.log(data)

    return (
        <div className="HomepageCard">
            <Favorite/>
            <button onClick={handleClick}>Edit Password</button>
            {data.map(dat=>(
                <HomepageCard key={dat.id} data={dat} />
            ))}
        </div>
    );
}

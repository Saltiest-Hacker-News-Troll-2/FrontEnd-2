import React, {useState, useEffect} from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';  
import HomepageCard from "./HomePageCard";

/*
TODO: Finish the homepage based on back end authentication
*/
export default function HomePage() {
    const [datas, setDatas] = useState([]);

    useEffect (() => {
        
    }, []);

    return (
        <div className="HomepageCard">
            {datas.map(data => {
                return (
                    <HomepageCard />
                )
            })}
        </div>
    );
}

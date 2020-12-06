import React, {useState,useEffect} from 'react';
import axios from "axios";
import '../css/Home.css'
import {Link} from 'react-router-dom'



const Home = () => {
    let [data,setData] = useState([])

    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships/').then((response) => {
            console.log(response.data.results)
            setData(response.data.results)
        })
    }, [])

    const getId = (index) => {
        console.log(data[index].url)
        let url = data[index].url
        let id = url.replace(/[^0-9]/g, '');
        return id;
    }

    const display = () => {
        return data.map((data,index) => {
            return (
                <div key={index}>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title"><Link to={'/starship/?id='+(getId(index))} values={data}>{data.name}</Link></span>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }
    


    return (
    <div>
        <h1>Starwars Starships</h1>
        <ul>
            {display()}
        </ul>
    </div>
    )
}

export default Home;
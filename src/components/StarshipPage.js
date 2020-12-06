import axios from "axios";
import React, {useState,useEffect} from 'react';

const StarshipPage = (props) => {
    let [data,setData] = useState([])

    let id = props.location.search.replace(/[^0-9]/g, '');
    console.log('https://swapi.dev/api/starships/'+id+"/")

    useEffect(()=> {
        axios.get('https://swapi.dev/api/starships/'+id+"/").then((response) => {
            console.log(response.data)
            setData(response.data)
        })
    },[])

    const display = () => {
        return(
            <div>
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                            <span className="card-title">{data.name}</span>
                            <h5>Model:{data.model}</h5>
                            </div>
                            <div className="card-action">
                            <a href="/">Return</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div>
            {display()}
        </div>
    )
}

export default StarshipPage;
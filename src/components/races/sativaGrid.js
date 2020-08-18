import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './sativaCard'

function SativaGrid() {
    const [sativa, setSativa] = useState([])


    useEffect(() => {
        Axios
        .get('https://strainapi.evanbusse.com/muq1pA2/strains/search/race/sativa'
        )
        
        // .then(res => res.json())
        .then(res => {
            console.log(res.data, "Success")
            setSativa(res.data)
           

        })
        .catch(error =>{
            console.log(error, "error")
        })
    }, [])


    return(
        <div>
            <div class="flex justify-center font-mono border-b-2 border-black mt-4 ml-4 mr-4">
                <h2>Sativas</h2>
            </div>

            <div >
                <div className="wrapper">               
                    {sativa.map(sativas => (
                    <Card
                        key={sativas.name} 
                        name={sativas.name}
                    />
                    ))}
                

                </div>
            </div>
        
        </div>
    );
}

export default SativaGrid;
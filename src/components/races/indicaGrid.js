import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './indicaCard.js'

function IndicaGrid() {
    const [indica, setIndica] = useState([])


    useEffect(() => {
        Axios
        .get('https://strainapi.evanbusse.com/muq1pA2/strains/search/race/indica'
        )
        
        // .then(res => res.json())
        .then(res => {
            console.log(res.data, "Success")
            setIndica(res.data)
           

        })
        .catch(error =>{
            console.log(error, "error")
        })
    }, [])


    return(
        <div>
            <div class="flex justify-center font-mono border-b-2 border-black ml-4 mr-4">
                <h2>Indicas</h2>
            </div>

            <div >
                <div className="wrapper">               
                    {indica.map(indicas => (
                    <Card
                        key={indicas.name} 
                        name={indicas.name}
                    />
                    ))}
                

                </div>
            </div>
        
        </div>
    );
}

export default IndicaGrid;
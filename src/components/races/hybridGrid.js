import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Card from './hybridCard'

function HybridGrid() {
    const [hybrid, setHybrid] = useState([])


    useEffect(() => {
        Axios
        .get('https://strainapi.evanbusse.com/muq1pA2/strains/search/race/hybrid'
        )
        
        // .then(res => res.json())
        .then(res => {
            console.log(res.data, "Success")
            setHybrid(res.data)
           

        })
        .catch(error =>{
            console.log(error, "error")
        })
    }, [])


    return(
        <div>
            <div class="flex justify-center font-mono border-b-2 border-black ml-4 mr-4">
                <h2>Hybrids</h2>
            </div>

            <div >
                <div className="wrapper">               
                    {hybrid.map(hybrids => (
                    <Card
                        key={hybrids.name} 
                        name={hybrids.name}
                    />
                    ))}
                

                </div>
            </div>
        
        </div>
    );
}

export default HybridGrid;
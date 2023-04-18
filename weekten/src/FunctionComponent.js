import { useEffect, useState } from 'react';


function FunctionComponent() {
    const [coffees, setCoffees] = useState([]);

    useEffect(() => {
        fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => { return response.json() })
        .then((json) => { setCoffees(json) });
    }, [])


        return (
            <div>
                {
                    coffees.map((coffees) => {
                        return (
                            <div>
                                <h3>{coffees.title}</h3>
                                <p>{coffees.description}</p>
                                <img src={coffees.image} height={100} width={100} />
                            </div>
                        )
                    })
                }
            </div>
        );
     
}
export default FunctionComponent;
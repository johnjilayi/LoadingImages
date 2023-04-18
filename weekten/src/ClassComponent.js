import React from "react";


class ClassComponent extends React.Component {
    state = {
        coffees: []
    };
    
    // async componentDidMount () {
    //     const response = await fetch("")
    //     const json = await fetch ()
    //     this.setState({ coffees : json})
    //     }

    componentDidMount() {

        fetch("https://api.sampleapis.com/coffee/hot")
        .then((response) => { return response.json() })
        .then((json) => { this.setState({ coffees: json }) });
     }




     render() {
        return (
            <div>
                {
                    this.state.coffees.map((coffee) => {
                        return (
                            <div>
                                <h3>{coffee.title}</h3>
                                <p>{coffee.description}</p>
                                <img src={coffee.image} height={100} width={100} />
                            </div>
                        )
                    })
                }
            </div>
        );
     }
}

export default ClassComponent;
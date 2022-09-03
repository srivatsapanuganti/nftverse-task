import React from "react";
import './card.css';

const Card = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {

        fetch('https://api.facthunt.in/fostergem/v1/post/list/public').then(
            response => response.json()
        ).then(
            json => {
                setData(json.content)
            }
        )

    }, [])

    return (
        <div>

           

                {data.length > 0 ?
                    <div>
                        <div className="container">
                            {data.map((item) => (

                                <div className="card">
                                    <div className="card-header">
                                        <img src={item.coverImageUrl} alt="rover" />
                                    </div>
                                    <div className="card-body">
                                        <h3> {item.title} </h3>
                                       
                                            {/*<p>{item.summary}</p>*/}
                                       

                                        <div className="user">
                                            <img src={item.user.profilePic} alt="user" />
                                            <div className="user-info">
                                                <h5>{item.user.fname}</h5>
                                                <small>{item.date}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                            ))}
                        </div>
                    </div>
                    :
                    <div>

                    </div>

                }
            




        </div>
    )

}

export default Card;

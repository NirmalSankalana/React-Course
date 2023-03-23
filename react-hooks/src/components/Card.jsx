import React from 'react'


export const Card = (props) => {
    return (
        <div className="card">
            <div className="container">
                <h4>
                    <b>{props.name}</b>
                </h4>
                <p>{props.phone}</p>
                <p>{props.id}</p>
            </div>
        </div>
    )
}

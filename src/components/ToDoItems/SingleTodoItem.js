import React, {useState} from 'react'

export default function SingleTodoItem(props) {
    return (
        <div className="singleTodoItem col-md-5 m-4">
            <h3>{props.todo.Action}</h3>
            {props.todo.Done !== null ?
                <p>{props.todo.Description}</p> :
                <p>No Description Provided</p>
            }
            <a href={props.resource.Url} target="_blank" rel="noreferrer"
            className="btn btn-info">
                Visit {props.resource.LinkText}
            </a>
        </div>
    )
}

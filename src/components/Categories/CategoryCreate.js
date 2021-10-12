import React, {useRef, useState} from 'react'
import { Form, Card } from 'react-bootstrap'

export default function CategoryCreate(props) {

    const nameRef = useRef();
    const descRef = useRef();
    const [valSummary, setValSummary] = useState('');
    const [nameVal, setNameVal ] = useState('');
    const [descVal, setDescVal ] = useState('');

    const validate = (category) => {
        let name = category.CategoryName;
        let desc = category.CategoryDescription;

        name.length > 25 ? setNameVal('** Max 25 Characters') : setNameVal
        ('')
        desc.length > 50 ? setDescVal('** Max 50 Characters') : setDescVal
        ('')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const category = {
            CategoryName: nameRef.current.value,
            CategoryDescription: descRef.current.value
        };

        validate(category);
        if(nameVal === '' && descVal === ''){
            props.addCategory(category);
        }
        else{
            setValSummary('Correct the inputs below to submit the category')
        }
    }
    return (
        <article className="createCategory m-2 align-items-center">
            <Card bg="light">
                <Form onSubmit={handleSubmit} className="p-4 bg-dark text-white">
                    <h1 className="m-2">Create New Category</h1>
                    <br />
                    {valSummary !== '' &&
                        <div className="alert alert-danger">
                            <strong>{valSummary}</strong>
                        </div>
                    }

                    <Form.Group id="name" className="text-left">
                        <label>Name</label>
                        <Form.Control type="text" ref={nameRef} required />
                        <div className="text-danger">{nameVal}</div>
                    </Form.Group>
                    <Form.Group id="description" className="text-left">
                        <label>Description</label>
                        <Form.Control type="text" ref={descRef} required />
                        <div className="text-danger">{descVal}</div>
                    </Form.Group>
                    <Form.Group id="button" className="text-center">
                        <button type="submit" className="btn btn-info">Create</button>
                    </Form.Group>
                </Form>
            </Card>
        </article> 
    )
}

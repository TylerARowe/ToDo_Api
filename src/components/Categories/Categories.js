import React, {useState, useEffect} from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import sampleCategories from '../../Utilities/sampleCategories'
import './Categories.css'
import axios from 'axios'
import {useAuth} from '../../contexts/AuthContext';
import CategoryCreate from './CategoryCreate';
import SingleCategory from './SingleCategory';

export default function Categories() {
    const [categories, setCategories] = useState(sampleCategories);
    const { currentUser } = useAuth();
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [effectTrigger, setEffectTrigger] = useState(false);

    //----------------- READ ---------------------//
    const getCategories = () => {
        axios.get('http://localhost:64398/api/Categories').then(response => {
            setCategories(response.data)
        });
    };

    //------------------ CREATE ----------------//

    const addCategory = (category) => {
        axios.post('http://localhost:64398/api/Categories' , category).then(response => {
            //Create the temp object
            let updatedCategories = categories;
            //Add the new cat
            updatedCategories.push(response.data);
            //Set new state data 
            setCategories(updatedCategories);
            //update the component
            setEffectTrigger(!effectTrigger);
            //Toggle the form closed
            setShowCreateForm(false);
  
        })
    }
  


    useEffect(() => {
        getCategories();
      }, [effectTrigger]);
      return (
        <section className="categories">
          <Jumbotron className="bg-info m-0">
            <h1 className="text-center">Categories Dashboard</h1>
          </Jumbotron>
          <div className="bg-dark mb-3 p-2">
            {currentUser.email === "tyl3rr0we95@gmail.com" && showCreateForm ? (
              <>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="btn btn-warning">Cancel</button>
                <CategoryCreate categories={categories} addCategory={addCategory} />
              </>
            ) : (
              <button
                onClick={() => setShowCreateForm(true)}
                className="btn btn-info"
              >
                CreateNewCategory
              </button>
            )}
          </div>
          <Container>
            <table className="table table-striped table-light rounded mt-3 mb-3">
              <thead className="bg-info text-uppercase">
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <SingleCategory key={cat.CategoryId} category={cat} />
                ))}
              </tbody>
            </table>
          </Container>
        </section>
      );
    }
    

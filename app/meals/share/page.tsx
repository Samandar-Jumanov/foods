"use client"

import React , { useEffect} from 'react';
import ImagePicker from '../../../components/image-picker';
import { shareMeal } from "../../../lib/actions";
import { useFormState  } from "react-dom"

const ShareMeals = () => {
  const [ state , action ] = useFormState(shareMeal , { message : null })


  useEffect(() =>{
      if(state.message === "succes"){
               state.message = null
      }
    } , [state]);


  return ( 
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <h4 style={{ marginBottom: '1rem' }}> {
        
        state.message ? state.message : "Share your meals with the world!"
      }
      
      </h4>
      <form 
        action={action} 
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: 'calc(25ch + 2rem)',
          gap: '1rem',
        }}
        noValidate
        autoComplete="off"
      >
        <input
          required
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          style={{ padding: '10px' }}
        />
        <textarea
          id="summary"
          name="summary"
          placeholder="Summary"
          rows={4}
          style={{ padding: '10px' }}
        />
        <input
          required
          type="text"
          id="creator"
          name="creator"
          placeholder="Creator"
          style={{ padding: '10px' }}
        />
        <ImagePicker name="mealImage" labelVal="Upload Image" />
        <button type="submit" style={{ padding: '10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>
            Share meal
        </button>
      </form>
    </div>
  );
};

export default ShareMeals;

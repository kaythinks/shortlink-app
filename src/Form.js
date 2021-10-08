import { useState, React } from 'react';
import './App.css';

function Form() {
    const [values, setValues] = useState({ 
        original_link : ''
      });
      const saveFormData = async () => {
          console.log(JSON.stringify(values))
        const responseData = fetch('http://localhost:8888/api/encode', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        }).then(response =>{
            if (response.status !== 200) {
                throw new Error(`Request failed: ${response.status}`); 
            }
            return response.json()
        } )
        .then(data => {
            
            alert('Data successfully sent!');
        }).catch(e => {
            alert('Error processing request');
        });

        return responseData;
      }
      const onSubmit = async (event) => {
        event.preventDefault(); 
        try {
          await saveFormData();
          setValues({
            original_link: ''
          });
        } catch (e) {
          alert(`Error! ${e.message}`);
        }
      }

      const set = name => {
        return ({ target: { value } }) => {
          setValues(oldValues => ({...oldValues, [name]: value }));
        }
      };

      return (
        <form onSubmit={onSubmit} >
          <input  type="url" required  style={{padding: "10px",width: "500px" }}  value={values.original_link} onChange={set('original_link')} />
          <button style={{padding: "10px",margin : "10px" }} type="submit">Submit</button>
        </form>
      );
    
}

export default Form;
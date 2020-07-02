import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './MemeForm.css';


const MemeForm = () => {
  const INIT_FORM_STATE = {
    topText: "",
    botText: "",
    imgUrl: "",
    name: "",
  }
  const [formData, setFormData] = useState(INIT_FORM_STATE);
  const dispatch = useDispatch();
  const memes = useSelector(store => store.memes);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(f => ({ ...f, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!memes.find(m => m.name === formData.name)) {
      // add meme to store
      dispatch({ type: 'ADD', payload: formData });
      setFormData(INIT_FORM_STATE);
    } else {
      alert(`${formData.name} already exists; please give your unique creation a unique name!`);
      setFormData(f => ({ ...f, name: "" }));
    }
  }

  return (
    <form className="MemeForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="top-input">Top Text</label>
        <input id="top-input" name="topText" type="text" value={formData.topText} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="bot-input">Bottom Text</label>
        <input id="bot-input" name="botText" type="text" value={formData.botText} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="img-input">Image URL</label>
        <input id="img-input" name="imgUrl" type="url" value={formData.imgUrl} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="name-input">Creation Name</label>
        <input id="name-input" name="name" type="text" value={formData.name} onChange={handleChange} />
      </div>
      <button type="submit" disabled={Object.values(formData).some(field => field.length === 0)}>Make!</button>
    </form>
  )
}


export default MemeForm;
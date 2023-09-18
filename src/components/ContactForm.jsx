import { useState } from 'react'
import { validateEmail } from '../utils/helpers';

export default function Form() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name: </label>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <label htmlFor='email'>Email: </label>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
        />
        <label htmlFor="message">Message:</label>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          rows="5"
        >
            Write me a message!
        </textarea>
        <button type="submit">Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
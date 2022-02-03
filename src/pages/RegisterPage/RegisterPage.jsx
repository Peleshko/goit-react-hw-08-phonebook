import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './RegisterPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.container}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          label="Username"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <TextField
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={s.button}
        >
          Register
        </Button>
      </form>
    </div>
  );
}

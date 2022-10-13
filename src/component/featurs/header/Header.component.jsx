import './header.css'

import * as React from 'react';
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function Header() {
  return (
    <div className="header">
      <h1>Header</h1>
      <Stack spacing={2}>
      <Link className="text-link" to="/"><Button variant="contained" disableElevation>
      Home
    </Button></Link>

      <Link className="text-link" to="Sing In"><Button variant="contained" disableElevation>
      Sing In
    </Button></Link>
    </Stack>
    </div>
  );
};
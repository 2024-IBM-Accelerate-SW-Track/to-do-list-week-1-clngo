import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <TextField
        data-testid="new-item-textfield" // Add this line
        label="New Item"
        variant="outlined"
      />
      <Button
        data-testid="new-item-button" // Add this line
        variant="contained"
        color="primary"
      >
        Add Item
      </Button>
    </div>
  );
}

export default App;

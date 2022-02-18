import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const Search = () => {
    return (
        <Box className="input__search-content">
              <TextField id="standard-basic" label="Buscar" variant="standard" className="input-search"/>
        </Box>
    )
}

export default Search

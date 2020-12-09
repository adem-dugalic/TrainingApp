import React, {useState} from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { checkServerIdentity } from 'tls';


 function Forms() {
  const[checked, setChecked] = useState(false);
   return(
     <div>
       <FormControlLabel
       control={<Checkbox
          checked={checked}
          onChange={(e)=>setChecked(e.target.checked)}
          inputProps ={{
            'aria-label':'secondary checkbox'
          }}
        />}
        label = "CHeck meee!"
        />
       
     </div>
   )

 }


export default Forms;
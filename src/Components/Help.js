import React from 'react'; 
import Alert from 'react-bootstrap/Alert'; 

const Help = () => {
   return (
      <Alert id="help-box" variant="primary">
         <p>
            If you or someone you know is struggling or in distress, please call the  
             <br></br>
            <Alert.Link href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</Alert.Link>. 
            <br></br>
            The Lifeline provides 24/7, free, and confidential support. 
            <br></br>
            <strong> 📞 1-800-273-8255  </strong>  
         </p>
      </Alert>
   )
} 

export default Help; 
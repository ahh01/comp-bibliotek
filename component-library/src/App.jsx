import React from "react";
import Button from "./comp/Button";
import Alert from "./comp/Alert";
import Badge from "./comp/Badge";
import Card from "./comp/Card";
import './App.css'
import './index.css'



const App = () => {
  return(
    <div>
      <h1>Comp lib</h1>
      <Button size="md" color="blue"disabled={false}> 
        Click Me
      </Button>

      <h2> Alerts</h2>
      <Alert color="yellow" size="sm" icon="star">
        This is an information alert.
      </Alert>

      <h2>Badges</h2>
      <Badge color="yellow" size="sm" icon="star" >
        5 stars
      </Badge>


      <h2>Card</h2>
      <Card href="" imgAlt="" imgSrc="" >
        <p>This is a sample card.</p>
      </Card>
    
    </div>

  );
};

export default App;
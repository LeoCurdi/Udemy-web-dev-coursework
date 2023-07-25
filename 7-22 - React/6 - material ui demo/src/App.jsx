import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outline</Button>
      <Button color="success" size="small" variant="contained">Contained</Button>
      <IconButton>
        <AlarmIcon/>
      </IconButton>
      <Navbar />
      <FormDemo />
      <RatingDemo/>
    </div>
  );
}

export default App;

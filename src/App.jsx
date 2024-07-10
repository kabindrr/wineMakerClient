import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <>
      helloooooo
      <div className="d-flex justify-content-center align-items-center gap-2">
        <Button className="btn btn-danger">Submit me</Button>
        <Button className="btn btn-warning">Submit me</Button>
        <Button>Submit me</Button>
      </div>
    </>
  );
};

export default App;

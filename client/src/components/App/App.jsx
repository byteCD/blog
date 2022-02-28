import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/actions/authActions";
import AppRouter from "../AppRouter/AppRouter";
import Header from "../Header/Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <div className="App">
      <Header />
      <Container className="mt-5 mb-5">
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;

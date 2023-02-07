import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card
        title={"Card title"}
        text={" Some quick example text to build on the card title and make up the\n" 
        + "bulk of the card's content."}
      >
        <img
          alt="картинка"
          src="https://proprikol.ru/wp-content/uploads/2020/08/kartinki-informatika-45.jpg"
          className="card-img-top"
        />
      </Card>
      <Card
        title={"Special title treatment"}
        text={"With supporting text below as a natural lead-in to additional content."}
      />
    </div>
  );
}

export default App;
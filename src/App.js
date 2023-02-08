import "./App.css";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      <Cards
        title={"Card title"}
        text={" Some quick example text to build on the card title and make up the\n" 
        + "bulk of the card's content."}
      >
        <img
          alt="картинка"
          src="https://f.vividscreen.info/soft/5ad32765513a32e17841db62ee26f59e/Home-Office-640x480.jpg"
          className="card-img-top"
        />
      </Cards>
      <Cards
        title={"Special title treatment"}
        text={"With supporting text below as a natural lead-in to additional content."}
      />
    </div>
  );
}

export default App;
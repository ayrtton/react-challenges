import HelloWorld from "./components/HelloWorld";
import Name from "./components/Name";
import Product from "./components/Product";

function App() {
    return (
        <>
            <HelloWorld />
            <Name name="Name" />
            <Product title="Keyboard" price={30.5} onSale={false} />
        </>
    )
}

export default App;

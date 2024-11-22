import "./assets/css/main.css"
import Counter from "./components/Counter";
import HelloWorld from "./components/HelloWorld";
import Name from "./components/Name";
import Product from "./components/Product";
import ProductClass from "./components/ProductClass";
import Stock from "./components/Stock";

function App() {
    let products = [
        {
            id: 0, title: "Keyboard", price: 30.5, onSale: false
        },
        {
            id: 1, title: "Mouse", price: 15, onSale: true
        },
        {
            id: 2, title: "Headphone", price: 25, onSale: false
        }
    ]

    return (
        <div className="list">
            <h1>Components and Props</h1>
            <div className="list__exercise">
                <h2>1 - Create a Component</h2>
                <HelloWorld />
            </div>
            <div className="list__exercise">
                <h2>2 - Using Props</h2>
                <Name name="Name" />
            </div>
            <div className="list__exercise">
                <h2>3 - Multiple Props</h2>
                <Product title="Keyboard" price={30.5} onSale={false} />
            </div>
            <div className="list__exercise">
                <h2>4 - Components Composition</h2>
                <Stock products={products}/>
            </div>
            <div className="list__exercise">
                <h2>5 - Class Component</h2>
                <ProductClass title="Keyboard" price={20} onSale={true} />
            </div>
            <div className="list__exercise">
                <h2>6 - Component with State</h2>
                <Counter />
            </div>
        </div>
    )
}

export default App;

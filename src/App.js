
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card'
import data from './data'
function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
  })   
  return (
    <>
      <Navbar/>
      <Hero/>
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}

export default App;

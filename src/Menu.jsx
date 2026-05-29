export default function Menu() {
  const coffees = [
    {name: 'Espresso', price: '2.50$'},
    {name: 'Americano', price: '3.00$'},
    {name: 'Cappuccino', price: '3.50$'},
    {name: 'Latte', price: '4.00$'}
  ]
  
  return (
    <div style={{backgroundColor: '#3E2723', color: '#FFF8E1', minHeight: '90vh', padding: '60px', textAlign: 'center'}}>
      <h1 style={{fontSize: '50px', marginBottom: '40px'}}>Our Menu</h1>
      {coffees.map(coffee => (
        <div key={coffee.name} style={{margin: '30px 0', fontSize: '24px'}}>
          <span>{coffee.name}</span> - <span style={{color: '#D4A373'}}>{coffee.price}</span>
        </div>
      ))}
    </div>
  )
}
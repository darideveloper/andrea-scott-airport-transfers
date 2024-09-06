export async function getTransports() {

  // Format data
  const data = [
    {
      "id": "Arriving",
      "text": "Round Trip - Transfer",
      "price": 400,
      "initialActive": true
    },
    {
      "id": "Departing",
      "text": "Round Trip - Transfer",
      "price": 400,
      "initialActive": true
    },
    {
      "id": "Arriving,Departing",
      "text": "Round Trip - Transfer",
      "price": 400,
      "initialActive": true
    }
  ]
  return data
}
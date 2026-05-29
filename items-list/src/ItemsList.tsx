type Item = {
    id: number,
    name: string
}

const items: Item[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Orange" },
  { id: 4, name: "Mango" },
  { id: 5, name: "Grapes" },
];

export default function ItemsList(){
    return (
        <ul>
            {items.map(el => 
                <li>{el.name}</li>
            )}
        </ul>
    )
}
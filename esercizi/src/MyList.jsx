
// eslint-disable-next-line react/prop-types
export function MyList({ items }) {
  return (
    <ul>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}


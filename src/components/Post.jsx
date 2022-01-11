export function Post(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={() => props.cb(props.id)}>Delete {props.id}</button>
    </div>
  );
}

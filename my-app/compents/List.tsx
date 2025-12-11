type ListParams = {
  description: string;
}

function List(props: ListParams) {
  return <div>{props.description}</div>
}

export default List;
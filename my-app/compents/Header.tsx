type HeaderParams = {
  text: string;
  textSub?: string;
}

function Header({text, textSub}: HeaderParams) {
  return (
    <>
    <h1>{text}</h1>
    <h1>{textSub}</h1>
    </>
  )
}

export default Header;
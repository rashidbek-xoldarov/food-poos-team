import "./header.scss";


export const Header = () => {
    return <div className="home_header">
    <div>
      <h2 className="home_title">Jaegar Resto</h2>
      <p>{new Date().toDateString()}</p>
    </div>
    <form className="home_form">
    <input className="home_input" type="search" placeholder="Search for food, coffe, etc.."/>
    </form>
  </div>;
}
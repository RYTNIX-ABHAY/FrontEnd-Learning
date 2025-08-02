function Header(){
    return(
    <div className="head" id="one">
      <img className="image" src="https://cdn.iconscout.com/icon/free/png-512/free-myntra-logo-icon-download-in-svg-png-gif-file-formats--shopping-brand-online-application-app-mobile-indian-companies-pack-logos-icons-2249158.png?f=webp&w=512"/>
      <div className="sea">
        <button  className="id">Mens</button>
        <button className="id">Womens</button>
        <button className="id">Kids</button>
        <button className="id">Home and Living</button>
        <button className="id">Beauty</button>
        <button className="id">Studio</button>
      </div>
      <input className="search" placeholder="search item"></input>
      <div className="pro">
        <button className="id">Profile</button>
        <button className="id">Wishlist</button>
        <button className="id">Bag</button>
      </div>
    </div>
    );
  }
export default Header;
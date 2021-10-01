function Footer() {
    return(
        <div className="ui vertical footer" id="footer">
          <div className="ui center aligned container">
            <div className="ui stackable divided grid">
              <div className="three wide column">
                <h4 className="ui  header">Resources Used</h4>
                <div className="ui  link list">
                  <a href="https://www.w3schools.com/" className="item">W3 Schools</a>
                  <a href="https://fomantic-ui.com" className="item">Fomantic</a>
                  <a href="https://getbootstrap.com" className="item">BootStrap</a>
                  <a href="https://stackoverflow.com" className="item">StackOverflow</a>
                </div>
              </div>
              <div className="three wide column">
                <h4 className="ui  header">Projects</h4>
                <div className="ui  link list">
                  <a href="../../PokemonAPI/pokemon.html" className="item">Pokedex API Call</a>
                  <a href="../../Great Race - JavaScript/race.html" className="item">The Great Race</a>
                  <a href="../../EarthFireWater/main.php" className="item">Earth Fire Water</a>
                  <a href="../../coolCalculator/index.html" className="item">Cool Calculator</a>
                  <a href="../../bmi_bmr_stats/index.html" className="item">BMI/BMR Calculator</a>
                  <a href="../../brewery_Fetch/index.html" className="item">Brewery Listings</a>
                  </div>
              </div>
              <div className="three wide column">
                <h4 className="ui  header">Projects Extended</h4>
                <div className="ui  link list">
                  <a href="../../Vue-ShoppingCart/page.html" className="item">Vue Shopping Cart</a>
                  <a href="../../BeastWars Js/home.html" className="item">Beast Wars</a>
                  <a href="../../TMNT_CharSelect/index.html" className="item">TMNT Select</a>
                  <a href="../../XML Project/index.html" className="item">Final Fantasy XML</a>
                  <a href="../../Final Fantasy Search/index.html" className="item">Final Fantasy Search</a>
                </div>
              </div>
              <div className="seven wide column">
                <h4 className="ui  header">Quick Contact</h4>
                <div className="ui card grey container" id="contact">
    <div className="content">
      <div className="center aligned header">Michael A. Wilson</div>
      <div className="center aligned description">
        <p>Email: michaelwilsona2019@gmail.com</p>
      </div>
    </div>
    <div className="extra content">
      <div className="center aligned author">
        <a href="https://github.com/outofcontrolmike/MAWProjects"><img className="ui avatar image massive" src="img/GitHub-Mark.png"/> </a>
        <a href="https://www.linkedin.com/in/michael-wilson-6a2a5b18a/"><img className="ui avatar image massive" src="img/linkedin.png"/> </a>
  
      </div>
    </div>
  </div>
  </div>
            </div>
            <div className="ui  section divider"></div>
            <div className="ui horizontal  small divided link list">
              <p className="item">&#169;MAW Project October 2020</p>
            </div>
          </div>
        </div>
    )
}

export default Footer;
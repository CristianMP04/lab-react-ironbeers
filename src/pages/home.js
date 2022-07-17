import { Link } from 'react-router-dom';

import beersImg from "./../assets/beers.png";
import randomBeerImg from "./../assets/randomBeer.png";
import newBeerImg from "./../assets/newBeer.png";

function Home() {
    return(
        <div>
            <Link to="/beers">
                <img src={beersImg} alt="beers" />
                <h2>All Beers</h2>
                <p>Mauris finibus placerat interdum. In et bibendum tellus, sit amet ultricies mi. Nam sit amet rhoncus eros. Pellentesque molestie, ante nec pharetra cursus, ligula turpis pretium metus, sagittis tincidunt purus risus molestie est. </p>
            </Link>
            <Link to="/random-beer">
                <img src={randomBeerImg} alt="Randombeers" />
                <h2>Random Beers</h2>
                <p>Pellentesque dictum turpis a neque scelerisque, non interdum neque malesuada. Nunc elementum, nunc eu sollicitudin viverra, nulla odio posuere purus, vitae suscipit erat neque et diam.</p>
            </Link>
            <Link to="/new-beer">
                <img src={newBeerImg} alt="Newbeers" />
                <h2>New Beers</h2>
                <p>Nam facilisis fringilla gravida. Donec fringilla orci accumsan dapibus tristique. Etiam venenatis maximus quam. Quisque vitae sem blandit orci venenatis dapibus.</p>
            </Link>
        </div>
    );
}

export default Home;
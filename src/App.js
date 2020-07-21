import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useParams,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/launch">Launch</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch" element={<Launch />}>
            <Route path="/" element={<LaunchIndex />} />
            <Route path=":id" element={<LaunchShoe />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

const NotFound = () => {
  return <div>
    <h2>Error: 402</h2>
    <p>Page not Found</p>
  </div>
}

const Home = () => {
  return (
    <div>
      <h1>Welcome Home</h1>
    </div>
  );
};

const Launch = () => {
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />
    </div>
  );
};

const LaunchIndex = () => {
  return (
    <ul>
      {Object.entries(shoes).map(([id, { name, img }]) => (
        <li key={id}>
          <Link to={`/launch/${id}`}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const LaunchShoe = () => {
  const { id } = useParams();
  const shoe = shoes[id]

  if (!shoe) {
    return <div>Shoe Not Found</div>
  }

  const { name, img } = shoe

  return <div>
    <h2>{name}</h2>
    <img src={img} alt={name}/>
  </div>;
};

const shoes = {
  "air-jordan-3-valor-blue": {
    name: "VALOUR BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
  },
};

export default App;

import {
  BrowserRouter as Router,
  Link, Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import './App.css';

// const tummyAche = [
//   {
//     category: 'Tummy Ache',
//     id: 'tummy',
//     description: 'tummy ache :(',

//   }
// ]

function TummyAche() {
  // custom hook we get from react router dom for nested routing
  const { url, path } = useRouteMatch();
  console.log('url in TummyAche', url); // use url for nested LINKS
  console.log('path in TummyAche', path); // use path for nested ROUTES

  return (
    <div>
      <h1>Have you pooped today?</h1>
      <ul>
        <li>
          <Link to="/tummy-ache/no">No</Link>
        </li>
        <li>
          <Link to="/tummy-ache/yes">Yes</Link>
        </li>
      </ul>
      
      <hr />

      {/* url we want to match: /category/:categoryId */}
      <Route path="/tummy-ache/no">
        <TryPooping />
      </Route>
      <Route path="/tummy-ache/yes">
        <SeeDoctor />
      </Route>
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default function App() {
  return (
    <Router>
      <div style={{ width: 1000, margin: '0 auto' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tummy-ache">Tummy Ache</Link>
          </li>
        </ul>
        <hr />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tummy-ache">
          <TummyAche />
        </Route>
      </div>
    </Router>
  );
}

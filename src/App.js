import './App.css';
import Banner from './Components/Banner';
import Nav from './Components/Nav';
import Movierow from './Components/Movierow';
import requests from './requests';


function App() {
  return (
    <div>
    <Nav/>

    <Banner fetchUrl={requests.fetchNetflixOriginals}/>

    <Movierow isPresent={true} title ="Trending" fetchUrl={requests.fetchTrending}></Movierow>

     <Movierow title ="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}></Movierow>

     <Movierow title ="Top Rated" fetchUrl={requests.fetchTopRated}></Movierow>

     <Movierow title ="Action Movies" fetchUrl={requests.fetchActionMovies}></Movierow>

     <Movierow title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}></Movierow>

     <Movierow title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}></Movierow>

     <Movierow title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Movierow>

     <Movierow title ="Documentaries" fetchUrl={requests.fetchDocumentaries}></Movierow>
    </div>
  );
}

export default App;

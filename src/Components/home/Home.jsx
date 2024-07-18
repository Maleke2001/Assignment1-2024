import './Home.css';

export const Home = ({children}) => {
  return (
    <div className='home-container'>
     {children}
      <div className='header-container'>
        <h1 className='home-header'>Dronoticz</h1>
        <p className='home-paragraph'>The era of drones</p>
        <hr className='home-line' />
      </div>
    </div>
  );
};

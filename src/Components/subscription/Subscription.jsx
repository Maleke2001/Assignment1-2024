
import './Subscription.css';

export const Subscription = () => {
  return (
    <div className='container'>
      <div className='subscription-container'>
        <div className='subscrip-cont'> 
          <p className='subscription-heading'>Subscription</p>
          <p className='subscription-p'>Sign-up to our newsletter</p>
        </div>
        
        <div className='subscription-input-box'>
          <input type='email' placeholder='Your email' />
        </div>
        
        <div className='subscription-btn'>
          <button className='btn'>Submit</button>
        </div>
      </div>
    </div>
  );
};

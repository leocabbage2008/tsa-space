import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/PurchasePage.css';

export default function PurchasePage() {
  return (
    <Layout>
      <div className='row'>
        <div className='col-75'>
          <div className='container'>
            <form
              action='/'
              onSubmit={(e) => {
                alert(
                  'Thank you for your purchase! Your order will be processed shortly.'
                );
                // e.preventDefault();
              }}
            >
              <div className='row'>
                <div className='col-50'>
                  <h3>Billing Address</h3>
                  <label htmlFor='fname'>
                    <i className='fa fa-user'></i> Full Name
                  </label>
                  <input
                    type='text'
                    id='fname'
                    name='firstname'
                    placeholder='ex. John M. Doe'
                  />
                  <label htmlFor='email'>
                    <i className='fa fa-envelope'></i> Email
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='ex. john@example.com'
                  />
                  <label htmlFor='adr'>
                    <i className='fa fa-address-card-o'></i> Address
                  </label>
                  <input
                    type='text'
                    id='adr'
                    name='address'
                    placeholder='ex. 777 Water Wheel Dr'
                  />
                  <label htmlFor='city'>
                    <i className='fa fa-institution'></i> City
                  </label>
                  <input
                    type='text'
                    id='city'
                    name='city'
                    placeholder='ex. Seven Springs'
                  />

                  <div className='row'>
                    <div className='col-50'>
                      <label htmlFor='state'>State</label>
                      <input
                        type='text'
                        id='state'
                        name='state'
                        placeholder='ex. PA'
                      />
                    </div>
                    <div className='col-50'>
                      <label htmlFor='zip'>Zip</label>
                      <input
                        type='text'
                        id='zip'
                        name='zip'
                        placeholder='ex. 15622'
                      />
                    </div>
                  </div>
                </div>

                <div className='col-50'>
                  <h3>Payment</h3>
                  <label htmlFor='fname'>Accepted Cards</label>
                  <div className='icon-container'>
                    <i className='fa fa-cc-visa' style={{ color: 'navy' }}></i>
                    <i className='fa fa-cc-amex' style={{ color: 'blue' }}></i>
                    <i
                      className='fa fa-cc-mastercard'
                      style={{ color: 'red' }}
                    ></i>
                    <i
                      className='fa fa-cc-discover'
                      style={{ color: 'orange' }}
                    ></i>
                  </div>
                  <label htmlFor='cname'>Name on Card</label>
                  <input
                    type='text'
                    id='cname'
                    name='cardname'
                    placeholder='ex. John Moore Doe'
                  />
                  <label htmlFor='ccnum'>Credit card number</label>
                  <input
                    type='text'
                    id='ccnum'
                    name='cardnumber'
                    placeholder='ex. 1111-2222-3333-4444'
                  />
                  <label htmlFor='expmonth'>Exp Month</label>
                  <input
                    type='text'
                    id='expmonth'
                    name='expmonth'
                    placeholder='ex. September'
                  />
                  <div className='row'>
                    <div className='col-50'>
                      <label htmlFor='expyear'>Exp Year</label>
                      <input
                        type='text'
                        id='expyear'
                        name='expyear'
                        placeholder='ex. 2024'
                      />
                    </div>
                    <div className='col-50'>
                      <label htmlFor='cvv'>CVV</label>
                      <input
                        type='text'
                        id='cvv'
                        name='cvv'
                        placeholder=' ex. 111'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <label>
                <input
                  type='checkbox'
                  defaultChecked='checked'
                  name='sameadr'
                />{' '}
                Shipping address same as billing
              </label>
              <input
                type='submit'
                value='Continue to checkout'
                className='ex. btn'
              />
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import { Button, Card } from "react-bootstrap";
import {MDBFooter} from 'mdb-react-ui-kit';

export const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>       
  
          
        </section>
  
        <section className=''>
          <div className='container text-center text-md-start mt-5'>
            <div className='row mt-3'>
              <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <i className='fas fa-gem me-3'></i>FELEKET BİR İŞ
                </h6>
                <p>
                  En uygun fiyatlara işlerini burda yaptıramazsan hiçbir yerde yaptıramazsın.
                </p>
              </div>
  
              <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>İLETİŞİM</h6>
                <p>
                  <i className='fas fa-home me-3'></i> İSTANBUL
                </p>
                <p>
                  <i className='fas fa-envelope me-3'></i>
                  tunahankirac@gmail.com
                </p>
                <p>
                  <i className='fas fa-phone me-3'></i> 0507 172 49 92
                </p>
              </div>
            </div>
          </div>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2022 Copyright:
          <a className='text-reset fw-bold' href='https://www.linkedin.com/in/tunahan-k%C4%B1ra%C3%A7-2bb700224/'>
            TUNAHAN KIRAÇ
          </a>
        </div>
      </MDBFooter>
    )
  }
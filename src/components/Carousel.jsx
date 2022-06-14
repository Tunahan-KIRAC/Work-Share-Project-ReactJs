import React from "react";
import { Carousel } from "react-bootstrap";

export const Carousels = () => {
    return (       
      
        <Carousel style={{ width: '95rem'}}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://imgyukle.com/f/2022/06/14/VI40oR.jpg"
              alt="First slide"       
              height={610}
              width={80}
              
            />
            <Carousel.Caption>
              <h3>Boya Badana İşleri</h3>
              <p>En uygun fiyata işlerini yaptır</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://imgyukle.com/f/2022/06/14/VI46QQ.jpg"
              alt="Second slide"
              height={610}
              width={80}
            />
            <Carousel.Caption>
              <h3>Temizlik İşleri</h3>
              <p>En uygun fiyata işlerini yaptır</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://imgyukle.com/f/2022/06/14/VI49ct.jpg"
              alt="Third slide"
              height={610}
              width={80}
              
              
              
            />
            <Carousel.Caption>
              <h3>Tamirat-Tadilat İşleri</h3>
              <p>En uygun fiyata işlerini yaptır</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    
    )
}


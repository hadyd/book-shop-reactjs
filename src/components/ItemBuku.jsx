import React, { Component } from "react";
import {Button} from "react-bootstrap";
import '../App.scss';
import Buku1 from "./image/Buku 1.jpg"
import Buku2 from "./image/Buku 2.jpg"
import Buku3 from "./image/Buku 3.jpg"
import Buku4 from "./image/Buku 4.jpg"
import Buku5 from "./image/Buku 5.jpg"
import Buku6 from "./image/Buku 6.jpg"
import Buku7 from "./image/Buku 7.jpg"
import Buku8 from "./image/Buku 8.jpg"
import Buku9 from "./image/Buku 9.jpg"

export class ItemBuku extends Component {
  render() {
    return (


      <main>
        <div className="container ">
          <div className="row mb-5 pt-4">
          </div>
          <div className="row mb-4 ml-5 text-center">
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku1} className="card-img-top" alt="Ubur Ubur Lembur" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Ubur Ubur Lembur</h5>
                  <p className="card-text text-success">Rp. 68.900</p>
                  <Button variant="info">Beli</Button>{' '} 
                </div>
              </div>
            </div>

            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku2} className="card-img-top" alt="Manusia Setengah Salmon" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Manusia Setengah Salmon</h5>
                  <p className="card-text text-success">Rp. 68.000</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>

            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku3} className="card-img-top" alt="Cinta Brontosaurus" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Cinta Brontosaurus</h5>
                  <p className="card-text text-success">Rp. 67.800</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>
          </div>
         
         
          <div className="row mb-4 ml-5 text-center">
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku4} className="card-img-top" alt="Sebuah Seni Untuk Bersikap Bodo Amat" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Sebuah Seni Untuk Bersikap Bodo Amat</h5>
                  <p className="card-text text-success">Rp. 78.000</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku5} className="card-img-top" alt="Sebuah Berbicara Kepada Siapa Saja" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Seni Berbicara Kepada Siapa Saja</h5>
                  <p className="card-text text-success">Rp. 69.700</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku6} className="card-img-top" alt="Konspirasi Alam Semesta - Fiersa Besari" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Konspirasi Alam Semesta - Fiersa Besari</h5>
                  <p className="card-text text-success">Rp.69.900</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>
          </div>
    
          <div className="row mb-4 ml-5 text-center">
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku7} className="card-img-top" alt="Negeri 5 Menara" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Negeri 5 Menara</h5>
                  <p className="card-text text-success">Rp. 67.800</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>
              </div>
            </div>
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku8} className="card-img-top" alt="Laskar Pelangi" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Laskar Pelangi</h5>
                  <p className="card-text text-success">Rp. 70.800</p>
                  <Button variant="info">Beli</Button>{' '}
                  
                </div>
              </div>
            </div>
            <div className="col-md mb-4">
              <div className="card" style={{width: '18rem'}}>
                <img src={Buku9} className="card-img-top" alt="Bukan Sarjana Kertas" width="250px" height="250px" />
                <div className="card-body">
                  <h5 className="card-title">Bukan Sarjana Kertas</h5>
                  <p className="card-text text-success">Rp.68.800</p>
                  <Button variant="info">Beli</Button>{' '}
                </div>           
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
};

export default ItemBuku;
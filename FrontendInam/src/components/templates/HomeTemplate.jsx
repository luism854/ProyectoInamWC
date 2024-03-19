import styled from "styled-components";
import axios from 'axios';
import { useState, useEffect } from "react";

export function HomeTemplate() {

const [useArea,setArea] = useState([]);

const listarAreas = async()=>{
  await axios.get(`http://localhost:3000/area/listar`)
  .then(reponse=>{
    setArea(reponse.data)
  })
}

useEffect(()=>{
  listarAreas();
})

  return (
    <Container>
      <h1 className="">Administrar Areas</h1>
      <div>
        {/* <button onClick={()=>{
          listarAreas();
        }}>Areas</button> */}
        <div className="content-search">
          <div>
            <input className="isearch" type="searh" placeholder="Buscar por ID" />
            <button className="boton-sh">Buscar</button>
          </div>
        </div>
        <div className="contentTable">
          <div className="div1">
            <div className="div2">
              <div className="div3">
                <div className="div4">
                  <table className="tabla1 tbody1">
                    <caption className="cap">Lista de Areas</caption>
                    <thead className="">
                      <tr className="">
                        <th scope="col" className="stylename">ID</th>
                        <th scope="col" className="stylename">Nombre del Area</th>
                        <th scope="col" className="stylename">Estado</th>
                        <th scope="col" className="styleaction">Action</th>
                      </tr>
                    </thead>
                    <tbody className="underline">
                      {
                        useArea.map(area=>(
                          <tr className="" key={area.id_area}>
                          <td className="styleArea">{area.id_area}</td>
                          <td className="styleArea">{area.nombre_area}</td>
                          <td className="styleArea">{area.estado}</td>
                          <td className="styleacti">
                            <button type="button" className="boton1">Delete</button>
                          </td>
                        </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
  color: black;
  width: 100%;
  .contentTable{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1{
    display: flex;
    justify-content: center;
    background-color: mintcream;
    width: 100%;
    height: 60px;
  }
  .div1{
    display: flex;
    flex-direction: column;
    width: 60vw;
    border-radius: 10px;
    box-shadow: 0px 0px 14px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid cyan;
    margin: 15px;
  }
  .div2{
    margin: 3px ;
    overflow-x: auto;
  }
  .div3{
    padding: 3px;
    min-width: 100%;
    display: inline-block;
    align-items: center;
  }
  .div4{
    overflow: hidden;
  }
  .tabla1{
    min-width: 100%;
    border-collapse: separate;
    border-spacing: 0;
  }
  .cap{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4b5563;
    border-bottom: 1px solid #E5E7EB;
  }
  
  .stylename{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: left;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1rem;
    color: #4b5563;
  }
  .styleaction{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    text-align: right;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    line-height: 1rem;
    color: #4b5563;
  }
  .tbody1{
    border-bottom: 1px solid #E5E7EB;
  }
  .styleArea{
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    vertical-align: top;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: #4b5563;
  }
  .styleacti{
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    white-space: nowrap;
    text-align: right;
    font-size: 0.875rem;
    font-weight: 500;
  }
  .boton1{
    display: inline-flex;
    align-items: center;
    gap: 0.5rem; /* Ajusta el valor según sea necesario */
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: 0.375rem; /* Ajusta el valor según sea necesario */
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    color: red;
    background-color: transparent;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
  }
  .isearch{
    padding: 0.7rem 1rem;
    border: 1px solid rgb(182, 170, 170);
    border-radius: 50px;
    background-color: #f7fafc;
    font-size: 1rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .search-input:hover {
    border-color: #cbd5e0;
  }
  .search-input:focus {
    border-color: #4299e1;
    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.2);
    outline: none;
  }
  .content-search{
    display: flex;
    justify-content: center;
    margin: 25px 0 25px 0;
  }
  .boton-sh{
    padding: 10px;
    border-radius: 15px;
    cursor: pointer;
    background-color: cyan;
    border: 1px solid transparent;
  }
  .boton-sh:hover{
    background-color: rgb(25, 226, 226);
    border: 1px solid gray;
  }
`;

import Encabezado from './Encabezado';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import Table from './Table'
import ModificarUse from './ModificarUse'

function Usuarios() {
    const i18n = useTranslation();   
     
    //Con estos estados me doy cuenta que boton se presiono si el modificar o el nuevo
    const [bandera, setBanderaM] = useState({
        banderaM: false,
        banderaN:false
    });

    //Con estos estado almaceno los datos que recibo de table y los mando al formulario
    const [usuario, setUsuario] = useState({
            id:'',
            dato1:'',
            dato2:'',
            dato3:'',
            dato4:''
    });  
    
    //En este estado almaceno los datos que recibo de la api
    const [datos, guardarDatos] = useState([]);


    //En este solicito los datos a la api, y los guardo en el estado datos.
    useEffect(() => {

        const consultarApi = async () =>{
            const url = `https://pixabay.com/api/?key=15942366-50a086eca664aed7620a3d058&q=cafe&per_page=30`;            
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            guardarDatos(resultado.hits);  
         }  

        consultarApi();  

    }, [])
    
    //Con este metodo de acuerdo al boton que haya presionado si modificar o nuevo, se llama el componente formulario
    const mostrarFormulario=()=>{
        if(bandera.banderaM==true){
            return (<ModificarUse
                        
                        id={'Modificar'} 
                        idRow={usuario.id} 
                        dato1={usuario.dato1}
                        dato2={usuario.dato2}
                        dato3={usuario.dato3}
                        dato4={usuario.dato4}
                        titulo={'Modificar Usuario'} 
                        nameBtn={'Modificar Usuario'}/>
                        )
        }
        else if(bandera.banderaN===true){
            return (<ModificarUse 
                    id={'Nuevo'} 
                    idRow={''} 
                    dato1={''}
                    dato2={''}
                    dato3={''}
                    dato4={''}
                    titulo={'Nuevo Usuario'} nameBtn={'Crear Usuario'}/>)
        }
        return null
    
    }

    //Este el metodo que le envio a la table para que se ejecute en ese componente y me traiga los datos de la fila que se va a modificar
    //y junto con este actualizo la banderaMa true para que se muestre el formulario correspondiente
    const modificar = (id,dato1,dato2,dato3,dato4) => {
        setUsuario({
            ...usuario,
            id:id,
            dato1:dato1,
            dato2:dato2,
            dato3:dato3,
            dato4:dato4,
        });
        setBanderaM({
            ...bandera,
            banderaM: true,
            banderaN: false,
        });
    }
    
    //Cuando presione en nuevo cambia la banderaN a true para mostrar el formulario correspondiente
    const nuevo = () =>{
        setBanderaM({
            ...bandera,
            banderaM: false,
            banderaN: true,
        });
    }





    return (
        <div className="container-fluid" style={{backgroundColor: "white", position: "absolute", top: "70px", left: "0px"}}>
            <Encabezado
            titulo = "Panel de usuarios"
            descripcion = "A continuación, encontrará el listado de usuarios"/>
            <div className="container" style={{justifyContent: "center"}}>
                <form>
                    <div className="form-row justify-content-between">
                        <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12" style={{marginBottom: "10px"}}>
                            <div className="input-group">
                                <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupPrepend2">
                                    <svg className="bi bi-search" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 011.415 0l3.85 3.85a1 1 0 01-1.414 1.415l-3.85-3.85a1 1 0 010-1.415z" clip-rule="evenodd"/>
                                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" clip-rule="evenodd"/>
                                    </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-auto mr-auto">
                            <button className="btn btn-success" type="button">Buscar</button>
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-danger" type="button" onClick={nuevo}>
                            <svg className="bi bi-person-plus-fill" width="20px" height="20px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 100-6 3 3 0 000 6zm7.5-3a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clip-rule="evenodd"/>
                            </svg>
                                &nbsp; Nuevo
                            </button>
                        </div>
                    </div>
                    <div className="container pre-scrollable" style={{marginTop: "10px", maxHeight: "350px", marginBottom: "20px"}}>      
                            <Table t1='Id' t2='Nombre' t3='Tipo' t4='Estado' t5='Icono' t6='Acciones' datos={datos} cantidad={3} modificar={modificar}/>
                    </div>
                </form>
            </div>
            {mostrarFormulario()}
        </div>
    );
}

export default Usuarios;
import React from 'react';
//CONFIGURACION
import { BrowserRouter, Route, Switch, DefaultRoute } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import PrivateRoute from './privateRouter'

//COMPONENTES
import InformacionServicios from './container/InformacionServicios';
import MenuInicio from './container/MenuInicio';
import Login from './componentes/Login';
import PQRS from './componentes/PQRS';
import ConsultaFactura from './componentes/ConsultaFactura';
import ModuloAdministrador from './container/ModuloAdministrador';
import MADashboard from './container/MADashboard';
import MAUsers from './container/MAUsers';
import MATransformadores from './container/MATransformadores';
import MAReportes from './container/MAReportes';
import MAPagos from './container/MAPagos';
import MAConfiguracion from './container/MAConfiguracion';
import MAFacturacion from './container/MAFacturacion';
import MAPublicidad from './container/MAPublicidad';
import PageNotFound from './container/PageNotFound';

function BaseRouter() {
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={MenuInicio} />
                        <Route exact path="/InformacionServicios" component={InformacionServicios} />
                        <Route exact path="/PQRS" component={PQRS} />
                        <Route exact path="/ConsultaFactura" component={ConsultaFactura} />
                        <PrivateRoute exact path="/ModuloAdministrador" component={ModuloAdministrador} />
                        <PrivateRoute exact path="/ModuloAdministrador/Dashboard" component={MADashboard} />
                        <PrivateRoute exact path="/ModuloAdministrador/Users" component={MAUsers} />
                        <PrivateRoute exact path="/ModuloAdministrador/Transformadores" component={MATransformadores} />
                        <PrivateRoute exact path="/ModuloAdministrador/Reportes" component={MAReportes} />
                        <PrivateRoute exact path="/ModuloAdministrador/Pagos" component={MAPagos} />
                        <PrivateRoute exact path="/ModuloAdministrador/Configuracion" component={MAConfiguracion} />
                        <PrivateRoute exact path="/ModuloAdministrador/Facturacion" component={MAFacturacion} />
                        <Route exact path="/Login" component={Login} />
                        <Route exact path="/ModuloAdministrador" component={ModuloAdministrador} />
                        <Route exact path="/ModuloAdministrador/Dashboard" component={MADashboard} />
                        <Route exact path="/ModuloAdministrador/Users" component={MAUsers} />
                        <Route exact path="/ModuloAdministrador/Transformadores" component={MATransformadores} />
                        <Route exact path="/ModuloAdministrador/Reportes" component={MAReportes} />
                        <Route exact path="/ModuloAdministrador/Pagos" component={MAPagos} />
                        <Route exact path="/ModuloAdministrador/Configuracion" component={MAConfiguracion} />
                        <Route exact path="/ModuloAdministrador/Publicidad" component={MAPublicidad} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default BaseRouter;
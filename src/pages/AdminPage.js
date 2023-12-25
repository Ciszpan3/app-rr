import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminPage = () => {

    const permission = false;

    return ( 
        <div>
            {permission ? <h2>Panel Admina</h2> : <Navigate to='/login' replace/>}
        </div>
    );
}
 
export default AdminPage;
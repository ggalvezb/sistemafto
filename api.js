const API_URL = 'https://backftoserviu-9d1a7cb636f2.herokuapp.com';

async function login(username, password) {
    // Obtener todos los administradores
    const response = await fetch(`${API_URL}/administrador/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const respuesta=await fetch(`${API_URL}/fto/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok || respuesta.ok) {
        const administradores = await response.json();
        const administrador = administradores.find(admin => admin.correo === username && admin.clave === password);
        const ftos = await respuesta.json();
        const fto = ftos.find(usuario => usuario.correo === username && usuario.clave === password);
        if (fto) {
            return ('F');
        } else if (administrador) {
            return ('A');
        } else {
            return ('error');
        }
    } else {
        const errorResponse = await response.json();
        console.error('Error 1', errorResponse);
        throw new Error('Error al obtener credenciales');
    }
}
async function getProyectos() {
    const response = await fetch(`${API_URL}/proyecto/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
async function createProyecto(nuevoProyecto) {
    console.log(nuevoProyecto);
    const response = await fetch(`${API_URL}/proyecto/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoProyecto)
    });
    return response.json();
}
async function deleteProyecto(id) {
    const response = await fetch(`${API_URL}/proyecto/${id}`, {
        method: 'DELETE'
    });

    return response.json();
}
async function updateProyecto(proyecto) {
    console.log(proyecto)
    const response = await fetch(`${API_URL}/proyecto/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(proyecto)
    });
    return response.json();
}
async function getAdministradore() {
    const response = await fetch(`${API_URL}/administrador/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
async function createAdministrador(nuevoAdmin) {
    const response = await fetch(`${API_URL}/administrador/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoAdmin)
    });
    return response.json();
}
async function deleteAdministrador(id) {
    const response = await fetch(`${API_URL}/administrador/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}
async function updateAdministrador(administrador) {
    const response = await fetch(`${API_URL}/administrador/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(administrador)
    });
    return response.json();
}
async function getFTO() {
    const response = await fetch(`${API_URL}/fto/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
async function createFTO(fto) {
    const response = await fetch(`${API_URL}/fto/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fto)
    });
    return response.json();
}
async function deleteFTO(id) {
    const response = await fetch(`${API_URL}/fto/${id}`, {
        method: 'DELETE'
    });
    return response.json();
}
async function updateFTO(fto) {
    const response = await fetch(`${API_URL}/fto/`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(fto)
    });
    return response.json();
}
async function asignarProyecto(ftoId, proyectoId) {
    const response = await fetch(`${API_URL}/fto/${ftoId}/asignarProyecto`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ proyectoId })
    });
    return response.json();
}
async function asignarProyecto(ftoId, proyectoId) {
    const response = await fetch(`${API_URL}/fto/asignarProyecto/${ftoId}/${proyectoId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response.json();
}
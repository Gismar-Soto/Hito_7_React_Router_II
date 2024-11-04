
Página de Pizza (Pizza.jsx): 

Usa useParams para obtener el id de la pizza y realiza una petición a la API para obtener su información. 

  

Contexto de Usuario (UserContext.jsx): 

Crea un contexto con un estado token simulado en true y un método logout para cambiar el token a false. 

  

Uso de UserContext en Navbar.jsx: 

Implementa la funcionalidad de logout y muestra condicionalmente los botones Profile y Logout cuando token es true, y Login y Register cuando es false. Home y Total siempre están visibles. 

  

Desactivar del botón "pagar" en Cart.jsx: 

Usa UserContext para desactivar el botón "pagar" si el token es false. 

  

Ruta protegida y redirecciones en App.jsx: 

La ruta /profile está protegida, redirigiendo a /login si token es false. Además, si token es true, las rutas login y register redirigen a home. 
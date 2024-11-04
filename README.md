
Página de Pizza (Pizza.jsx): 

Usa useParams para obtener el id de la pizza y realiza una petición a la API para obtener su información. 

  ![image](https://github.com/user-attachments/assets/6870e151-2deb-43e7-9e58-dfd44aa2b54f)


Contexto de Usuario (UserContext.jsx): 

Crea un contexto con un estado token simulado en true y un método logout para cambiar el token a false. 

  

Uso de UserContext en Navbar.jsx: 

Implementa la funcionalidad de logout y muestra condicionalmente los botones Profile y Logout cuando token es true, y Login y Register cuando es false. Home y Total siempre están visibles. 


  ![image](https://github.com/user-attachments/assets/dbf8d80e-e0d4-48d0-ae49-9f1039d88542)


Desactivar del botón "pagar" en Cart.jsx: 

Usa UserContext para desactivar el botón "pagar" si el token es false. 

  ![image](https://github.com/user-attachments/assets/a5869cb4-25c8-40d7-af65-f237e3b5e62b)
  ![image](https://github.com/user-attachments/assets/f5dfcff3-9f43-4e08-afdb-7ac3acfd6591)



Ruta protegida y redirecciones en App.jsx: 

La ruta /profile está protegida, redirigiendo a /login si token es false. Además, si token es true, las rutas login y register redirigen a home. 

## ¡Asegura el contenido de tus mensajes 📧 mediante el cifrado César!

Accede al sitio web: [anthonysanlucas.github.io](https://anthonysanlucas.github.io/encrypted-messages)

### ¿Qué es el Cifrado César? 

Esto es lo que se conoce como cifrado por sustitución, es una técnica simple que se remonta al siglo I a. e. c. en esta época Julio César era un político y militar romano. El cifrado césar fue nombrado así en honor a este personaje, dado que existen registros de que usaba un desplazamiento de tres para asegurar sus mensajes de contenido militar. 

### ¿Cómo funciona?

Puedes imaginar a el alfabeto y asignarle a cada letra una posición, por lo que tendríamos cada letra y su posición: 
```
{ a = 0, b = 1, c = 2 … z = 27 }
```
Esto es para el alfabeto español que contiene veintisiete letras, ahora bien si usamos una `llave 3` lo que haríamos sería desplazar a todo el alfabeto en `3 espacios`, teniendo como resultado:
```
{ a = 4, b = 5, c = 5 … z = 2 } 
```
Ahora la letra a se ha desplazado 3 espacios por lo que se encuentra en la posición 4 y así para el resto de las letras. Con esto ya podríamos obtener un mensaje cifrado.

>Toma en cuenta que para el desplazamiento de las ultimas letras del abecedario que superan la posición 27, lo único que se hace en continuar el desplazamiento desde la posición 0 hasta obtener su nueva posición. Además, solo existen 26 posibles combinaciones de cifrado. 

Pero ¿Cómo lo desciframos? Pues simplemente usamos la misma idea y ahora deberíamos hacer el mismo desplazamiento de tres espacios pero en la dirección contraria, de esa forma regresamos al posicionamiento inicial.

### ¿Realmente es seguro?

La respuesta corta es NO, el Cifrado César realmente no es seguro, tal vez en su época pudo funcionar porque pocas personas aprendían a leer y mucho menos iban a hacer esfuerzos por descubrir que significado había detrás.

Actualmente es fácil darse cuenta de que detrás de un texto de este tipo existe alguna forma de sustitución de letras, por lo que bastaría intentar cada uno de los posibles casos hasta que eventualmente se dé con el resultado.

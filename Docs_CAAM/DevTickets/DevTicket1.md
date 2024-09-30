# Development Ticket 1: Redirect "Ver proceso" Button

## Título
Implementar redirección del botón "Ver proceso" en la página de "Posiciones".

## Descripción
Se debe implementar la funcionalidad para que el botón "Ver proceso" redirija al usuario a la página de "Posicion". Esto implica agregar un evento de clic que cambie la URL a la de la página de "Posicion".

## Tipo de Ticket
- [ ] Feature
- [ ] Bug
- [ ] Refactor
- [x] Documentation

## Prioridad
- **P2**: Alta

## Pasos para Reproducir (Solo para Bugs)
N/A

## Solución Propuesta
Agregar un evento de clic al botón "Ver proceso" que utilice `window.location.href` para redirigir a la página de "Posicion".

## Tareas Relacionadas
- N/A

## Revisión y Pruebas
- [ ] Asegurarse de que el botón redirija correctamente a la página de "Posicion".
- [ ] Validar que no haya errores en la consola al hacer clic en el botón.
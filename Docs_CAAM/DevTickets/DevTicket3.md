# Development Ticket 3: Drag and Drop Functionality

## Título
Implementar funcionalidad de arrastrar y soltar en el tablero Kanban.

## Descripción
Se debe implementar la funcionalidad que permita a los usuarios arrastrar y soltar tarjetas de candidatos entre las columnas del tablero Kanban. Esto debe actualizar el estado del candidato en la base de datos.

## Tipo de Ticket
- [x] Feature
- [ ] Bug
- [ ] Refactor
- [ ] Documentation

## Prioridad
- **P1**: Urgente

## Pasos para Reproducir (Solo para Bugs)
N/A

## Solución Propuesta
Utilizar la API de arrastrar y soltar de HTML5 para permitir que las tarjetas se muevan entre columnas. Al soltar, se debe hacer una llamada a la API para actualizar el estado del candidato.

## Tareas Relacionadas
- Integrar la API para actualizar el estado del candidato.

## Revisión y Pruebas
- [ ] Validar que las tarjetas se puedan arrastrar y soltar correctamente.
- [ ] Asegurarse de que el estado del candidato se actualice en la base de datos.
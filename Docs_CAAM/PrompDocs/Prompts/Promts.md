## [1.][Intial prompt]

**Fecha:** [2024-09-29]
**Descripción:** [Initial promt]
**Type of IA:** [Cursor]
### Prompt Text:
``` 
As an expert full-stack developer, you need to enable the "Ver proceso" button on "Posiciones" to redirect the user to  "Posicion" page, create a Position page where following a kanban design there will be 4 columns for each state of contration, and inside then the user cards, with the functionality to drag and drop, besides that it should retrive information from the API end points, create the necesary user stories and development tickes tho achive this. Us this html code as a reference:

<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.tailwindcss.com?plugins=forms,typography"></script>
		<script src="https://unpkg.com/unlazy@0.11.3/dist/unlazy.with-hashing.iife.js" defer init></script>
		<script type="text/javascript">
			window.tailwind.config = {
				darkMode: ['class'],
				theme: {
					extend: {
						colors: {
							border: 'hsl(var(--border))',
							input: 'hsl(var(--input))',
							ring: 'hsl(var(--ring))',
							background: 'hsl(var(--background))',
							foreground: 'hsl(var(--foreground))',
							primary: {
								DEFAULT: 'hsl(var(--primary))',
								foreground: 'hsl(var(--primary-foreground))'
							},
							secondary: {
								DEFAULT: 'hsl(var(--secondary))',
								foreground: 'hsl(var(--secondary-foreground))'
							},
							destructive: {
								DEFAULT: 'hsl(var(--destructive))',
								foreground: 'hsl(var(--destructive-foreground))'
							},
							muted: {
								DEFAULT: 'hsl(var(--muted))',
								foreground: 'hsl(var(--muted-foreground))'
							},
							accent: {
								DEFAULT: 'hsl(var(--accent))',
								foreground: 'hsl(var(--accent-foreground))'
							},
							popover: {
								DEFAULT: 'hsl(var(--popover))',
								foreground: 'hsl(var(--popover-foreground))'
							},
							card: {
								DEFAULT: 'hsl(var(--card))',
								foreground: 'hsl(var(--card-foreground))'
							},
						},
					}
				}
			}
		</script>
		<style type="text/tailwindcss">
			@layer base {
				:root {
					--background: 0 0% 100%;
--foreground: 240 10% 3.9%;
--card: 0 0% 100%;
--card-foreground: 240 10% 3.9%;
--popover: 0 0% 100%;
--popover-foreground: 240 10% 3.9%;
--primary: 240 5.9% 10%;
--primary-foreground: 0 0% 98%;
--secondary: 240 4.8% 95.9%;
--secondary-foreground: 240 5.9% 10%;
--muted: 240 4.8% 95.9%;
--muted-foreground: 240 3.8% 46.1%;
--accent: 240 4.8% 95.9%;
--accent-foreground: 240 5.9% 10%;
--destructive: 0 84.2% 60.2%;
--destructive-foreground: 0 0% 98%;
--border: 240 5.9% 90%;
--input: 240 5.9% 90%;
--ring: 240 5.9% 10%;
--radius: 0.5rem;
				}
				.dark {
					--background: 240 10% 3.9%;
--foreground: 0 0% 98%;
--card: 240 10% 3.9%;
--card-foreground: 0 0% 98%;
--popover: 240 10% 3.9%;
--popover-foreground: 0 0% 98%;
--primary: 0 0% 98%;
--primary-foreground: 240 5.9% 10%;
--secondary: 240 3.7% 15.9%;
--secondary-foreground: 0 0% 98%;
--muted: 240 3.7% 15.9%;
--muted-foreground: 240 5% 64.9%;
--accent: 240 3.7% 15.9%;
--accent-foreground: 0 0% 98%;
--destructive: 0 62.8% 30.6%;
--destructive-foreground: 0 0% 98%;
--border: 240 3.7% 15.9%;
--input: 240 3.7% 15.9%;
--ring: 240 4.9% 83.9%;
				}
			}
		</style>
  </head>
  <body>
    

<div class="bg-background p-6">
  <h1 class="text-2xl font-bold mb-4"><img aria-hidden="true" alt="arrow" src="https://placehold.co/24?text=➡️" />Senior Backend Engineer Position</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-card p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold">Llamada telefónica</h2>
      <div class="mt-2" id="llamadaTelefonica">
        <div class="draggable-user-card bg-primary p-2 rounded-lg" draggable="true">
          <p class="text-primary-foreground">John Doe <span class="text-green-500">🟢🟢🟢🟢🟡</span> (4.5)</p>
        </div>
        <div class="draggable-user-card bg-primary p-2 rounded-lg" draggable="true">
          <p class="text-primary-foreground">Alice Johnson <span class="text-green-500">🟢🟢🟢</span> (3)</p>
        </div>
        <div class="draggable-user-card bg-primary p-2 rounded-lg" draggable="true">
          <p class="text-primary-foreground">Jane Smith <span class="text-green-500">🟢🟢🟢🟢</span> (4)</p>
        </div>
      </div>
    </div>
    <div class="bg-card p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold">Entrevista técnica</h2>
      <div class="mt-2 bg-zinc-200 p-2 rounded-lg" id="entrevistaTecnica">
        <p class="text-muted-foreground">No hay candidatos</p>
      </div>
    </div>
    <div class="bg-card p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold">Entrevista cultural</h2>
      <div class="mt-2 bg-zinc-200 p-2 rounded-lg" id="entrevistaCultural">
        <p class="text-muted-foreground">No hay candidatos</p>
      </div>
    </div>
    <div class="bg-card p-4 rounded-lg shadow">
      <h2 class="text-lg font-semibold">Entrevista manager</h2>
      <div class="mt-2 bg-zinc-200 p-2 rounded-lg" id="entrevistaManager">
        <p class="text-muted-foreground">No hay candidatos</p>
      </div>
    </div>
  </div>
</div>



  </body>
</html>

end points


GET /positions/:id/interviewFlow 
GET /positions/:id/candidates 
PUT /candidates/:id/stage

```
### Resultado Generado:
[title](follow_link)

### Cambios Realizados:
- 
### Errores:
[title](follow_link)
## [2.](create user stories and dev tickets)


### prompt Text:
```
create each user story and its corresponding development ticket using this macros.
``` 
### List of files changed.
'''
1.md
1.md
2.md
2.md
3.md
3.md
''' 
## [3.](solve dev tickets)


### prompt Text:
```
now guide me step by step to resolve each devticket, telling me where to apply changes or to create files

this are the endpoints
GET /positions/:id/interviewFlow
Este endpoint devuelve información sobre el proceso de contratación para una determinada posición:

positionName: Título de la posición
interviewSteps: id y nombre de las diferentes fases de las que consta el proceso de contratación
{
      "positionName": "Senior backend engineer",
      "interviewFlow": {
              
              "id": 1,
              "description": "Standard development interview process",
              "interviewSteps": [
                  {
                      "id": 1,
                      "interviewFlowId": 1,
                      "interviewTypeId": 1,
                      "name": "Initial Screening",
                      "orderIndex": 1
                  },
                  {
                      "id": 2,
                      "interviewFlowId": 1,
                      "interviewTypeId": 2,
                      "name": "Technical Interview",
                      "orderIndex": 2
                  },
                  {
                      "id": 3,
                      "interviewFlowId": 1,
                      "interviewTypeId": 3,
                      "name": "Manager Interview",
                      "orderIndex": 2
                  }
              ]
          }
  }
GET /positions/:id/candidates
Este endpoint devuelve todos los candidatos en proceso para una determinada posición, es decir, todas las aplicaciones para un determinado positionID. Proporciona la siguiente información:

name: Nombre completo del candidato
current_interview_step: en qué fase del proceso está el candidato.
score: La puntuación media del candidato
[
      {
           "fullName": "Jane Smith",
           "currentInterviewStep": "Technical Interview",
           "averageScore": 4
       },
       {
           "fullName": "Carlos García",
           "currentInterviewStep": "Initial Screening",
           "averageScore": 0            
       },        
       {
           "fullName": "John Doe",
           "currentInterviewStep": "Manager Interview",
           "averageScore": 5            
      }    
 ]

 
PUT /candidates/:id/stage
Este endpoint actualiza la etapa del candidato movido. Permite modificar la fase actual del proceso de entrevista en la que se encuentra un candidato específico, a través del parámetro "new_interview_step" y proporionando el interview_step_id correspondiente a la columna en la cual se encuentra ahora el candidato.

{
     "applicationId": "1",
     "currentInterviewStep": "3"
 }
{    
    "message": "Candidate stage updated successfully",
     "data": {
         "id": 1,
         "positionId": 1,
         "candidateId": 1,
         "applicationDate": "2024-06-04T13:34:58.304Z",
         "currentInterviewStep": 3,
         "notes": null,
         "interviews": []    
     }
 }
 
``` 
### List of files changed.
'''
''' 

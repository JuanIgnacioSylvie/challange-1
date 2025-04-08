// types/poll.ts
export interface PollOption {
  id: string // ID único de la opción
  text: string // Texto de la opción
  votes: number // Cantidad de votos
}

export interface Poll {
  id: string // ID único de la encuesta
  question: string // Pregunta
  options: PollOption[] // Opciones
}

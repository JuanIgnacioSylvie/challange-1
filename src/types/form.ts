// types/form.ts
export interface FormQuestion {
  id: string
  type: 'short' | 'long' | 'number' | 'radio' // Tipo de pregunta
  question: string
  options?: string[] // Opciones en caso de tipo 'radio'
  required?: boolean // Define si es requerida
  placeholder?: string // Placeholder para el input
}

export interface Form {
  id: string
  title: string
  questions: FormQuestion[]
}

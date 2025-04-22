// src/stores/formStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useFormStore = defineStore('formStore', () => {
    /**
     * Lista de formularios creados
     */
    const forms = ref([]);
    /**
     * Respuestas de cada formulario, indexadas por "formId"
     */
    const formResponses = ref({});
    /**
     * Crea un nuevo formulario y lo agrega a la lista
     */
    function createForm(title) {
        const newForm = {
            id: crypto.randomUUID(),
            title,
            questions: [],
        };
        forms.value.push(newForm);
        return newForm.id;
    }
    /**
     * Agrega una pregunta a un formulario específico
     */
    function addQuestion(formId, questionData) {
        const form = forms.value.find((f) => f.id === formId);
        if (form) {
            form.questions.push({
                id: crypto.randomUUID(),
                ...questionData,
            });
        }
    }
    /**
     * Devuelve el formulario correspondiente a un ID
     */
    function getFormById(id) {
        return forms.value.find((f) => f.id === id);
    }
    /**
     * Agrega una respuesta (mapa de questionId => answer) al array de respuestas de un formulario
     */
    function addResponse(formId, responseData) {
        if (!formResponses.value[formId]) {
            formResponses.value[formId] = [];
        }
        formResponses.value[formId].push(responseData);
    }
    /**
     * Obtiene todas las respuestas asociadas a un formulario
     */
    function getResponses(formId) {
        return formResponses.value[formId] || [];
    }
    return {
        forms,
        formResponses,
        createForm,
        addQuestion,
        getFormById,
        addResponse,
        getResponses,
    };
});
//# sourceMappingURL=formStore.js.map
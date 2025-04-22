import { defineStore } from 'pinia';
import { ref } from 'vue';
export const usePollStore = defineStore('pollStore', () => {
    const polls = ref([]);
    // Crear una encuesta
    function createPoll(question, options) {
        const newPoll = {
            id: crypto.randomUUID(),
            question,
            options: options.map((optionText) => ({
                id: crypto.randomUUID(),
                text: optionText,
                votes: 0,
            })),
        };
        polls.value.push(newPoll);
        return newPoll.id;
    }
    // Agregar un voto
    function votePoll(pollId, optionId) {
        const poll = polls.value.find((p) => p.id === pollId);
        if (poll) {
            const option = poll.options.find((o) => o.id === optionId);
            if (option) {
                option.votes++;
            }
        }
    }
    // Obtener encuesta por ID
    function getPollById(id) {
        return polls.value.find((p) => p.id === id);
    }
    return {
        polls,
        createPoll,
        votePoll,
        getPollById,
    };
});
//# sourceMappingURL=pollStore.js.map
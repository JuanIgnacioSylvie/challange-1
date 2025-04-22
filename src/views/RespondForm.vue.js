import { computed, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';
// Store
import { useFormStore } from '@/stores/formStore';
// Componentes
import Card from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';
import QuestionRenderer from '@/components/QuestionRenderer.vue';
// Ruta y store
const route = useRoute();
const router = useRouter();
const formStore = useFormStore();
const formId = route.params.id;
// Formulario original
const form = computed(() => formStore.getFormById(formId));
// Normalizamos el array de preguntas para que options y placeholder nunca sean undefined
const questions = computed(() => {
    const raw = form.value?.questions ?? [];
    return raw.map((q) => ({
        id: q.id,
        question: q.question,
        type: q.type,
        options: q.options ?? [],
        placeholder: q.placeholder ?? '',
        required: q.required ?? false,
    }));
});
// Respuestas reactivas
const responses = reactive({});
// Envío
function submitForm() {
    formStore.addResponse(formId, { ...responses });
    router.push(`/form/results/${formId}`);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof Card, typeof Card, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-3xl font-bold mb-6 text-center" },
});
(__VLS_ctx.form?.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.submitForm) },
    ...{ class: "space-y-6" },
});
for (const [q] of __VLS_getVForSourceType((__VLS_ctx.questions))) {
    /** @type {[typeof QuestionRenderer, ]} */ ;
    // @ts-ignore
    const __VLS_4 = __VLS_asFunctionalComponent(QuestionRenderer, new QuestionRenderer({
        key: (q.id),
        question: (q),
        modelValue: (__VLS_ctx.responses[q.id]),
    }));
    const __VLS_5 = __VLS_4({
        key: (q.id),
        question: (q),
        modelValue: (__VLS_ctx.responses[q.id]),
    }, ...__VLS_functionalComponentArgsRest(__VLS_4));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-center" },
});
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    type: "submit",
}));
const __VLS_8 = __VLS_7({
    type: "submit",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_9.slots.default;
var __VLS_9;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            BaseButton: BaseButton,
            QuestionRenderer: QuestionRenderer,
            form: form,
            questions: questions,
            responses: responses,
            submitForm: submitForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=RespondForm.vue.js.map
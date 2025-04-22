import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useFormStore } from '@/stores/formStore';
import Card from '@/components/BaseCard.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import QuestionBuilder from '@/components/QuestionBuilder.vue';
// Estado reactivo
const title = ref('');
const titleTouched = ref(false);
const questions = ref([]);
const router = useRouter();
const formStore = useFormStore();
// Error del título, sólo tras interactuar
const titleError = computed(() => {
    if (!titleTouched.value)
        return '';
    return title.value.trim() === '' ? 'El título es obligatorio.' : '';
});
// Validación general
const canSubmit = computed(() => {
    if (title.value.trim() === '' || questions.value.length === 0) {
        return false;
    }
    return questions.value.every((q) => {
        if (q.text.trim() === '')
            return false;
        if (q.type === 'radio') {
            return q.options.length > 0 && q.options.every((o) => o.trim() !== '');
        }
        return true;
    });
});
// Añade una sola pregunta
function addQuestion() {
    questions.value.push({
        text: '',
        type: 'short',
        options: [],
    });
}
// Elimina la pregunta en el índice dado
function removeQuestion(index) {
    questions.value.splice(index, 1);
}
// Crea el formulario y redirige
function submit() {
    if (!canSubmit.value)
        return;
    const formId = formStore.createForm(title.value.trim());
    questions.value.forEach((q) => formStore.addQuestion(formId, {
        question: q.text,
        type: q.type,
        options: q.options,
        required: false,
        placeholder: '',
    }));
    router.push(`/form/respond/${formId}`);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Card, typeof Card, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
var __VLS_3 = {};
__VLS_2.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-3xl mb-6 text-center text-gray-800 font-black" },
});
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    ...{ 'onInput': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.title),
    placeholder: "Título del formulario",
}));
const __VLS_5 = __VLS_4({
    ...{ 'onInput': {} },
    ...{ 'onBlur': {} },
    modelValue: (__VLS_ctx.title),
    placeholder: "Título del formulario",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
let __VLS_7;
let __VLS_8;
let __VLS_9;
const __VLS_10 = {
    onInput: (...[$event]) => {
        __VLS_ctx.titleTouched = true;
    }
};
const __VLS_11 = {
    onBlur: (...[$event]) => {
        __VLS_ctx.titleTouched = true;
    }
};
var __VLS_6;
if (__VLS_ctx.titleError) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-red-500 text-sm mb-4" },
    });
    (__VLS_ctx.titleError);
}
for (const [q, i] of __VLS_getVForSourceType((__VLS_ctx.questions))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (i),
        ...{ class: "mb-6" },
    });
    /** @type {[typeof QuestionBuilder, ]} */ ;
    // @ts-ignore
    const __VLS_12 = __VLS_asFunctionalComponent(QuestionBuilder, new QuestionBuilder({
        ...{ 'onRemove': {} },
        q: (q),
    }));
    const __VLS_13 = __VLS_12({
        ...{ 'onRemove': {} },
        q: (q),
    }, ...__VLS_functionalComponentArgsRest(__VLS_12));
    let __VLS_15;
    let __VLS_16;
    let __VLS_17;
    const __VLS_18 = {
        onRemove: (() => __VLS_ctx.removeQuestion(i))
    };
    var __VLS_14;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex space-x-2" },
});
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
    type: "button",
    variant: "secondary",
}));
const __VLS_20 = __VLS_19({
    ...{ 'onClick': {} },
    type: "button",
    variant: "secondary",
}, ...__VLS_functionalComponentArgsRest(__VLS_19));
let __VLS_22;
let __VLS_23;
let __VLS_24;
const __VLS_25 = {
    onClick: (__VLS_ctx.addQuestion)
};
__VLS_21.slots.default;
var __VLS_21;
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
    type: "button",
    variant: "primary",
    disabled: (!__VLS_ctx.canSubmit),
}));
const __VLS_27 = __VLS_26({
    ...{ 'onClick': {} },
    type: "button",
    variant: "primary",
    disabled: (!__VLS_ctx.canSubmit),
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
let __VLS_29;
let __VLS_30;
let __VLS_31;
const __VLS_32 = {
    onClick: (__VLS_ctx.submit)
};
__VLS_28.slots.default;
var __VLS_28;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['font-black']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            BaseInput: BaseInput,
            BaseButton: BaseButton,
            QuestionBuilder: QuestionBuilder,
            title: title,
            titleTouched: titleTouched,
            questions: questions,
            titleError: titleError,
            canSubmit: canSubmit,
            addQuestion: addQuestion,
            removeQuestion: removeQuestion,
            submit: submit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CreateForm.vue.js.map
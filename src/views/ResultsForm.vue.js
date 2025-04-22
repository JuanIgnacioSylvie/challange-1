import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useFormStore } from '@/stores/formStore';
import Card from '@/components/BaseCard.vue';
import FormResultItem from '@/components/FormResultItem.vue';
const route = useRoute();
const formStore = useFormStore();
const id = route.params.id;
const form = computed(() => formStore.getFormById(id));
const responses = computed(() => formStore.getResponses(id));
function getQuestionText(qId) {
    return form.value?.questions.find((q) => q.id === qId)?.question || '';
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
if (__VLS_ctx.responses.length) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    for (const [resp, i] of __VLS_getVForSourceType((__VLS_ctx.responses))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: (i),
            ...{ class: "mb-6 p-4 border border-gray-300 rounded shadow-sm" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
            ...{ class: "font-bold text-lg mb-3" },
        });
        (i + 1);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        /** @type {[typeof FormResultItem, ]} */ ;
        // @ts-ignore
        const __VLS_4 = __VLS_asFunctionalComponent(FormResultItem, new FormResultItem({
            response: (resp),
            getQuestionText: (__VLS_ctx.getQuestionText),
        }));
        const __VLS_5 = __VLS_4({
            response: (resp),
            getQuestionText: (__VLS_ctx.getQuestionText),
        }, ...__VLS_functionalComponentArgsRest(__VLS_4));
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-center text-gray-500" },
    });
}
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            FormResultItem: FormResultItem,
            form: form,
            responses: responses,
            getQuestionText: getQuestionText,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ResultsForm.vue.js.map
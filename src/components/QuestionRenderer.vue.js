import { ref, watch } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseTextarea from './BaseTextarea.vue';
const props = defineProps();
const emit = defineEmits();
const internal = ref(props.modelValue);
watch(internal, (v) => emit('update:modelValue', v));
watch(() => props.modelValue, (v) => (internal.value = v));
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "border border-gray-300 p-4 rounded shadow-sm mb-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
    ...{ class: "block mb-2" },
});
(__VLS_ctx.question.question);
if (__VLS_ctx.question.type === 'short') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.internal),
        placeholder: (__VLS_ctx.question.placeholder),
    }));
    const __VLS_1 = __VLS_0({
        modelValue: (__VLS_ctx.internal),
        placeholder: (__VLS_ctx.question.placeholder),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
}
else if (__VLS_ctx.question.type === 'long') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof BaseTextarea, ]} */ ;
    // @ts-ignore
    const __VLS_3 = __VLS_asFunctionalComponent(BaseTextarea, new BaseTextarea({
        modelValue: (__VLS_ctx.internal),
        placeholder: (__VLS_ctx.question.placeholder),
    }));
    const __VLS_4 = __VLS_3({
        modelValue: (__VLS_ctx.internal),
        placeholder: (__VLS_ctx.question.placeholder),
    }, ...__VLS_functionalComponentArgsRest(__VLS_3));
}
else if (__VLS_ctx.question.type === 'number') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    /** @type {[typeof BaseInput, ]} */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
        modelValue: (__VLS_ctx.internal),
        type: "number",
        placeholder: (__VLS_ctx.question.placeholder),
    }));
    const __VLS_7 = __VLS_6({
        modelValue: (__VLS_ctx.internal),
        type: "number",
        placeholder: (__VLS_ctx.question.placeholder),
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
}
else if (__VLS_ctx.question.type === 'radio') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    for (const [opt] of __VLS_getVForSourceType((__VLS_ctx.question.options))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({
            key: (opt),
            ...{ class: "flex items-center space-x-3 mb-2" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
            type: "radio",
            value: (opt),
            ...{ class: "form-radio text-blue-600" },
        });
        (__VLS_ctx.internal);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "text-lg" },
        });
        (opt);
    }
}
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['form-radio']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BaseInput: BaseInput,
            BaseTextarea: BaseTextarea,
            internal: internal,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=QuestionRenderer.vue.js.map
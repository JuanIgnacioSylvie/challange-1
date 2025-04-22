import { ref, watch } from 'vue';
import BaseInput from './BaseInput.vue';
import BaseButton from './BaseButton.vue';
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
    ...{ class: "flex items-center space-x-2 mb-2" },
});
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.internal),
    placeholder: "Opción",
}));
const __VLS_1 = __VLS_0({
    modelValue: (__VLS_ctx.internal),
    placeholder: "Opción",
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
    variant: "danger",
}));
const __VLS_4 = __VLS_3({
    ...{ 'onClick': {} },
    variant: "danger",
}, ...__VLS_functionalComponentArgsRest(__VLS_3));
let __VLS_6;
let __VLS_7;
let __VLS_8;
const __VLS_9 = {
    onClick: (...[$event]) => {
        __VLS_ctx.$emit('remove');
    }
};
__VLS_5.slots.default;
var __VLS_5;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            BaseInput: BaseInput,
            BaseButton: BaseButton,
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
//# sourceMappingURL=OptionInput.vue.js.map
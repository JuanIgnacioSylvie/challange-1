import { computed } from 'vue';
const props = defineProps();
const emit = defineEmits();
// Valores por defecto
const variant = props.variant ?? 'primary';
const type = props.type ?? 'button';
// Clases según la variante
const variantClass = computed(() => {
    switch (variant) {
        case 'secondary':
            return 'bg-blue-100 hover:bg-blue-200 text-blue-900';
        case 'danger':
            return 'bg-blue-700 hover:bg-blue-800 text-white';
        default:
            return 'bg-blue-500 hover:bg-blue-600 text-white';
    }
});
function onClick(event) {
    emit('click', event);
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    ...{ onClick: (__VLS_ctx.onClick) },
    type: (__VLS_ctx.type),
    ...{ class: "px-4 py-2 rounded-lg shadow font-medium transition hover:shadow-md" },
    ...{ class: (__VLS_ctx.variantClass) },
});
var __VLS_0 = {};
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:shadow-md']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            type: type,
            variantClass: variantClass,
            onClick: onClick,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=BaseButton.vue.js.map
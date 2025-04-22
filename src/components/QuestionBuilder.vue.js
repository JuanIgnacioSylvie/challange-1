import Card from './BaseCard.vue';
import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import BaseButton from './BaseButton.vue';
import OptionInput from './OptionInput.vue';
const props = defineProps();
const emit = defineEmits();
const q = props.q;
const typeOptions = [
    { value: 'short', label: 'Respuesta Corta' },
    { value: 'long', label: 'Respuesta Larga' },
    { value: 'number', label: 'Número' },
    { value: 'radio', label: 'Opción Múltiple' },
];
function onRemove() {
    emit('remove');
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
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.q.text),
    placeholder: "Pregunta",
}));
const __VLS_5 = __VLS_4({
    modelValue: (__VLS_ctx.q.text),
    placeholder: "Pregunta",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
/** @type {[typeof BaseSelect, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(BaseSelect, new BaseSelect({
    modelValue: (__VLS_ctx.q.type),
    options: (__VLS_ctx.typeOptions),
}));
const __VLS_8 = __VLS_7({
    modelValue: (__VLS_ctx.q.type),
    options: (__VLS_ctx.typeOptions),
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
if (__VLS_ctx.q.type === 'radio') {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "mb-4" },
    });
    for (const [opt, i] of __VLS_getVForSourceType((__VLS_ctx.q.options))) {
        /** @type {[typeof OptionInput, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(OptionInput, new OptionInput({
            ...{ 'onRemove': {} },
            key: (i),
            modelValue: (__VLS_ctx.q.options[i]),
        }));
        const __VLS_11 = __VLS_10({
            ...{ 'onRemove': {} },
            key: (i),
            modelValue: (__VLS_ctx.q.options[i]),
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        let __VLS_13;
        let __VLS_14;
        let __VLS_15;
        const __VLS_16 = {
            onRemove: (() => __VLS_ctx.q.options.splice(i, 1))
        };
        var __VLS_12;
    }
    /** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
    // @ts-ignore
    const __VLS_17 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
        ...{ 'onClick': {} },
    }));
    const __VLS_18 = __VLS_17({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_17));
    let __VLS_20;
    let __VLS_21;
    let __VLS_22;
    const __VLS_23 = {
        onClick: (...[$event]) => {
            if (!(__VLS_ctx.q.type === 'radio'))
                return;
            __VLS_ctx.q.options.push('');
        }
    };
    __VLS_19.slots.default;
    var __VLS_19;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-right" },
});
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
    variant: "danger",
}));
const __VLS_25 = __VLS_24({
    ...{ 'onClick': {} },
    variant: "danger",
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
let __VLS_27;
let __VLS_28;
let __VLS_29;
const __VLS_30 = {
    onClick: (__VLS_ctx.onRemove)
};
__VLS_26.slots.default;
var __VLS_26;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-right']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            BaseInput: BaseInput,
            BaseSelect: BaseSelect,
            BaseButton: BaseButton,
            OptionInput: OptionInput,
            q: q,
            typeOptions: typeOptions,
            onRemove: onRemove,
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
//# sourceMappingURL=QuestionBuilder.vue.js.map
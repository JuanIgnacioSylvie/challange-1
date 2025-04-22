import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePollStore } from '@/stores/pollStore';
import Card from '@/components/BaseCard.vue';
import BaseInput from '@/components/BaseInput.vue';
import BaseButton from '@/components/BaseButton.vue';
import OptionInput from '@/components/OptionInput.vue';
const question = ref('');
const options = ref(['']);
const pollStore = usePollStore();
const router = useRouter();
const canSubmit = computed(() => question.value.trim() !== '' && options.value.every((o) => o.trim() !== ''));
function createPoll() {
    if (!canSubmit.value)
        return;
    const id = pollStore.createPoll(question.value, options.value);
    router.push(`/poll/respond/${id}`);
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
/** @type {[typeof BaseInput, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(BaseInput, new BaseInput({
    modelValue: (__VLS_ctx.question),
    placeholder: "Escribe tu pregunta aquí",
}));
const __VLS_5 = __VLS_4({
    modelValue: (__VLS_ctx.question),
    placeholder: "Escribe tu pregunta aquí",
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
for (const [opt, i] of __VLS_getVForSourceType((__VLS_ctx.options))) {
    /** @type {[typeof OptionInput, ]} */ ;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(OptionInput, new OptionInput({
        ...{ 'onRemove': {} },
        key: (i),
        modelValue: (__VLS_ctx.options[i]),
    }));
    const __VLS_8 = __VLS_7({
        ...{ 'onRemove': {} },
        key: (i),
        modelValue: (__VLS_ctx.options[i]),
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_10;
    let __VLS_11;
    let __VLS_12;
    const __VLS_13 = {
        onRemove: (() => __VLS_ctx.options.splice(i, 1))
    };
    var __VLS_9;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex space-x-2" },
});
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
}));
const __VLS_15 = __VLS_14({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
let __VLS_17;
let __VLS_18;
let __VLS_19;
const __VLS_20 = {
    onClick: (...[$event]) => {
        __VLS_ctx.options.push('');
    }
};
__VLS_16.slots.default;
var __VLS_16;
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    ...{ 'onClick': {} },
    disabled: (!__VLS_ctx.canSubmit),
}));
const __VLS_22 = __VLS_21({
    ...{ 'onClick': {} },
    disabled: (!__VLS_ctx.canSubmit),
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_24;
let __VLS_25;
let __VLS_26;
const __VLS_27 = {
    onClick: (__VLS_ctx.createPoll)
};
__VLS_23.slots.default;
var __VLS_23;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            BaseInput: BaseInput,
            BaseButton: BaseButton,
            OptionInput: OptionInput,
            question: question,
            options: options,
            canSubmit: canSubmit,
            createPoll: createPoll,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=CreatePoll.vue.js.map
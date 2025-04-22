import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePollStore } from '@/stores/pollStore';
// Componentes
import Card from '@/components/BaseCard.vue';
import BaseButton from '@/components/BaseButton.vue';
const route = useRoute();
const router = useRouter();
const pollStore = usePollStore();
// ID que llega por ruta
const pollId = route.params.id;
// Usamos generics para que TS sepa que `poll` es Poll | undefined
const poll = computed(() => pollStore.getPollById(pollId));
// Ref para la opción seleccionada
const selectedOption = ref('');
function submitVote() {
    if (!poll.value || !selectedOption.value)
        return;
    pollStore.votePoll(poll.value.id, selectedOption.value);
    router.push(`/poll/results/${poll.value.id}`);
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
(__VLS_ctx.poll?.question);
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    ...{ onSubmit: (__VLS_ctx.submitVote) },
    ...{ class: "space-y-4" },
});
for (const [opt] of __VLS_getVForSourceType((__VLS_ctx.poll?.options))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        key: (opt.id),
        ...{ class: "flex items-center space-x-3" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
        type: "radio",
        value: (opt.id),
        ...{ class: "form-radio text-blue-600" },
    });
    (__VLS_ctx.selectedOption);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "text-lg" },
    });
    (opt.text);
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-center mt-4" },
});
/** @type {[typeof BaseButton, typeof BaseButton, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(BaseButton, new BaseButton({
    type: "submit",
    disabled: (!__VLS_ctx.selectedOption),
}));
const __VLS_5 = __VLS_4({
    type: "submit",
    disabled: (!__VLS_ctx.selectedOption),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
__VLS_6.slots.default;
var __VLS_6;
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-3']} */ ;
/** @type {__VLS_StyleScopedClasses['form-radio']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            BaseButton: BaseButton,
            poll: poll,
            selectedOption: selectedOption,
            submitVote: submitVote,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=RespondPoll.vue.js.map
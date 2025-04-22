import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { usePollStore } from '@/stores/pollStore';
import Card from '@/components/BaseCard.vue';
import PollResultItem from '@/components/PollResultItem.vue';
const route = useRoute();
const pollStore = usePollStore();
const id = route.params.id;
const poll = computed(() => pollStore.getPollById(id));
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
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
/** @type {[typeof PollResultItem, ]} */ ;
// @ts-ignore
const __VLS_4 = __VLS_asFunctionalComponent(PollResultItem, new PollResultItem({
    options: (__VLS_ctx.poll?.options || []),
}));
const __VLS_5 = __VLS_4({
    options: (__VLS_ctx.poll?.options || []),
}, ...__VLS_functionalComponentArgsRest(__VLS_4));
var __VLS_2;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Card: Card,
            PollResultItem: PollResultItem,
            poll: poll,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ResultsPoll.vue.js.map
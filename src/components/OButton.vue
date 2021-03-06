<template>
    <o-box as="button" :class="classes" v-bind="$props">
        <slot />
    </o-box>
</template>

<script lang="ts">
import { defineComponent, PropType, ButtonHTMLAttributes, useCssModule } from 'vue'
import OBox, { OBoxProps } from './OBox.vue'

type Variant = 'primary' | 'secondary'

// How to define all the ButtonHTMLAttributes here?
export const OButtonProps = {
    variant: {
        type: String as PropType<Variant>,
        default: 'primary',
    },
    // We can hand define the types for all ButtonHTMLAttributes, but that's so tedious!
    type: {
        type: String as PropType<ButtonHTMLAttributes['type']>,
        default: 'button',
    },
    ...OBoxProps,
}

export default defineComponent({
    name: 'OButton',
    components: { OBox },
    props: OButtonProps,
    setup(props) {
        const style = useCssModule()

        return {
            classes: {
                [style.primary]: props.variant === 'primary',
                [style.secondary]: props.variant === 'secondary',
            }
        }
    }
})
</script>

<style module>
.primary {
    @apply border-none rounded flex items-center justify-center bg-pink text-white font-bold p-4 leading-6 transition-shadow duration-100 ease-linear disabled:opacity-70 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-pink hover:bg-dark-pink no-underline appearance-none;
}

.secondary {
    @apply rounded flex items-center justify-center bg-white text-black border-pink border-2 font-bold p-4 leading-6 transition-shadow duration-100 ease-linear disabled:opacity-70 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-pink hover:bg-pink hover:text-white no-underline appearance-none;
}
</style>

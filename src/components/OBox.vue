<template>
    <component :is="as" :class="spacingClasses">
        <slot />
    </component>
</template>

<script lang="ts">
import { defineComponent, PropType, Component } from 'vue'
import { useSpacing, SpacingPropTypes } from '../composable/use-spacing'

export const AsProp = (def: keyof JSX.IntrinsicElements | Component) => ({
  type: [String, Object] as PropType<typeof def>,
  default: def,
})

export const OBoxProps = {
    ...SpacingPropTypes
  }

export default defineComponent({
  name: 'OBox',
  props: {
    ...OBoxProps,
    as: AsProp('div'),
  },
  setup(props) {
    return {
      spacingClasses: useSpacing(props)
    }
  },
})
</script>

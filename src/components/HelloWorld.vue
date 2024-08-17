<template>
  <div :class="classes" @click="onClick">{{ label }}-{{ state.count }}</div>
</template>
<script setup lang="ts">
import { computed, reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    label: string
    size?: 'small' | 'medium' | 'large'
    background?: string
    primary?: boolean
  }>(),
  { label: '测试' },
)
const emit = defineEmits<(e: 'click', id: number) => void>()
const state = reactive({ count: 0 })
const classes = computed(() => ({
  'storybook-button': true,
  'storybook-button--primary': props.primary,
  'storybook-button--secondary': !props.primary,
  [`storybook-button--${props.size || 'medium'}`]: true,
}))

const onClick = () => {
  state.count++
  emit('click', 1)
}
</script>

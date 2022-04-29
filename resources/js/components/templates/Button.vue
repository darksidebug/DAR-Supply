<template>
    <button class="" :class="className">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:["className"]
}
</script>
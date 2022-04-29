<template>
    <router-link :to="{path: pathTo}">
        <a class="py-2 px-3 font-medium" 
            :class="className">
            <slot></slot>
        </a>
    </router-link>
</template>
<script>
export default {
    props:["className", "pathTo"]
}
</script>
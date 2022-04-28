<template>
    <div class="mt-2">
        <label :for="labelFor">{{labelText}}</label>
        <input :type="inputType" id="labelFor" class="py-2 px-3 border border-gray-300 rounded" :placeholder="placeHolder">
    </div>
</template>
<script>
export default {
    props: [
        "labelFor",
        "inputType",
        "placeHolder",
        "labelText"
    ]
}
</script>
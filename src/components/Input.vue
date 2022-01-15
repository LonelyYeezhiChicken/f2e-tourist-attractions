<template>
    <div class="relative">
        <label for="search" class="absolute mt-2 ml-5">{{label}}</label>
        <input name="search" class="p-2 pl-2 w-80 rounded-3xl ">
    </div>
</template>
<script>
export default {
    name: 'IconInput',
    props: {label: { type: String, required: true }}
}
</script>
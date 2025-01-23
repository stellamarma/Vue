<template>
    <div class="car_brands">
        <h3>Car brads</h3>
        <slot name="cats"></slot>
        <slot name="brands"></slot>
        <slot></slot>
    </div>
</template>
<style scoped>
    .car_brands{
        border:1px solid #2196f3;
        padding:10px 20px;
    }

</style>
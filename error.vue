<template>
    <div>
        <h1>An error occured</h1>
        <p>{{ error }}</p>  
    </div>
</template>

<script>
    export default {
        props: {
            error: String
        }
    }
</script>
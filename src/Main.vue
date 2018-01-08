<template>
    <div>
        <tabs></tabs>
        <router-view></router-view>
    </div>
</template>
<script>
import Tabs from "./components/tabs.vue"

export default {
    components:{Tabs}

}
</script>


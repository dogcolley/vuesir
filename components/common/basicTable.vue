<template>
    <v-container class="U_ft_sz07 U_m_pd0">
        <table class="U_table01">
            <thead>
                <tr>
                    <th v-for="(item,id) in data.header" :key="id">{{item.name}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(id) in 10" :key="id">
                    <td>id : {{id}}</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                </tr>
            </tbody>
        </table>

        <br/>

        <div class="text-center U_page01 U_ft_sz07">
            <ul>
                <li><button type="button" class="start"><v-icon dense>mdi-chevron-left</v-icon><v-icon dense>mdi-chevron-left</v-icon></button></li>
                <li><button type="button"><v-icon dense>mdi-chevron-left</v-icon></button></li>
                <li><button type="button">1</button></li>
                <li class="on"><button type="button">2</button></li>
                <li><button type="button">3</button></li>
                <li><button type="button">4</button></li>
                <li><button type="button">5</button></li>
                <li><button type="button"><v-icon dense>mdi-chevron-right</v-icon></button></li>
                <li><button type="button" class="end"><v-icon dense>mdi-chevron-right</v-icon><v-icon dense>mdi-chevron-right</v-icon></button></li>
            </ul>
        </div>
  </v-container>
</template>

<script>
export default {
    props:{
        data:Array,
        name: String,
    },
}
</script>

<style >


</style>
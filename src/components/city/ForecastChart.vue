<template>
    <div>
        <apexchart width="100%" height="400px" max-height="500px" type="area" :options="options" :series="series"></apexchart>
    </div>
</template>
<script>
import moment from "moment"
export default {
    props: {
        weathers: {
            type: Array,
            required: true,
        }
    },
    data: () => ({
        options: {
            chart: {
                id: 'vuechart-example'
            },
            xaxis: {
                categories: []
            },
            stroke: {
                curve: 'smooth',
            }   
        },
        series: [{
            data: []
        }]
    }),

    
    mounted() {
        let categories = [];
        let data = [];
        this.weathers.map((weather) => {
            categories.push(this.formatDate(weather.dt_txt));
            data.push(weather.main.temp);
        });

        this.options = {
            chart: {
                id: 'vuechart-example'
            },
            xaxis: {
                categories: categories
            }
        };
        this.series = [{
            name: 'series-1',
            data: data,
        }];
    },

    methods: {
        formatDate(dateTime) {
            return moment(dateTime).format("MM/DD, ha");
        },
    }
}
</script>
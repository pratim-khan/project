window.onload = function () {
    // Chart 2: Horzental Bar Chart / AVERAGE SALARY BY DEPARTMENT
    var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title: {
            text: "AVERAGE SALARY BY DEPARTMENT",
        },
        axisX: {
            interval: 1,
        },
        axisY: {
            includeZero: true,
            prefix: "$ ",
        },
        data: [
            {
                type: "bar",

                dataPoints: [
                    { y: 62000, label: "Traffic", color: "darkgreen" },
                    { y: 75000, label: "IT", color: "darkblue" },
                    { y: 75000, label: "Web Development", color: "olive" },
                    { y: 55000, label: "Research", color: "gray" },
                    { y: 61000, label: "HR & Facillities", color: "brown" },
                    { y: 43714, label: "Production", color: "navy" },
                    { y: 48000, label: "Media Buying", color: "lightgreen" },
                    { y: 57000, label: "Finance & Accounts", color: "lightblue" },
                    { y: 59889, label: "Creative", color: "yellow" },
                    { y: 48200, label: "Account Planning", color: "lightgray" },
                    { y: 43200, label: "Account Service", color: "orange" },
                    { y: 275148, label: "Management", color: "blue" },
                ],
            },
        ],
    });
    chart.render();

    // Chart 3: Horzental Bar Chart / Salary Range BreakDown
    var chart1 = new CanvasJS.Chart("chartContainer2", {
        title: {
            text: "Salary Range BreakDown",
        },
        axisY: {
            title: "",
            maximum: 40,
        },
        data: [
            {
                type: "bar",
                dataPoints: [
                    { y: 0, label: "<20K", color: "gold" },
                    { y: 0, label: "20K<30K", color: "gold" },
                    { y: 0, label: "30K<40K", color: "gold" },
                    { y: 38, label: "40K<50K", color: "yellow" },
                    { y: 15, label: "50K<60K", color: "lightblue" },
                    { y: 8, label: "60K<70K", color: "lightgreen" },
                    { y: 11, label: "70K<80K", color: "darkblue" },
                    { y: 0, label: "80K<90K", color: "gold" },
                    { y: 0, label: "90K<100K", color: "gold" },
                    { y: 4, label: ">100K", color: "olive" },
                ],
            },
        ],
    });

    chart1.render();
};

// Chart 4: Stacked Bar Chart / SALARY BREAKDOWN BY DEPARTMENT
var barOptions_stacked = {
    tooltips: {
        enabled: false,
    },
    hover: {
        animationDuration: 0,
    },

    scales: {
        xAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                },
                scaleLabel: {
                    display: false,
                },
                gridLines: {},
                stacked: true,
            },
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                    color: "#fff",
                    zeroLineColor: "#fff",
                    zeroLineWidth: 0,
                },
                ticks: {
                    fontFamily: "'Open Sans Bold', sans-serif",
                    fontSize: 11,
                },
                stacked: true,
            },
        ],
    },

    animation: {
        onComplete: function () {
            var chartInstance = this.chart;
            var ctx = chartInstance.ctx;

            Chart.helpers.each(
                this.data.datasets.forEach(function (dataset, i) {
                    var meta = chartInstance.controller.getDatasetMeta(i);
                    Chart.helpers.each(
                        meta.data.forEach(function (bar, index) {
                            data = dataset.data[index];
                        }),
                        this
                    );
                }),
                this
            );
        },
    },
    pointLabelFontFamily: "Quadon Extra Bold",
    scaleFontFamily: "Quadon Extra Bold",
};

var ctx = document.getElementById("Chart4");
var myChart = new Chart(ctx, {
    type: "horizontalBar",
    axisY: {
        prefix: "$ ",
    },
    data: {
        labels: [
            "Management",
            "Account Service",
            "Account Planing",
            "Creative",
            "Finance & Accounts",
            "Media Buying",
            "Production",
            "HR & Facilities",
            "Research",
            "Web Development",
            "IT",
            "Traffic",
        ],

        datasets: [
            {
                data: [589, 537, 543, 574, 589, 537, 543, 574, 589, 537, 543, 574],
                backgroundColor: "rgba(63,203,226,1)",
            },
            {
                data: [589, 537, 543, 574, 589, 537, 543, 574, 589, 537, 543, 574],
                backgroundColor: "#5c9ad5",
            },
            {
                data: [589, 537, 543, 574, 589, 537, 543, 574, 589, 537, 543, 574],
                backgroundColor: "#d6844b",
            },
        ],
    },

    options: barOptions_stacked,
});

window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: "NUMBER OF EMPLOYEES PER DEPARTMENT",
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
                type: "column",

                dataPoints: [
                    { y: 4, label: "Management", color: "blue" },
                    { y: 10, label: "Account Service", color: "orange" },
                    { y: 8, label: "Account Planning", color: "lightgray" },
                    { y: 9, label: "Creative", color: "yellow" },
                    { y: 4, label: "Finance & Accounts", color: "lightblue" },
                    { y: 6, label: "Media Buying", color: "lightgreen" },
                    { y: 14, label: "Production", color: "navy" },
                    { y: 4, label: "HR & Facillities", color: "brown" },
                    { y: 4, label: "Research", color: "gray" },
                    { y: 5, label: "Web Development", color: "olive" },
                    { y: 4, label: "IT", color: "darkblue" },
                    { y: 4, label: "Traffic", color: "darkgreen" },
                ],
            },
        ],
    });
    chart.render();

    // Chart 2: Horzental Bar Chart / AVERAGE SALARY BY DEPARTMENT
    var chart2 = new CanvasJS.Chart("chartContainer3", {
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
    chart2.render();

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

    //  Chart 4: Horzental Stacked Bar Chart / SALARY BREAKDOWN BY DEPARTMENT
    var chart4 = new CanvasJS.Chart("chartContainer4", {
        animationEnabled: true,
        title: {
            text: "SALARY BREAKDOWN BY DEPARTMENT",
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
                type: "stackedBar",
                legendText: "Salary",
                showInLegend: "true",
                legendMarkerType: "square",
                legendMarkerColor: "lightblue",
                dataPoints: [
                    { y: 4, label: "Traffic", color: "lightblue" },

                    { y: 4, label: "IT", color: "lightblue" },

                    { y: 5, label: "Web Development", color: "lightblue" },

                    { y: 4, label: "Research", color: "lightblue" },

                    { y: 4, label: "HR & Facillities", color: "lightblue" },

                    { y: 14, label: "Production", color: "lightblue" },

                    { y: 6, label: "Media Buying", color: "lightblue" },

                    { y: 6, label: "Media Buying", color: "lightblue" },

                    { y: 4, label: "Finance & Accounts", color: "lightblue" },

                    { y: 9, label: "Creative", color: "lightblue" },

                    { y: 8, label: "Account Planning", color: "lightblue" },

                    { y: 10, label: "Account Service", color: "lightblue" },

                    { y: 4, label: "Management", color: "lightblue" },
                ],
            },
            {
                type: "stackedBar",
                legendText: "Bonus",
                showInLegend: "true",
                legendMarkerType: "square",
                legendMarkerColor: "darkblue",

                dataPoints: [
                    { y: 4, label: "Traffic", color: "darkblue" },

                    { y: 4, label: "IT", color: "darkblue" },

                    { y: 5, label: "Web Development", color: "darkblue" },

                    { y: 4, label: "Research", color: "darkblue" },

                    { y: 4, label: "HR & Facillities", color: "darkblue" },

                    { y: 14, label: "Production", color: "darkblue" },

                    { y: 6, label: "Media Buying", color: "darkblue" },

                    { y: 6, label: "Media Buying", color: "darkblue" },

                    { y: 4, label: "Finance & Accounts", color: "darkblue" },

                    { y: 9, label: "Creative", color: "darkblue" },

                    { y: 8, label: "Account Planning", color: "darkblue" },

                    { y: 10, label: "Account Service", color: "darkblue" },

                    { y: 4, label: "Management", color: "darkblue" },
                ],
            },
            {
                type: "stackedBar",
                legendText: "Overtime",
                showInLegend: "true",
                legendMarkerType: "square",
                legendMarkerColor: "orange",

                dataPoints: [
                    { y: 4, label: "Traffic", color: "orange" },

                    { y: 4, label: "IT", color: "orange" },

                    { y: 5, label: "Web Development", color: "orange" },

                    { y: 4, label: "Research", color: "orange" },

                    { y: 4, label: "HR & Facillities", color: "orange" },

                    { y: 14, label: "Production", color: "orange" },

                    { y: 6, label: "Media Buying", color: "orange" },

                    { y: 6, label: "Media Buying", color: "orange" },

                    { y: 4, label: "Finance & Accounts", color: "orange" },

                    { y: 9, label: "Creative", color: "orange" },

                    { y: 8, label: "Account Planning", color: "orange" },

                    { y: 10, label: "Account Service", color: "orange" },

                    { y: 4, label: "Management", color: "orange" },
                ],
            },
        ],
    });
    chart4.render();
};

// Chart 4: Stacked Bar Chart / SALARY BREAKDOWN BY DEPARTMENT
var barOptions_stacked = {
    title: {
        text: "AVERAGE SALARY BY DEPARTMENT",
    },
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
                data: [1800, 537, 543, 574, 589, 537, 543, 574, 589, 537, 543, 574],
                backgroundColor: "rgba(63,203,226,1)",
            },
            {
                data: [0, 100, 90, 100, 80, 120, 50, 100, 90, 120, 150, 0],
                backgroundColor: "#5c9ad5",
            },
            {
                data: [0, 0, 0, 0, 0, 0, 30, 0, 0, 0, 90, 0],
                backgroundColor: "#d6844b",
            },
        ],
    },

    options: barOptions_stacked,
});

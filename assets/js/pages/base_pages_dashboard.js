/*
 *  Document   : base_pages_dashboard.js
 *  Author     : pixelcave
 *  Description: Custom JS code used in Dashboard Page
 */

var BasePagesDashboard = function() {
    // Chart.js Chart, for more examples you can check out http://www.chartjs.org/docs
    var initDashChartJS = function(){
        // Get Chart Container
        var $dashChartLinesCon  = jQuery('.js-dash-chartjs-lines')[0].getContext('2d');

        // Set Chart and Chart Data variables
        var $dashChartLines, $dashChartLinesData;

        // Lines Chart Data
        var $dashChartLinesData = {
            labels: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            datasets: [
                {
                    label: 'Balance',
                    fillColor: 'rgba(44, 52, 63, .07)',
                    strokeColor: 'rgba(44, 52, 63, .25)',
                    pointColor: 'rgba(44, 52, 63, .25)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(44, 52, 63, 1)',
                    data: [2545, 284, -747, 1131, 1934, 2661, 1983]
                },

            ]
        };

        // Init Lines Chart
        $dashChartLines = new Chart($dashChartLinesCon).Line($dashChartLinesData, {
            scaleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            scaleFontColor: '#999',
            scaleFontStyle: '600',
            tooltipTitleFontFamily: "'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            tooltipCornerRadius: 3,
            maintainAspectRatio: false,
            responsive: true
        });
    };

    return {
        init: function () {
            // Init ChartJS chart
            initDashChartJS();
        }
    };
}();

// Initialize when page loads
jQuery(function(){ BasePagesDashboard.init(); });
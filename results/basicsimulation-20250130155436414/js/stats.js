var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1765",
        "ok": "1765",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1248",
        "ok": "1248",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "372",
        "ok": "372",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1337",
        "ok": "1337",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1509",
        "ok": "1509",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1728",
        "ok": "1728",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1758",
        "ok": "1758",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 30
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 13,
    "percentage": 65
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.429",
        "ok": "1.429",
        "ko": "-"
    }
},
contents: {
"req_authenticate-ea80a": {
        type: "REQUEST",
        name: "Authenticate",
path: "Authenticate",
pathFormatted: "req_authenticate-ea80a",
stats: {
    "name": "Authenticate",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1185",
        "ok": "1185",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1726",
        "ok": "1726",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1465",
        "ok": "1465",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "186",
        "ok": "186",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1471",
        "ok": "1471",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1609",
        "ok": "1609",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1726",
        "ok": "1726",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1726",
        "ok": "1726",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 9,
    "percentage": 90
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.714",
        "ko": "-"
    }
}
    },"req_get-cover-types-61d13": {
        type: "REQUEST",
        name: "Get Cover Types By Product Id",
path: "Get Cover Types By Product Id",
pathFormatted: "req_get-cover-types-61d13",
stats: {
    "name": "Get Cover Types By Product Id",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "701",
        "ok": "701",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1765",
        "ok": "1765",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1032",
        "ok": "1032",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "385",
        "ok": "385",
        "ko": "-"
    },
    "percentiles1": {
        "total": "760",
        "ok": "760",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1401",
        "ok": "1401",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1616",
        "ok": "1616",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1735",
        "ok": "1735",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 60
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 4,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.714",
        "ok": "0.714",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

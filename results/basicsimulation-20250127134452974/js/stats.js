var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "834",
        "ok": "1732",
        "ko": "834"
    },
    "maxResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "834"
    },
    "meanResponseTime": {
        "total": "1283",
        "ok": "1732",
        "ko": "834"
    },
    "standardDeviation": {
        "total": "449",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "1283",
        "ok": "1732",
        "ko": "834"
    },
    "percentiles2": {
        "total": "1508",
        "ok": "1732",
        "ko": "834"
    },
    "percentiles3": {
        "total": "1687",
        "ok": "1732",
        "ko": "834"
    },
    "percentiles4": {
        "total": "1723",
        "ok": "1732",
        "ko": "834"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.154",
        "ok": "0.077",
        "ko": "0.077"
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
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1732",
        "ok": "1732",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1732",
        "ok": "1732",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "0.077",
        "ko": "-"
    }
}
    },"req_get-cover-types-52188": {
        type: "REQUEST",
        name: "Get Cover Types",
path: "Get Cover Types",
pathFormatted: "req_get-cover-types-52188",
stats: {
    "name": "Get Cover Types",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "maxResponseTime": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "meanResponseTime": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "percentiles2": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "percentiles3": {
        "total": "834",
        "ok": "-",
        "ko": "834"
    },
    "percentiles4": {
        "total": "834",
        "ok": "-",
        "ko": "834"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.077",
        "ok": "-",
        "ko": "0.077"
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

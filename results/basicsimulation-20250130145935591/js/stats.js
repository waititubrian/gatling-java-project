var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "677",
        "ok": "1459",
        "ko": "677"
    },
    "maxResponseTime": {
        "total": "1982",
        "ok": "1982",
        "ko": "760"
    },
    "meanResponseTime": {
        "total": "1216",
        "ok": "1720",
        "ko": "712"
    },
    "standardDeviation": {
        "total": "520",
        "ok": "182",
        "ko": "28"
    },
    "percentiles1": {
        "total": "1110",
        "ok": "1718",
        "ko": "710"
    },
    "percentiles2": {
        "total": "1717",
        "ok": "1865",
        "ko": "722"
    },
    "percentiles3": {
        "total": "1961",
        "ok": "1972",
        "ko": "760"
    },
    "percentiles4": {
        "total": "1978",
        "ok": "1980",
        "ko": "760"
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
    "count": 10,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.538",
        "ok": "0.769",
        "ko": "0.769"
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
        "total": "1459",
        "ok": "1459",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1982",
        "ok": "1982",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1720",
        "ok": "1720",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "182",
        "ok": "182",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1718",
        "ok": "1718",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1865",
        "ok": "1865",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1972",
        "ok": "1972",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1980",
        "ok": "1980",
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
    "count": 10,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.769",
        "ok": "0.769",
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
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "677",
        "ok": "-",
        "ko": "677"
    },
    "maxResponseTime": {
        "total": "760",
        "ok": "-",
        "ko": "760"
    },
    "meanResponseTime": {
        "total": "712",
        "ok": "-",
        "ko": "712"
    },
    "standardDeviation": {
        "total": "28",
        "ok": "-",
        "ko": "28"
    },
    "percentiles1": {
        "total": "710",
        "ok": "-",
        "ko": "710"
    },
    "percentiles2": {
        "total": "722",
        "ok": "-",
        "ko": "722"
    },
    "percentiles3": {
        "total": "760",
        "ok": "-",
        "ko": "760"
    },
    "percentiles4": {
        "total": "760",
        "ok": "-",
        "ko": "760"
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.769",
        "ok": "-",
        "ko": "0.769"
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

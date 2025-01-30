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
        "total": "675",
        "ok": "675",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "985",
        "ok": "985",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles1": {
        "total": "958",
        "ok": "958",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1260",
        "ok": "1260",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1325",
        "ok": "1325",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1331",
        "ok": "1331",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 35
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 6,
    "percentage": 30
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 7,
    "percentage": 35
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.538",
        "ok": "1.538",
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
        "total": "1072",
        "ok": "1072",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1332",
        "ok": "1332",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1230",
        "ok": "1230",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "98",
        "ok": "98",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1306",
        "ok": "1306",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1329",
        "ok": "1329",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1331",
        "ok": "1331",
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
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 7,
    "percentage": 70
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
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "675",
        "ok": "675",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "740",
        "ok": "740",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "71",
        "ok": "71",
        "ko": "-"
    },
    "percentiles1": {
        "total": "703",
        "ok": "703",
        "ko": "-"
    },
    "percentiles2": {
        "total": "819",
        "ok": "819",
        "ko": "-"
    },
    "percentiles3": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "percentiles4": {
        "total": "843",
        "ok": "843",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 7,
    "percentage": 70
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 30
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.769",
        "ok": "0.769",
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

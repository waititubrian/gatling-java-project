package simulations;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;
import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

import static simulations.utils.Constants.AUTH_URI;
import static simulations.utils.Constants.BASE_URI;

public class BasicSimulation extends Simulation {


    private HttpProtocolBuilder httpProtocol = http
            .baseUrl(BASE_URI)
            .acceptHeader("application/json")
            .contentTypeHeader("application/json");


    private static ChainBuilder authenticate =
            exec(http("Authenticate")
                    .post(AUTH_URI)
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .formParam("grant_type", "password")
                    .formParam("client_id", "frontend-app")
                    .formParam("client_secret", "uDS4lLqRI4oqQ85XTkqGP9fxXU1latg9")
                    .formParam("username", "agencify@agent.com")
                    .formParam("password", "123456789")
                    .formParam("scope", "agencify_profile")
                    .check(jsonPath("$.access_token").saveAs("accessToken")));

    private static ChainBuilder getCoverTypes =
            exec(http("Get Cover Types By Product Id")
                    .get("/gis/setups/product-groups/58/cover-types")
                    .header("Authorization", "Bearer ${accessToken}")
                    .check(status().is(200)));

    private static ChainBuilder getAllBenefits =
            exec(http("Get All Benefits")
                    .get("/gis/setups/sub-class-cover-type-sections/optional/product-group/58/organization/4000/cover-type/1/binder/272")
                    .header("Authorization", "Bearer ${accessToken}")
                    .check(status().is(200)));

    private static ChainBuilder getValuers =
            exec(http("Get Valuers")
                    .get("/crm/service-provider/insurer/4000/activity/1")
                    .header("Authorization", "Bearer ${accessToken}")
                    .check(status().is(200)));

    private static ChainBuilder getMandatoryDocuments =
    exec(http("Get Mandatory Documents")
            .get("/gis/setups/required-documents")
            .header("Authorization", "Bearer ${accessToken}")
            .check(status().is(200)));

    private static ChainBuilder getOutstandingPremiums =
            exec(http("Get Outstanding Premiums")
                    .get("/billing/premium-card/outstanding/AG-44070A91")
                    .header("Authorization", "Bearer ${accessToken}")
                    .check(status().is(200)));


    private ScenarioBuilder scn = scenario("Test API with Authentication")
            .exec(authenticate)
            .pause(5)
            .exec(getCoverTypes)
            .pause(5)
            .exec(getAllBenefits)
            .pause(5)
            .exec(getValuers)
            .pause(5)
            .exec(getMandatoryDocuments)
            .pause(5)
            .exec(getOutstandingPremiums);

    {
//        setUp(scn.injectOpen(atOnceUsers(100))
//                .protocols(httpProtocol));

        // Gradually increase the number of users over time
        setUp(scn.injectOpen(rampUsers(100).during(60))
                .protocols(httpProtocol));
//
//        // Maintain a steady load
//        setUp(scn.injectOpen(constantUsersPerSec(20).during(120))
//                .protocols(httpProtocol));
//
//        // Sudden high load to test how the system handles extreme stress
//        setUp(scn.injectOpen(nothingFor(10), // Wait for 10 seconds
//                atOnceUsers(500), // Add 500 users instantly
//                rampUsers(1000).during(30)) // Gradually add 1000 users over 30 seconds
//                .protocols(httpProtocol));
//
//        // Increase load in increments to analyze performance at different thresholds
//        setUp(scn.injectOpen(
//                incrementUsersPerSec(5) // Start with 5 users/sec
//                        .times(5)               // Increase 5 times
//                        .eachLevelLasting(30)   // Each level lasts 30 seconds
//                        .separatedByRampsLasting(10) // 10 seconds between increments
//                        .startingFrom(10)       // Start with 10 users/sec
//        ).protocols(httpProtocol));
//
//        // Maintains a fixed number of concurrent users
//        setUp(scn.injectClosed(
//                constantConcurrentUsers(50).during(120) // 50 users active for 2 minutes
//        ).protocols(httpProtocol));

    }
}

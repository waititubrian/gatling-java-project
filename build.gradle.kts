plugins {
    id("java")
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation("io.gatling:gatling-core-java:3.9.5")
    testImplementation("io.gatling.highcharts:gatling-charts-highcharts:3.9.5")
}

// Task for running Gatling simulations
tasks.register<JavaExec>("gatlingRun") {
    group = "gatling"
    description = "Run a specific Gatling simulation"

    // Use the runtimeClasspath of the test source set
    classpath = sourceSets["test"].runtimeClasspath

    // Main Gatling entry point
    mainClass.set("io.gatling.app.Gatling")

    // Get the simulation class from the command line, default to BasicSimulation
    val simulationClass = if (project.hasProperty("simulation")) {
        project.property("simulation") as String
    } else {
        "simulations.BasicSimulation"
    }

    // Pass the simulation class as an argument to Gatling
    args = listOf("--simulation", simulationClass)
}

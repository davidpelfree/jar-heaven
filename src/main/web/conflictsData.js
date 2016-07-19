<<<<<<< HEAD
var conflictsJson = {conflicts:{"artifacts":[{"artifactName":"log4j:log4j","listOfPairs":[{"version":"1.2.9","path":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]}],"classes":[{"className":"org.apache.log4j.Logger","listOfPairs":[{"artifactName":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]},{"className":"org.apache.log4j.Priority","listOfPairs":[{"artifactName":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]},{"className":"org.apache.log4j.MDC","listOfPairs":[{"artifactName":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]}]}}
=======
var conflictsJson = {
    conflicts: {

        artifacts: [
            {
                artifactName: "art 1",
                listOfPairs: [
                    {
                        version: "v1",
                        path: "the/path/to/jar"
                    },
                    {   
                        version: "v2",
                        path: "the/path/to/jar"
                    }
                ]
            },
            {
                artifactName: "art 2",
                listOfPairs: [
                    {
                        version: "v3",
                        path: "the/path/to/jar"
                    },
                    {
                        version: "v4",
                        path: "the/path/to/jar"
                    },
                    {
                        version: "v5",
                        path: "the/path/to/jar"
                    }
                ]
            }
        ],

        classes: [
            {
                className: "class 2",
                listOfPairs: [
                    {
                        artifact_name: "artifactName1",
                        path: "the/path/to/artifactName"
                    },
                    {
                        artifact_name: "artifactName2",
                        path: "the/path/to/artifactName"
                    },
                    {
                        artifact_name: "artifactName3",
                        path: "the/path/to/artifactName"
                    }
                ]
            },
            {
                className: "class 3",
                listOfPairs: [
                    {
                        artifact_name: "artifactName2",
                        path: "the/path/to/artifactName"
                    }
                ]
            }
        ]
    }

}
>>>>>>> 1710a0a6a136401db5cf2d1936eb5f953760978b

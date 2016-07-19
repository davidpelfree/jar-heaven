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
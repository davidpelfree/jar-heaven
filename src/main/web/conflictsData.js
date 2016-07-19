var conflictsJson = {
    conflicts: [
        {
            artifacts: [
                {
                    arifact1: {
                        version: "v1",
                        path: "the/path/to/jar"
                    }
                },
                {
                    arifact2: {
                        version: "v2",
                        path: "the/path/to/jar"
                    }
                }
            ]
        },
        {classes: [
            {class1:{
                artifact_name: "artifactName1",
                path: "the/path/to/artifactName"
            }},
            {class2:{
                artifact_name: "artifactName2",
                path: "the/path/to/artifactName"
            }}
        ]}
    ]
}
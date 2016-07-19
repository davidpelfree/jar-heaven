<<<<<<< HEAD
var conflictsJson = {conflicts:{"artifacts":[{"artifactName":"log4j:log4j","listOfPairs":[{"version":"1.2.9","path":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]}],"classes":[{"className":"org.apache.log4j.Logger","listOfPairs":[{"artifact_name":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"},{"artifact_name":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]},{"className":"org.apache.log4j.MDC","listOfPairs":[{"artifact_name":"log4j:log4j:1.2.9","artifactPath":"com.my:artifact:1.0/log4j:log4j:1.2.9"}]}]}}
=======
var conflictsJson = {
    "conflicts": {

        "artifacts": [
            {
                "artifactName": "commons-lang:commons-lang:jar",
                "listOfPairs": [
                    {
                        "version": "2.4",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/commons-configuration:commons-configuration:jar:1.6"
                    },
                    {
                        "version": "2.6",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "2.6",
                        "path": "org.apache.hadoop:hadoop-hdfs:jar:2.6.0-cdh5.5.0"
                    }
                ]
            },
            {
                "artifactName": "com.google.guava:guava:jar",
                "listOfPairs": [
                    {
                        "version": "11.0.2",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "16.0.1",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0/org.apache.curator:curator-framework:jar"
                    },
                    {
                        "version": "16.0.1",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.curator:curator-client:jar:2.7.1"
                    },
                   {
                        "version": "16.0.1",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.curator:curator-recipes:jar:2.7.1"
                    }

                ]
            },
            {
                "artifactName": "commons-codec:commons-codec:jar",
                "listOfPairs": [
                    {
                        "version": "1.4",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.2",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/commons-httpclient:commons-httpclient:jar:3.1"
                    },
                    {
                        "version": "1.4",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/net.java.dev.jets3t:jets3t:jar:0.9.0"
                    },
                    {
                        "version": "1.4",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.4",
                        "path": "org.apache.hadoop:hadoop-hdfs:jar:2.6.0-cdh5.5.0"
                    }
                ]
            },
            {
                "artifactName": "org.codehaus.jackson:jackson-core-asl:jar",
                "listOfPairs": [
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9"
                    },
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9/org.codehaus.jackson:jackson-jaxrs:jar:1.8.3"
                    },
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9/org.codehaus.jackson:jackson-jaxrs:jar:1.8.3/org.codehaus.jackson:jackson-xc:jar:1.8.3"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.codehaus.jackson:jackson-mapper-asl:jar:1.8.8"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.avro:avro:jar:1.7.6-cdh5.5.0"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-hdfs:jar:2.6.0-cdh5.5.0"
                    }
                ]
            },
            {
                "artifactName": "org.codehaus.jackson:jackson-mapper-asl:jar",
                "listOfPairs": [
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9"
                    },
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9/org.codehaus.jackson:jackson-jaxrs:jar:1.8.3"
                    },
                    {
                        "version": "1.8.3",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/com.sun.jersey:jersey-json:jar:1.9/org.codehaus.jackson:jackson-xc:jar:1.8.3"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.avro:avro:jar:1.7.6-cdh5.5.0"
                    },
                    {
                        "version": "1.8.8",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-hdfs:jar:2.6.0-cdh5.5.0"
                    }
                ]
            },
            {
                "artifactName": "org.slf4j:slf4j-api:jar",
                "listOfPairs": [
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.6.4",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.avro:avro:jar:1.7.6-cdh5.5.0"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0/org.apache.directory.server:apacheds-kerberos-codec:jar:2.0.0-M15"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0/org.apache.directory.server:apacheds-kerberos-codec:jar:2.0.0-M15/org.apache.directory.server:apacheds-i18n:jar:2.0.0-M15"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0/org.apache.directory.server:apacheds-kerberos-codec:jar:2.0.0-M15/org.apache.directory.api:api-asn1-api:jar:1.0.0-M20"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0/org.apache.directory.server:apacheds-kerberos-codec:jar:2.0.0-M15/org.apache.directory.api:api-util:jar:1.0.0-M20"
                    },
                    {
                        "version": "1.7.6",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.curator:curator-client:jar:2.7.1"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.zookeeper:zookeeper:jar:3.4.5-cdh5.5.0"
                    },
                    {
                        "version": "1.7.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.zookeeper:zookeeper:jar:3.4.5-cdh5.5.0/org.slf4j:slf4j-log4j12:jar:1.7.5"
                    }
                ]
            },
            {
                "artifactName": "org.apache.httpcomponents:httpclient:jar",
                "listOfPairs": [
                    {
                        "version": "4.1.2",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/net.java.dev.jets3t:jets3t:jar:0.9.0"
                    },
                    {
                        "version": "4.2.5",
                        "path": "org.apache.hadoop:hadoop-common:jar:2.6.0-cdh5.5.0/org.apache.hadoop:hadoop-auth:jar:2.6.0-cdh5.5.0"
                    }
                ]
            }
        ],

        "classes": [
                    {
                        "className": "class 2",
                        "listOfPairs": [
                            {
                                "artifact_name": "artifactName1",
                                "path": "the/path/to/artifactName"
                            },
                            {
                                "artifact_name": "artifactName2",
                                "path": "the/path/to/artifactName"
                            },
                            {
                                "artifact_name": "artifactName3",
                                "path": "the/path/to/artifactName"
                            }
                        ]
                    },
                    {
                        "className": "class 3",
                        "listOfPairs": [
                            {
                                "artifact_name": "artifactName2",
                                "path": "the/path/to/artifactName"
                            }
                        ]
                    }
                ]
    }

}
>>>>>>> f32763e5a71f4818efd06f9937d552195e4a83db

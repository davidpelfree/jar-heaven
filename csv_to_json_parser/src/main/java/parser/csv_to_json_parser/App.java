package parser.csv_to_json_parser;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        CSVToJsonParser.csvToJsonParser("/Users/pavel_sopher/fuseday/jar-heaven/docs/example-artifacts-output.csv",
        		"/Users/pavel_sopher/fuseday/jar-heaven/docs/example-classes-output.csv",
        		"/Users/pavel_sopher/fuseday/jar-heaven/src/main/web/conflictsData.js");
    }
}

package parser.csv_to_json_parser;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.google.gson.Gson;

import json.classes.Conflicts;
import json.classes.JsonArtifactClass;
import json.classes.JsonClass;

public class CSVToJsonParser {
	
	public static void csvToJsonParser(String artifacts, String classes, String outputPath) {
		List<JsonArtifactClass> artifactJsonList = convertCSVToArtifactsJsonList(artifacts);
		List<JsonClass> classJsonList = convertCSVToClassJsonList(classes);

		Conflicts conflicts = new Conflicts();
		conflicts.setArtifacts(artifactJsonList);
		conflicts.setClasses(classJsonList);
		
		StringBuilder sb = new StringBuilder("var conflictsJson = {conflicts:");
		String conflictsJson = new Gson().toJson(conflicts);
		sb.append(conflictsJson.concat("}"));
		
		conflictsJson = sb.toString();
		
		
		PrintWriter writer;
		try {
			writer = new PrintWriter(outputPath, "UTF-8");
			writer.println(conflictsJson);
			writer.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		
		
	}

	private static List<JsonClass> convertCSVToClassJsonList(String classes) {
		List<String[]> classesList = csvToListStringArray(classes);		
		
		List<JsonClass> classJsonList = new ArrayList<>();
		
		JsonClass jc = new JsonClass();
		for (String[] strArr:classesList) {
			if (jc.getClassName().equals(strArr[0])) 
				jc.addToPairs(strArr[1], strArr[2]);
			else {
				if (!jc.getClassName().isEmpty())
					classJsonList.add(jc);
				jc = new JsonClass(strArr[0], strArr[1], strArr[2]);
				
				if(classesList.get(classesList.size() -1).equals(strArr))
					classJsonList.add(jc);
			}
		}
		
		return classJsonList;
	}

	private static List<JsonArtifactClass> convertCSVToArtifactsJsonList(String artifacts) {
		List<String[]> artifactsList = csvToListStringArray(artifacts);
		
		List<JsonArtifactClass> artifactJsonList = new ArrayList<>();
		
		JsonArtifactClass jac = new JsonArtifactClass();
		for (String[] strArr:artifactsList) {
			if (jac.getArtifactName().equals(strArr[0])) 
				jac.addToPairs(strArr[1], strArr[2]);
			else {
				if (!jac.getArtifactName().isEmpty())
					artifactJsonList.add(jac);
				jac = new JsonArtifactClass(strArr[0], strArr[1], strArr[2]);
				
				if(artifactsList.get(artifactsList.size() -1).equals(strArr))
					artifactJsonList.add(jac);
			}
		}
		
		return artifactJsonList;
	}

	private static List<String[]> csvToListStringArray(String path) {
		List<String[]> list = null;
		try (Stream<String> stream = Files.lines(Paths.get(path))) {
			return stream.skip(1).map(x->x.split(",")).collect(Collectors.toList());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return list;
	}
}

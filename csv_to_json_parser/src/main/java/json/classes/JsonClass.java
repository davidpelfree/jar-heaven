package json.classes;

import java.util.ArrayList;
import java.util.List;

public class JsonClass {
	class ClassPair {
		String artifact_name;
		String artifactPath;
		
		public ClassPair(String artifactName, String artifactPath) {
			this.artifact_name = artifactName;
			this.artifactPath = artifactPath;
		}

		public String getArtifactName() {
			return artifact_name;
		}

		public void setArtifactName(String artifactName) {
			this.artifact_name = artifactName;
		}

		public String getArtifactPath() {
			return artifactPath;
		}

		public void setArtifactPath(String artifactPath) {
			this.artifactPath = artifactPath;
		}

	}
	
	String className;
	List<ClassPair> listOfPairs;
	
	public JsonClass() {
		this.className = "";
		this.listOfPairs = new ArrayList<>();
	}
	
	public JsonClass(String className, String artifactName, String artifactPath) {
		this();
		this.className = className;
		this.listOfPairs.add(new ClassPair(artifactName, artifactPath));
	}
	
	public String getClassName() {
		return className;
	}
	public void setClassName(String className) {
		this.className = className;
	}
	public List<ClassPair> getListOfPairs() {
		return listOfPairs;
	}
	public void setListOfPairs(List<ClassPair> listOfPairs) {
		this.listOfPairs = listOfPairs;
	}
	
	public void addToPairs(String s1, String s2) {
		ClassPair pair = new ClassPair(s1, s2);
		this.listOfPairs.add(pair);
	}
	
}

package json.classes;

import java.util.ArrayList;
import java.util.List;

public class JsonArtifactClass {

	class ArtifactPair {
		String version;
		String path;

		public ArtifactPair(String version, String path) {
			this.version = version;
			this.path = path;
		}

		public String getVersion() {
			return version;
		}

		public void setVersion(String version) {
			this.version = version;
		}

		public String getPath() {
			return path;
		}

		public void setPath(String path) {
			this.path = path;
		}
	}

	String artifactName;
	List<ArtifactPair> listOfPairs;

	
	public JsonArtifactClass() {
		this.artifactName = "";
		listOfPairs = new ArrayList<>();
	}
	
	public JsonArtifactClass(String artifactName, String version, String path) {
		this();
		this.artifactName = artifactName;
		this.listOfPairs.add(new ArtifactPair(version, path));
	}
	
	public String getArtifactName() {
		return artifactName;
	}
	public void setArtifactName(String artifactName) {
		this.artifactName = artifactName;
	}
	public List<ArtifactPair> getListOfPairs() {
		return listOfPairs;
	}
	public void setListOfPairs(List<ArtifactPair> listOfPairs) {
		this.listOfPairs = listOfPairs;
	} 

	public void addToPairs(String s1, String s2) {
		ArtifactPair ap = new ArtifactPair(s1,s2);
		this.listOfPairs.add(ap);
	}

}

package json.classes;

import java.util.List;

public class Conflicts {
	
	List<JsonArtifactClass> artifacts;
	List<JsonClass> classes;
	public List<JsonArtifactClass> getArtifacts() {
		return artifacts;
	}
	public void setArtifacts(List<JsonArtifactClass> artifacts) {
		this.artifacts = artifacts;
	}
	public List<JsonClass> getClasses() {
		return classes;
	}
	public void setClasses(List<JsonClass> classes) {
		this.classes = classes;
	}
	
}

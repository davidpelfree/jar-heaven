package com.tikal.fuseday

import scala.io.Source
import java.io.File
import java.io.BufferedWriter
import java.io.FileWriter

class IndexClasses {
  def readFile(fileName : String) : List[JarsListItem] = {
    val lines = Source.fromFile(fileName).getLines().toList.drop(1)
    val list =
    for (line <- lines) yield {
        val x = line.split(",")
        JarsListItem(x(0), x(1), x(2)) 
    }
    list    
  }
  
  def openAllJars(jarData : List[JarsListItem]) : List[ClassListItem] = {
    jarData.foreach { println }
    val listOfClasses : List[ClassListItem] = jarData.flatMap { x => openJarFile(x) }
    
    // the list contains class names from all Jars
    // so I sort to get classes with same name in subsequent rows
    listOfClasses.sortWith((x, y) => x.fullyQualifiedClassName.compareTo(y.fullyQualifiedClassName) < 0)
  }
  
  def toCsvFile(outputFileName : String, list : List[ClassListItem]) : Unit = {
    val all : List[String] = list.map { x : ClassListItem => s"${x.fullyQualifiedClassName}, ${x.artifactName}, ${x.artifactDependencyPath}" }
    
    val file = new File(outputFileName)
    val bw = new BufferedWriter(new FileWriter(file))
    bw.write(all.mkString("\n"))
    bw.close()

  }
  
  def removeSuffix(string: String, suffix : String) : String = {
    string.substring(0, string.length - suffix.length)
  }
  def replace(s : String) : String = {
    s.replace("/", ".")
  }
  
  def openJarFile(item : JarsListItem) : List[ClassListItem] = {
    println(s"opening ${item.jarFileName}")
    
    val x = new Extract() ;
    val file = new File(item.jarFileName) ;
    val filesInTheJar : List[String] = x.extractClasses(file)
    
    val classesInTheJar = 
      filesInTheJar
      .filter(_.endsWith(".class"))  // only class files (no dtd, properties, etc
      .map(s => removeSuffix(s, ".class"))  // remove suffix .class
      .map(s => s.replace("/", ".") )       // replace / with .
      
    classesInTheJar.map { className : String => ClassListItem(className,item.artifactName, item.artifactDependencyPath) }
  }
}
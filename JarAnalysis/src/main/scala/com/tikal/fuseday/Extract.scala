package com.tikal.fuseday

import scala.collection.mutable.ListBuffer

class Extract {
  // extract.scala
  // from http://www.artima.com/forums/flat.jsp?forum=283&thread=245068
  import java.io._
  import java.util.jar._

  def copyStream(istream: InputStream, ostream: OutputStream): Unit = {
    var bytes = new Array[Byte](1024)
    var len = -1
    while ({ len = istream.read(bytes, 0, 1024); len != -1 })
      ostream.write(bytes, 0, len)
  }

  def extractClasses(file: File): List[String] = {
    //println(extractJar(file).filter(!_.isDirectory()).map (_.getName()).size)
    val list = extractJar(file).filter(!_.isDirectory()).map (_.getName());
    //println(s"found ${list.size} classes ");
    //list.foreach(println);
    //println("---");
    list
//    { entry =>  
//        if (entry.getName.startsWith(basename)) entry.getName.substring(basename.length)
//        else entry.getName
//      }
  }
  
  def extractJar(file: File): List[JarEntry] = {
    val basename = file.getName.substring(0, file.getName.lastIndexOf("."))
    val todir = new File(file.getParentFile, basename)
    todir.mkdirs()

    //println("Extracting " + file + " to " + todir)
    //var list = new ListBuffer[String];
    var list2 = new ListBuffer[JarEntry]
    val jar = new JarFile(file)
    val enu = jar.entries
    while (enu.hasMoreElements) {
      val entry = enu.nextElement
      val entryPath =
        if (entry.getName.startsWith(basename)) entry.getName.substring(basename.length)
        else entry.getName

//      if (!entry.isDirectory())
//      {
//        println(entryPath);
//        list += entryPath ;
//      }
      list2 += entry
//      println("Extracting to " + todir + "/" + entryPath)
//      if (entry.isDirectory) {
//        new File(todir, entryPath).mkdirs
//      } else {
//        val istream = jar.getInputStream(entry)
//        val ostream = new FileOutputStream(new File(todir, entryPath))
//        copyStream(istream, ostream)
//        ostream.close
//        istream.close
//      }
    }
    list2.toList
  }

  //Extract single zip/jar files or all of them in a directory.
  def accept(file: File) = List(".zip", ".jar").find { ext => file.getName.endsWith(ext) } != None
//  args.foreach { n =>
//    val fn = new File(n)
//    if (fn.isDirectory) {
//      val files = fn.listFiles.filter { f => accept(f) }
//      files.foreach { f => extractJar(f) }
//    } else if (accept(fn))
//      extractJar(fn)
//  }
}
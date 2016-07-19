package com.tikal.fuseday

object Main {
  def main(args: Array[String]): Unit = {
    val index: IndexClasses = new IndexClasses();
    val fileName = args(0);
    val outputFileName = args(1);

    index.toCsvFile(outputFileName,
      index.openAllJars(index.readFile(fileName)))
  }
}
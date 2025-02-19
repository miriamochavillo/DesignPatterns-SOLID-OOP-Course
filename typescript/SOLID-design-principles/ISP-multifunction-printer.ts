// Interface with multiple methods: Do not use this approach
// This is a bad approach because if we have to add a new method to the interface, we have to update all the classes that implement the interface
// interface Machine {
//   print(document: Document): void;
//   scan(document: Document): void;
//   fax(document: Document): void;
// }

// class MultiFunctionPrinter implements Machine {
//   print(document: Document): void {
//     console.log("The Machine is Printing");
//   }
//   scan(document: Document): void {
//     console.log("The Machine is Scanning");
//   }
//   fax(document: Document): void {
//     console.log("The Machine is sending a Fax");
//   }
// }

// --------------------------------------------------------------

interface Printer {
  print(document: Document): void;
}
interface Scanner {
  scan(document: Document): void;
}
interface Fax {
  fax(document: Document): void;
}

class SimplePrinter implements Printer {
  print(document: Document): void {
    console.log("The Printer is Printing");
  }
}
class SimpleScanner implements Scanner {
  scan(document: Document): void {
    console.log("The Scanner is Scanning");
  }
}
class SimpleFax implements Fax {
  fax(document: Document): void {
    console.log("The Fax is sending a Fax");
  }
}

class MultiFunctionPrinter implements Printer, Scanner, Fax {
  print(document: Document): void {
    console.log("The MultiFunctionPrinter is Printing");
  }
  scan(document: Document): void {
    console.log("The MultiFunctionPrinter is Scanning");
  }
  fax(document: Document): void {
    console.log("The MultiFunctionPrinter is sending a Fax");
  }
}

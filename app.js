class Process {
    constructor(cicles){
      this.cicles=cicles;
      this.next=null;
    }
}

class Queue {
    constructor() {
        this.head = null
    }

    extract() {
        this.head = this.head.next
    }

    add(newProcess) {
        if (!this.head){
            this.head=newProcess;
        }
      else {
        let temp=this.head;

        while (temp.next) {
            temp = temp.next;
        }

        temp.next = newProcess;
      }
    }

    current() {
        return this.head
    }

    pendingProcesses() {
      let temp=this.head;
      let i = 0;

      while (temp) {
        temp = temp.next;
        i++
      }

      return i;



    }

    pendingCicles() {
      let temp=this.head;
      let i = 0;

      while (temp) {
        i += temp.cicles
        temp = temp.next;
      }

      return i;
    }
}







let processes=new Queue();
let emptyCicles=0;
let exitProcesses=0;
let output = '';
for (let i=1; i<=300; i++){
  let txt= "cicle " + i + ": ";
  let probability=Math.floor(Math.random()*100+1);
  if (probability<=35){
    
    let cicles=Math.floor(Math.random()*11)+4;
    txt += "a process has been created with = " + cicles + ' cicles';
    let newProcess=new Process(cicles);
    processes.add(newProcess);
  }
  if (processes.current()==null){
    emptyCicles++;
  }else{
    processes.current().cicles--;
    if (processes.current().cicles==0){
      
        processes.extract();
      exitProcesses++;
    }

    output += txt + '\n'
  }
}

console.log(`${output} \n Empty cicles: ${emptyCicles} Exit procesess: ${exitProcesses} Pending processes: ${processes.pendingProcesses()} Pending cicles: ${processes.pendingCicles()}`)
describe("toDo", function(){
  it("assigns a task to a person", function(){
    toDo("Kyle","shopping").should.eql({name: "Kyle", task: "shopping"});
  });
});

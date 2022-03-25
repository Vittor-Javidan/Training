My idea here was to force a builder class to have only one instance, since don't make sense to have multiples instances of it.

What motivates me to make in this is my learning from c++
In c++ every "new" keyword call means a memory allocation on heap memory.
A allocation on heap is expensive in terms of processing power and at same that means the address of the instance created will be in a random place in memory, maybe far from the main code in memory.
I'm not sure how other languages works at the moment i'm writting this, but they all must create assembly instruction to comunicate with the cpu, so i'm just suposing instance creation is expansive for high level language as well.
For that reason a static class, to cut in half the new instances created by the code.

If you need to create 100 new persons, that means a 100 "new" keyword calls inside Person class and only one "new" keyword call for PersonBuilder class
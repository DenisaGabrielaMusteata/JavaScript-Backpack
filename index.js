/* Homework-3
Using javascript, model a system that helps you organize your backpack.
A backpack can have 3 types of “containers” 
(spaces to fit your items): small, medium, large.

Indications:
1. We start with an item counter set to 1 and an empty array []
2. We first pack a small item which will be identified using 1, so we push it to the result and increment the counter
3. We then pack a big item which will be identified using 2, so we also push it and increment the counter
4. Same for the next big item (3)
5. We do not have room to pack a third big item so we return -1 and leave the counter as is
6. We unpack one of the big items, and since the id of the last packed big item is 3, we return it
7. We pack a medium item identified with (4)
8. If trying to unpack an item size that does not exist, return -2

Restrictions:
I want you to use two classes in your implementation:
1. Backpack
2. PackingService

Inputs:

Object for backpack: 
{
  small: 8,
  medium: 4,
  big: 2
}

And a list of actions:
[["pack", "small"], ["pack", "big"], "["pack", "big"], 
["pack", "big"], ["unpack", "big"], ["pack", "medium"]]

Output:
[1, 2, 3, -1, 3, 4]
*/



class Backpack {
    constructor(index) {
      this.backpackLength = { ...index };
      this.itemCounter = { small: 1, medium: 1, big: 1};
      this.backpackSizes = { small: [], medium: [], big: [] };
    }
  
    pack(sizeType, item) {
      if (this.backpackSizes[sizeType].length < this.backpackLength[sizeType]) {
        this.backpackSizes[sizeType].push(item);
        return item;
      } else {
        return -1;
      }
    }
  
    unpack(sizeType) {
      if (this.backpackSizes[sizeType].length === 0) {
        return -2;
      } else {
        return this.backpackSizes[sizeType].pop();
      }
    }
  }
  
  class PackingService {
    constructor(input) {
      this.backpack = new Backpack(input);
      this.itemIdCounter = 1;
      this.result = [];
    }
  
    processActions(actions) {
      for (const action of actions) {
        const [actionType, size] = action;
        if (actionType === "pack") {
          const itemId = this.backpack.pack(size, this.itemIdCounter);
          this.result.push(itemId);
          if (itemId !== -1) {
            this.itemIdCounter++;
          }
        } else if (actionType === "unpack") {
          const item = this.backpack.unpack(size);
          this.result.push(item);
        }
      }
      return this.result;
    }
  }
  
  
  const backpack = {
    small: 8,
    medium: 4,
    big: 2,
  };
  
  const actions = [["pack", "small"], ["pack", "big"], ["pack", "big"], ["pack", "big"], ["unpack", "big"], ["pack", "medium"],];
  
  const packingService = new PackingService(backpack);
  const rez = packingService.processActions(actions);
  console.log(rez); 
  
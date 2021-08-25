import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";
import { Item } from "./item";

@Component({
  selector: "item-node",
  templateUrl: "item-node.component.html"
})
export class ItemNodeComponent implements OnChanges {
  @Input() item: Item;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      console.log(
        `${propName}: currentValue = ${cur}, previousValue = ${prev}`
      );
    }
  }
}
